<template>
  <v-app>
    <div id="app" v-if="isAppLoaded">
      <app-header v-if="user" :onLogout="logout"/>
      <router-view/>
    </div>
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
#nav {
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
}

.spacer {
  padding-right: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
