<template>
  <div class="home">
    <div class="content">
      <v-container />
    </div>
  </div>
</template>

<script>
import TimeToExpireCard from "@/components/molecules/TimeToExpireCard";

export default {
  name: "home",
  components: {
    "v-container": TimeToExpireCard
  },

  data() {
    return {
      items: {}
    };
  }
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
