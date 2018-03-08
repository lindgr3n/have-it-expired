<template>
  <div class="dialog">
    <v-register :onRegister="onRegister" :loading="loading" :error="error"/>
  </div>
</template>

<script>
import Register from "@/components/molecules/Register";
export default {
  name: "v-register-dialog",

  components: {
    "v-register": Register
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
    onRegister({ email, password }) {
      this.$store.dispatch("signUpUser", { email, password });
    }
  },

  destroyed() {
    this.$store.dispatch("clearError");
  }
};
</script>

<style scoped>
.dialog {
  width: 300px;
}
</style>
