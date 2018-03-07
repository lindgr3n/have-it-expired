<template>
  <div class="dialog">
    <v-login />
  </div>
</template>

<script>
import Login from "@/components/molecules/Login";
export default {
  name: "login-dialog",

  components: {
    "v-login": Login
  }
};
</script>

<style scoped>
.dialog {
  width: 300px;
}
</style>
