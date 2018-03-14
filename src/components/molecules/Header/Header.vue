<template>
  <v-toolbar color="indigo" dark fixed app >
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="user" >
      <v-btn flat to="/"><v-icon>home</v-icon><span class="headerText">Home</span></v-btn>      
      <v-btn flat to="/register"><v-icon>event</v-icon><span class="headerText">Register</span></v-btn>
      <v-btn flat to="/about" ><v-icon>info</v-icon><span class="headerText">About</span></v-btn>
      <v-btn flat @click="onLogout"><v-icon>exit_to_app</v-icon><span class="headerText">Logout</span></v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "app-header",
  props: ["onLogout", "user"]
};
</script>

<style scoped>
@media (max-width: 450px) {
  .headerText {
    display: none;
  }
}
</style>
