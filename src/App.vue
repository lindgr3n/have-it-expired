<template>
  <v-app>
    <div id="app" v-if="!isLoading">
      <div id="nav" v-if="user">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <button @click="logout">Logout</button>
      </div>
      <router-view/>
    </div>
     <div v-if="isLoading">
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
    isLoading() {
      return this.$store.getters.loading;
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
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
