<template>
  <div class="content">
    <v-register />
  </div>
</template>

<script>
import RegisterDialog from "@/components/organism/RegisterDialog";
export default {
  name: "register-view",
  components: {
    "v-register": RegisterDialog
  }
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
}
</style>
