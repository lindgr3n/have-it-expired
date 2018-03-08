<template>
  <div class="content">
    <v-signup />
  </div>
</template>

<script>
import SignupDialog from "@/components/organism/SignupDialog";
export default {
  name: "signup-view",
  components: {
    "v-signup": SignupDialog
  }
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
}
</style>
