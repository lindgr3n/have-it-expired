import Vue from "vue";
import Vuex from "vuex";

import { calculateExpires } from "./utils/utils";

import {
  signInUser,
  signupUser,
  signOutUser,
  addItemForUser,
  addUser,
  loadItemsForUser,
  deleteItemForUser
} from "./firebase";
import logger from "./logger";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: {},
    user: null,
    loading: false,
    error: null,
    appState: null,
    itemState: { type: null, item: null }
  },
  getters: {
    user(state) {
      return state.user;
    },
    items(state) {
      return state.items;
    },
    error(state) {
      return state.error;
    },
    loading(state) {
      return state.loading;
    },
    appState(state) {
      return state.appState;
    },
    itemState(state) {
      return state.itemState;
    }
  },
  mutations: {
    setUser(state, user) {
      const newUser = Object.assign({}, { key: user.uid, email: user.email });
      state.user = newUser;
    },
    clearUser(state) {
      state.user = null;
    },
    setItems(state, items) {
      state.items = items;
    },
    addItem(state, item) {
      state.items.push(item);
    },
    setLoading(state, { loading }) {
      state.loading = loading;
    },
    setAppState(state, { type }) {
      state.appState = type;
    },
    setError(state, message) {
      state.error = message;
    },
    clearError(state) {
      state.error = null;
    },
    setItemState(state, { type, item = null }) {
      state.itemState = { type, item };
    }
  },
  actions: {
    signInUser({ commit }, payload) {
      commit("clearError");
      // TODO: commit loading
      const loginPromise = signInUser(payload);
      loginPromise
        .then(user => {
          commit("setUser", user);
          // TODO: commit success
        })
        .catch(error => {
          logger.info(error.message);
          commit("setError", error.message);
        });
    },

    signupUser({ commit }, { email, password }) {
      commit("clearError");
      const createdUserPromise = signupUser({ email, password });
      createdUserPromise
        .then(user => {
          // Store user to datbase
          const addUserPromise = addUser(user);
          addUserPromise
            .then(() => {
              commit("setUser", user);
            })
            .catch(error => {
              logger.info(error.message);
              commit("setError", error.message);
            });
        })
        .catch(error => {
          logger.info(error.message);
          commit("setError", error.message);
        });
    },

    signOutUser({ commit }) {
      commit("clearError");
      const signOutPromise = signOutUser();
      signOutPromise
        .then(() => {
          commit("clearUser");
        })
        .catch(error => {
          logger.info(error.message);
          commit("setError", error.message);
        });
    },

    addItem({ commit, state }, item) {
      commit("clearError");
      commit("setItemState", { type: "saving" });
      // calculate expires
      const expires = calculateExpires(item.bought, item.daysValid);
      item.expires = expires;
      const addItemPromise = addItemForUser(state.user, item);
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

    loadItems({ commit, state }) {
      commit("setItemState", { type: "fetching" });
      const loadItemsPromise = loadItemsForUser(state.user);
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

    deleteItem({ commit, state, dispatch }, { key }) {
      commit("setItemState", { type: "remove" });
      const deleteItemsPromise = deleteItemForUser(state.user, key);
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
  }
});
