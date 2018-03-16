import "babel-polyfill";
import Vue from "vue";
import Raven from "raven-js";
import RavenVue from "raven-js/plugins/vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import firebase, { onAuthenticationChanged } from "./firebase";

Vue.config.productionTip = false;

Raven.config(process.env.VUE_APP_RAVENKEY)
  .addPlugin(RavenVue, Vue)
  .install();

// vuetify import
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader

import logger from "./logger";
Vue.use(Vuetify);

new Vue({
  router,
  store,
  data: {
    firebase,
    logger
  },
  created() {
    this.$store.commit("setAppState", { type: "loading" });
    onAuthenticationChanged().then(user => {
      if (user) {
        const newUser = Object.assign({}, { key: user.uid, email: user.email });
        this.$store.commit("setUser", newUser);
        this.$router.push("/");
      } else {
        this.$router.push("/login");
      }
      this.$store.commit("setAppState", { type: "success" });
    });
  },

  render: h => h(App)
}).$mount("#app");

// onInitialized().then(() => {
//   console.log("test", app);
//   if (!app) {
//     app = new Vue({
//       router,
//       store,
//       data: {
//         firebase
//       },
//       render: h => h(App)
//     }).$mount("#app");
//   }
//   console.log(app);
// });
