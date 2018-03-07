<template>
  <div>
    <div>
      <v-card class="" >
        <v-card-title class="title" primary-title>
          <div class="headline">{{days}}</div>
          <div class="grey--text">days left</div>
        </v-card-title>
            {{title}}
        <v-card-actions>
          <v-btn color="info">Edit</v-btn>
          <v-btn color="info">Remove</v-btn>
        </v-card-actions>
      </v-card>
    </div>
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

  props: ["item"],

  data() {
    return {
      days: this.item.expires,
      title: this.item.title
    };
  }
};
</script>

<style scoped>
.title {
  display: flex;
  flex-direction: column;
}
</style>
