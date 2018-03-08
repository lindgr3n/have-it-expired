import Vue from "vue";
import Vuex from "vuex";

import { signInUser, signUpUser } from "./firebase";

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
    user: null
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    signInUser({ commit }, payload) {
      // TODO: commit loading
      const loginPromise = signInUser(payload);
      loginPromise.then(user => {
        commit("setUser", user);
        // TODO: commit success
      });
    },

    signUpUser({ commit }, { email, password }) {
      const createdUserPromise = signUpUser({ email, password });
      createdUserPromise.then(user => {
        commit("setUser", user);
      });
    }
  }
});
