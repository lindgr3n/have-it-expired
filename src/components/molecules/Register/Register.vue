<template>
  <div>
    <p>Please signup</p>
    <md-card class="register-content"> 
      <md-field md-clearable>
        <label>Email</label>
        <md-input v-model="email"></md-input>
      </md-field>

      <md-field>
        <label>Password</label>
        <md-input v-model="password" type="password"></md-input>
      </md-field>
      <md-button class="md-raised md-primary" v-on:click="register">Register</md-button>
    </md-card>
    <span>or go back to <router-link to="/login">login</router-link></span>
  </div>
</template>

<script>
export default {
  name: "v-register",

  props: ["onRegister"],

  data() {
    return {
      email: "",
      password: ""
    };
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
