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
      this.$store.dispatch("addItem", input);
    }
  }
};
</script>

<style scoped>
</style>
