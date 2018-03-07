<template>
  <div class="content">
    <v-login-dialog />
  </div>
</template>

<script>
import LoginDialog from "@/components/organism/LoginDialog";
export default {
  name: "login",

  components: {
    "v-login-dialog": LoginDialog
  }
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
}
</style>
