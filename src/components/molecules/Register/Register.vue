<template>
  <div>
    <p>Please signup</p>
    <v-card class="register-content"> 
      <v-text-field label="Email" v-model="email" required :error="showError">
      </v-text-field>

      <v-text-field label="Password" v-model="password" type="password" :error="showError">
      </v-text-field>
      <v-btn color="info" v-on:click="register">Register</v-btn>
      <span>or go back to <router-link to="/login">login</router-link></span>
    </v-card>
    <v-layout row v-if="error">
      <v-snackbar :value="showError" color="error" top>
        {{ error }}
      </v-snackbar>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "v-register",

  props: ["onRegister", "loading", "error"],

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
    register() {
      this.onRegister({ email: this.email, password: this.password });
    }
  }
};
</script>

<style scoped>
.register-content {
  padding: 20px;
}
</style>
