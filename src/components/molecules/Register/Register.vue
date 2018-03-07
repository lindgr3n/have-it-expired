<template>
  <div>
    <p>Please signup</p>
    <v-card class="register-content"> 
      <v-text-field label="Email" v-model="email" required>
      </v-text-field>

      <v-text-field label="Password" v-model="password" type="password">
      </v-text-field>
      <v-btn color="info" v-on:click="register">Register</v-btn>
    </v-card>
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
