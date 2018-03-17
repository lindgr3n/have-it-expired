import { calculateExpires } from "../../utils/utils";
import {
  addItemForUser,
  loadItemsForUser,
  deleteItemForUser
} from "../../firebase";
import logger from "../../logger";

const state = {
  items: {},
  itemState: { type: null, item: null }
};

export const getters = {
  items(state) {
    return state.items;
  },
  itemState(state) {
    return state.itemState;
  }
};

export const mutations = {
  setItems(state, items) {
    state.items = items;
  },
  addItem(state, item) {
    state.items.push(item);
  },
  setItemState(state, { type, item = null }) {
    state.itemState = { type, item };
  }
};

export const actions = {
  addItem({ commit, rootState }, item) {
    commit("clearError");
    commit("setItemState", { type: "saving" });
    // calculate expires
    const expires = calculateExpires(item.bought, item.daysValid);
    item.expires = expires;
    const addItemPromise = addItemForUser(rootState.user.user, item);
    addItemPromise
      .then(data => {
        const key = data.key;
        const newItem = Object.assign({}, item, { id: key });
        commit("addItem", newItem);
        commit("setItemState", { type: "success", item: newItem });
      })
      .catch(error => {
        logger.info(error.message);
        commit("setError", error.message);
        commit("setItemState", { type: "error" });
      });
  },

  loadItems({ commit, rootState }) {
    commit("setItemState", { type: "fetching" });
    const loadItemsPromise = loadItemsForUser(rootState.user.user);
    loadItemsPromise
      .then(data => {
        const response = data.val();
        let items = [];
        if (response) {
          // Store key on item object
          items = Object.keys(response).map(key => {
            return Object.assign({}, response[key], { key });
          });
        }
        // Object.keys(data);
        commit("setItemState", { type: "success" });
        commit("setItems", items);
      })
      .catch(error => {
        logger.info(error.message);
        commit("setError", error.message);
      });
  },

  deleteItem({ commit, dispatch, rootState }, { key }) {
    commit("setItemState", { type: "remove" });
    const deleteItemsPromise = deleteItemForUser(rootState.user.user, key);
    deleteItemsPromise
      .then(() => {
        commit("setLoading", { loading: false });
        // Trigger refresh
        dispatch("loadItems"); // TODO: make load listen on on instead of once
        commit("setItemState", { type: "success" });
      })
      .catch(error => {
        logger.info(error.message);
        commit("setError", error.message);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
