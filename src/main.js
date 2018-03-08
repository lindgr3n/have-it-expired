import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import firebase, { onAuthenticationChanged } from "./firebase";

Vue.config.productionTip = false;

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
    this.$store.commit("setLoading", { loading: true });
    onAuthenticationChanged().then(user => {
      if (user) {
        this.$store.commit("setUser", user);
        this.$router.push("/");
      } else {
        this.$router.push("/login");
      }
      this.$store.commit("setLoading", { loading: false });
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
