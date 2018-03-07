<template>
  <md-card class="login-content">
    <md-field md-clearable>
      <label>Email</label>
      <md-input v-model="email"></md-input>
    </md-field>

    <md-field>
      <label>Password</label>
      <md-input v-model="password" type="password"></md-input>
    </md-field>
    <p>Register here <router-link to="/register">Register</router-link></p>
    <md-button class="md-raised md-primary" v-on:click="submit">Login</md-button>
  </md-card>
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
