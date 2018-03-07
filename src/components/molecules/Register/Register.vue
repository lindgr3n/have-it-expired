<template>
  <div>
    <p>Please signup</p>
    <md-card class="register-content"> 
      <md-field md-clearable>
        <label>Email</label>
        <md-input v-model="initial"></md-input>
      </md-field>

      <md-field>
        <label>Password</label>
        <md-input v-model="password" type="password"></md-input>
      </md-field>
      <md-button class="md-raised md-primary" v-on:click="register">Register</md-button>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "v-register",

  methods: {
    register() {
      console.log("Wohooo");
    }
  }
};
</script>

<style scoped>
.register-content {
  padding: 20px;
}
</style>
