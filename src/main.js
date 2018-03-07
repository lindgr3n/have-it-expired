import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import firebase, { onAuthenticationChanged } from "./firebase";

Vue.config.productionTip = false;

// vue-material import
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css"; // This line here

Vue.use(VueMaterial);

new Vue({
  router,
  store,
  data: {
    firebase
  },
  created() {
    onAuthenticationChanged().then(user => {
      console.log("authChanged", user);
      if (user) {
        this.$router.push("/home");
      } else {
        this.$router.push("/login");
      }
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
