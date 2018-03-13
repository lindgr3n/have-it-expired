<template>
    <v-login :onLogin="onLogin" :loading="loading" :error="error" />
</template>

<script>
import Login from "@/components/molecules/Login";
export default {
  name: "login-dialog",

  components: {
    "v-login": Login
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },

    loading() {
      return this.$store.getters.loading;
    },

    error() {
      return this.$store.getters.error;
    }
  },

  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.replace("/");
      }
    }
  },

  methods: {
    onLogin({ email, password }) {
      this.$store.dispatch("signInUser", { email, password });
    },
    onDismissed() {
      this.$store.commit("clearError");
    }
  },

  destroyed() {
    this.$store.commit("clearError");
  }
};
</script>

<style scoped>
</style>
