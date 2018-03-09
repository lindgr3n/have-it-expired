import Vue from "vue";
import Vuex from "vuex";

import { calculateExpires } from "./utils/utils";

import {
  signInUser,
  signupUser,
  signOutUser,
  addItemForUser,
  addUser
} from "./firebase";
import logger from "./logger";

Vue.use(Vuex);

const defaultState = {
  "-L7AywwIk-REEQpsCllK": {
    bought: "2018-03-09",
    daysValid: "30",
    title: "Månadskort",
    expires: "2018-04-08"
  },
  "-L7AzSOon31lMuPWzJ-i": {
    bought: "2018-03-09",
    daysValid: "20",
    title: "Test",
    expires: "2018-03-29"
  },
  "-L7AzSA5n31lMuPWzJ-i": {
    bought: "2018-02-20",
    daysValid: "30",
    title: "Test",
    expires: "2018-03-22"
  }
};

export default new Vuex.Store({
  state: {
    items: defaultState,
    user: null,
    loading: false,
    error: null
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
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
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
          const newUser = Object.assign(
            {},
            { key: user.uid, email: user.email }
          );

          // Store user to datbase
          const addUserPromise = addUser(newUser);
          addUserPromise
            .then(() => {
              commit("setUser", newUser);
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
    }
  }
});
