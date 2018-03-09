<template>
  <div class="home">
    <div class="content">
      <expires-list-container :items="items"/>
    </div>
  </div>
</template>

<script>
import ExpiresListContainer from "@/components/organism/ExpiresListContainer";

export default {
  name: "home",

  components: {
    "expires-list-container": ExpiresListContainer
  },

  mounted() {
    this.items = this.$store.state.items;
  },

  data() {
    return {
      items: []
    };
  }
};
</script>

<style scoped>
.content {
  display: grid;
  grid-template-columns: 70vw;
  /* grid-template-rows: repeat(auto-fill, 1fr); */
  /* grid-gap: 20px; */
  justify-content: center;
}
</style>
