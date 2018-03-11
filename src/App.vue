<template>
  <v-app>
    <div id="app" v-if="isAppLoaded">
      <div id="nav" v-if="user">
        <div>
          <router-link class="spacer" to="/">Home</router-link>
          <router-link class="spacer" to="/register">Register</router-link>
          <router-link class="spacer" to="/about">About</router-link>
        </div>
        <button @click="logout">Logout</button>
      </div>
      <router-view/>
    </div>
     <div v-if="!isAppLoaded">
      <v-progress-linear :indeterminate="true"></v-progress-linear>
     </div>
  </v-app>
</template>

<script>
export default {
  name: "app",

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
