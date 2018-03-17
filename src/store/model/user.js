import { signInUser, signupUser, signOutUser, addUser } from "../../firebase";
import { userType } from "../../model/user";
import logger from "../../logger";

const state = {
  user: null
};

export const getters = {
  user(state) {
    return state.user;
  }
};

export const mutations = {
  setUser(state, user) {
    state.user = userType(user);
  },
  clearUser(state) {
    state.user = null;
  }
};

export const actions = {
  signInUser({ commit, dispatch }, payload) {
    commit("clearError");
    // TODO: commit loading
    const loginPromise = signInUser(payload);
    loginPromise
      .then(user => {
        dispatch("setUser", user);
        // TODO: commit success
      })
      .catch(error => {
        logger.info(error.message);
        commit("setError", error.message);
      });
  },

  signupUser({ commit, dispatch }, { email, password }) {
    commit("clearError");
    const createdUserPromise = signupUser({ email, password });
    createdUserPromise
      .then(user => {
        // Store user to datbase
        const addUserPromise = addUser(user);
        addUserPromise
          .then(() => {
            dispatch("setUser", user);
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

  setUser({ commit }, user) {
    // TODO: update database latest login
    commit("setUser", user);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
