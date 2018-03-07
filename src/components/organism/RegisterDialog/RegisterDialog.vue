<template>
  <div class="dialog">
    <v-register />
  </div>
</template>

<script>
import firebase from "@/firebase";

import Register from "@/components/molecules/Register";
export default {
  name: "v-register-dialog",

  components: {
    "v-register": Register
  },

  mounted() {
    console.log(firebase);
  }
};
</script>

<style scoped>
.dialog {
  width: 300px;
}
</style>
