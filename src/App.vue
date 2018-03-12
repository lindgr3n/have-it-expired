<template>
  <v-app id="app">
    <app-header v-if="user" :onLogout="logout"/>
    <v-content v-if="isAppLoaded">
      <v-container >          
        <router-view/>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text"></span>
    </v-footer>
    <div v-if="!isAppLoaded">
      <v-progress-linear :indeterminate="true"></v-progress-linear>
     </div>
  </v-app>
</template>

<script>
import Header from "./components/molecules/Header";

export default {
  name: "app",

  components: {
    "app-header": Header
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },
    isAppLoaded() {
      return this.$store.getters.appState === "success";
    }
  },

  watch: {
    user(value) {
      if (value === null || value === undefined) {
        this.$router.replace("/login");
      }
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("signOutUser");
    }
  }
};
</script>


<style>
</style>
