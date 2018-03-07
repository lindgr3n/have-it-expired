<template>
  <div class="dialog">
    <v-login :onLogin="onLogin" />
  </div>
</template>

<script>
import { login } from "@/firebase";

import Login from "@/components/molecules/Login";
export default {
  name: "login-dialog",

  components: {
    "v-login": Login
  },

  methods: {
    onLogin(input) {
      const loginPromise = login(input);
      loginPromise.then(() => {
        this.$router.replace("/");
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
