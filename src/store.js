import Vue from "vue";
import Vuex from "vuex";

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
    items: defaultState
  },
  mutations: {},
  actions: {}
});
