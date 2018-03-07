<template>
  <div class="dialog">
    <v-register :onRegister="onRegister"/>
  </div>
</template>

<script>
import { createUser } from "@/firebase";

import Register from "@/components/molecules/Register";
export default {
  name: "v-register-dialog",

  components: {
    "v-register": Register
  },

  mounted() {},

  methods: {
    onRegister(input) {
      const createdUserPromise = createUser(input);
      createdUserPromise.then(() => {
        this.$router.replace("/login");
      });
    }
  }
};
</script>

<style scoped>
.dialog {
  width: 300px;
}
</style>
