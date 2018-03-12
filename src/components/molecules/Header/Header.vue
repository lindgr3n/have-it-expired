<template>
  <v-toolbar>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat to="/"><v-icon>home</v-icon>Home</v-btn>      
      <v-btn flat to="/register"><v-icon>event</v-icon>Register</v-btn>
      <v-btn flat to="/about" ><v-icon>info</v-icon>About</v-btn>
      <v-btn flat @click="onLogout"><v-icon>exit_to_app</v-icon>Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "app-header",
  props: ["onLogout"]
};
</script>

<style scoped>
</style>
