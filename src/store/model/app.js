const state = {
  loading: false,
  error: null,
  appState: null
};

export const getters = {
  error(state) {
    return state.error;
  },
  loading(state) {
    return state.loading;
  },
  appState(state) {
    return state.appState;
  }
};

export const mutations = {
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
};

export const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
};
