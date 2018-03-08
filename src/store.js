import Vue from "vue";
import Vuex from "vuex";

import { signInUser, signupUser, signOutUser } from "./firebase";

Vue.use(Vuex);

const defaultState = {
  key1: {
    id: "12345",
    title: "Månadskort norrtåg",
    bought: "2018-01-01",
    expires: "2018-01-31",
    daysValid: "30"
  },
  key2: {
    id: "1234523",
    title: "Månadskort Iksu",
    bought: "2018-01-01",
    expires: "2018-12-31",
    daysValid: "365"
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
    setUser(state, payload) {
      state.user = payload;
    },
    setItems(state, payload) {
      state.items = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
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
          console.log(error.message);
          commit("setError", error.message);
        });
    },

    signupUser({ commit }, { email, password }) {
      commit("clearError");
      const createdUserPromise = signupUser({ email, password });
      createdUserPromise
        .then(user => {
          commit("setUser", user);
        })
        .catch(error => {
          console.log(error.message);
          commit("setError", error.message);
        });
    },

    signOutUser({ commit }) {
      commit("clearError");
      const signOutPromise = signOutUser();
      signOutPromise
        .then(() => {
          commit("setUser", null);
        })
        .catch(error => {
          console.log(error.message);
          commit("setError", error.message);
        });
    },

    clearError({ commit }) {
      commit("clearError");
    }
  }
});
