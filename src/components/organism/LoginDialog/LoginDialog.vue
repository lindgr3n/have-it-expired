<template>
  <div class="dialog">
    <v-login :onLogin="onLogin" />
  </div>
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
    }
  }
};
</script>

<style scoped>
.dialog {
  width: 300px;
}
</style>
