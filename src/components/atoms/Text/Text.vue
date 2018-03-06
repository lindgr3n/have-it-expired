<template>
  <span>
    {{text}}
  </span>  
</template>

<script>
export default {
  name: "v-text",
  props: ["text"]
};
</script>

<style scoped>
p {
  font-size: 16pt;
}
</style>
