import Vue from "vue";
import Vuex from "vuex";

import { calculateExpires } from "./utils/utils";

import {
  signInUser,
  signupUser,
  signOutUser,
  addItemForUser,
  addUser,
  loadItemsForUser
} from "./firebase";
import logger from "./logger";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: {},
    user: null,
    loading: false,
    error: null,
    appState: null
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

      // calculate expires
      const expires = calculateExpires(item.bought, item.daysValid);
      item.expires = expires;
      const addItemPromise = addItemForUser(state.user, item);
      addItemPromise
        .then(data => {
          const key = data.key;
          const newItem = Object.assign({}, item, { id: key });
          commit("addItem", newItem);
        })
        .catch(error => {
          logger.info(error.message);
          commit("setError", error.message);
        });
    },

    loadItems({ commit, state }) {
      commit("setLoading", { loading: true });
      const loadItemsPromise = loadItemsForUser(state.user);
      loadItemsPromise
        .then(data => {
          const items = Object.values(data.val()).map(item => item);
          // Object.keys(data);
          commit("setLoading", { loading: false });
          commit("setItems", items);
        })
        .catch(error => {
          logger.info(error.message);
          commit("setError", error.message);
        });
    }
  }
});
