<template>
  <v-card class="login-content">
    <v-text-field label="Email" v-model="email" required>
    </v-text-field>

    <v-text-field label="password" v-model="password" type="password" required>
    </v-text-field>
    <p>Register here <router-link to="/register">Register</router-link></p>
    <v-btn color="info" v-on:click="submit">Login</v-btn>
  </v-card>
</template>

<script>
export default {
  name: "login",

  props: ["onLogin"],
  data() {
    return {
      email: "",
      password: ""
    };
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
