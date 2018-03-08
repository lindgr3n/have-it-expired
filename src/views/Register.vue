<template>
  <div class="content">
    <v-register-dialog />
  </div>
</template>

<script>
import RegisterDialog from "@/components/organism/RegisterDialog";
export default {
  name: "register",

  components: {
    "v-register-dialog": RegisterDialog
  }
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
}
</style>
