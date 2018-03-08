<template>
  <div class="content">
    <v-signup-dialog />
  </div>
</template>

<script>
import SignupDialog from "@/components/organism/SignupDialog";
export default {
  name: "signup",
  components: {
    "v-signup-dialog": SignupDialog
  }
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
}
</style>
