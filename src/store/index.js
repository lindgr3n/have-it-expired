import Vue from "vue";
import Vuex from "vuex";
// import createLogger from "vuex/dist/logger"; //Using vuex devtools

import app from "./model/app";
import user from "./model/user";
import item from "./model/item";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    app,
    user,
    item
  },
  strict: debug
  // plugins: debug ? [createLogger()] : []
});
