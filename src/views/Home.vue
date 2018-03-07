<template>
  <div class="home">
    <div class="content">
      <time-to-expire-card v-for="item in items" v-bind:key="item.id" :item="item"></time-to-expire-card>
    </div>
  </div>
</template>

<script>
import TimeToExpireCard from "@/components/molecules/TimeToExpireCard";

export default {
  name: "home",

  components: {
    "time-to-expire-card": TimeToExpireCard
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
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, 200px);
  grid-gap: 20px;
  justify-items: center;
}
</style>
