<template>
  <!-- <expires-list :list="list" :loading="loading" :deleteItem="deleteItem" :dataText="dataText" /> -->
  <expires-simple-list :list="list" :loading="loading" :deleteItem="deleteItem" :menus="menus"/>  
</template>

<script>
import ExpiresList from "@/components/molecules/ExpiresList";
import ExpiresSimpleList from "@/components/molecules/ExpiresSimpleList";
import { daysToExpire } from "@/utils/utils";
export default {
  name: "expires-list-container",

  props: ["items"],

  data() {
    return {
      menus: [
        {
          title: "Delete",
          icon: "delete",
          action: this.deleteItem
        }
      ]
    };
  },

  components: {
    "expires-list": ExpiresList,
    "expires-simple-list": ExpiresSimpleList
  },

  methods: {
    deleteItem(item) {
      this.$store.dispatch("deleteItem", { key: item.key });
    }
  },

  computed: {
    list() {
      // Calculate DaysLeft for each
      return Object.keys(this.items).map(key => {
        const daysLeft = daysToExpire(this.items[key].expires);
        return Object.assign({}, this.items[key], { daysLeft });
      });
    },

    loading() {
      return this.$store.getters.itemState.type === "fetching";
    },

    dataText() {
      return this.loading
        ? "Plese hold while im checking the archive for records..."
        : "No data available";
    }
  }
};
</script>

<style scoped>
</style>
