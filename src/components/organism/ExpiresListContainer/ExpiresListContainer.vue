<template>
  <expires-list :list="list"/>
</template>

<script>
import ExpiresList from "@/components/molecules/ExpiresList";
import { daysToExpire } from "@/utils/utils";
export default {
  name: "expires-list-container",

  props: ["items"],

  components: {
    "expires-list": ExpiresList
  },

  computed: {
    list() {
      // Calculate DaysLeft for each
      return Object.keys(this.items).map(key => {
        const daysLeft = daysToExpire(this.items[key].expires);
        return Object.assign({}, this.items[key], { daysLeft });
      });
    }
  }
};
</script>

<style scoped>
</style>
