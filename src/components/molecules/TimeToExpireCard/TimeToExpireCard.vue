<template>
  <div>
    <v-container>
      <v-text slot="header" text="Pendel" v-bind:style="{fontSize: '24pt', fontWeight: 'bold'}" />
      <v-text text="30" v-bind:style="{fontSize: '32pt', fontWeight: 'bold'}" />
      <v-text slot="footer" text="Descr Vad är max char?" />
    </v-container>
  </div>
</template>

<script>
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";

export default {
  name: "time-to-expire-card",

  components: {
    "v-container": Container,
    "v-text": Text
  },

  data() {
    return {
      header: "Tåg",
      text: "30",
      descr: "Månadskort pendling"
    };
  }
};
</script>

<style scoped>
</style>
