<template>
  <v-card class="login-content">
    <v-text-field label="Email" v-model="email" required :error="showError">
    </v-text-field>

    <v-text-field label="password" v-model="password" type="password" required :error="showError">
    </v-text-field>
    <p>Register here <router-link to="/register">Register</router-link></p>
    <v-btn color="info" v-on:click="submit">Login</v-btn>
    <v-layout row v-if="error">
      <v-snackbar :value="showError" color="error" top>
        {{ error }}
      </v-snackbar>
    </v-layout>
   
  </v-card>
</template>

<script>
export default {
  name: "login",

  props: ["onLogin", "loading", "error"],

  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    showError() {
      return this.error !== null && this.error !== undefined;
    }
  },

  methods: {
    submit() {
      this.onLogin({ email: this.email, password: this.password });
    }
  }
};
</script>

<style scoped>
.login-content {
  padding: 20px;
}
</style>
