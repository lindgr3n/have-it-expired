<template>
  <div class="dialog">
    <v-signup :onSignup="onSignup" :loading="loading" :error="error"/>
  </div>
</template>

<script>
import Signup from "@/components/molecules/Signup";
export default {
  name: "signup-dialog",

  components: {
    "v-signup": Signup
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
    onSignup({ email, password }) {
      this.$store.dispatch("signupUser", { email, password });
    }
  },

  destroyed() {
    this.$store.commit("clearError");
  }
};
</script>

<style scoped>
.dialog {
  width: 300px;
}
</style>
