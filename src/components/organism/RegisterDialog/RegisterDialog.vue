<template>
  <div>
    <v-register :onSubmit="onSubmit" />
  </div>
</template>

<script>
import Register from "@/components/molecules/Register";
export default {
  name: "register-dialog",

  components: {
    "v-register": Register
  },

  methods: {
    onSubmit(input) {
      console.log("Dialog", input);
    }
  }
};
</script>

<style scoped>
</style>
