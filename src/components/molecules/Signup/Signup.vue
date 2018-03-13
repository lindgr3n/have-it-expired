<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Create account</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field prepend-icon="person" v-model="email" type="text" required :error="showError"></v-text-field>
                <v-text-field prepend-icon="lock" v-model="password" id="password" type="password" :error="showError"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <p>Got an account? Login here <router-link to="/login">Login</router-link></p>
              <v-spacer></v-spacer>
              <v-btn color="primary" v-on:click="signup">Create</v-btn>
            </v-card-actions>
            <v-layout row v-if="error">
              <v-snackbar :value="showError" color="error" top>
                {{ error }}
              </v-snackbar>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "v-signup",

  props: ["onSignup", "loading", "error"],

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
    signup() {
      this.onSignup({ email: this.email, password: this.password });
    }
  }
};
</script>

<style scoped>
</style>
