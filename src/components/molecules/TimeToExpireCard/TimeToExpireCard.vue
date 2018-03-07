<template>
  <div>
    <div>
      <md-card class="md-primary container">
        <md-card-area>
          <md-card-header>
            <div class="md-title">{{days}}</div>
            <div class="md-subhead">days left</div>
          </md-card-header>

          <md-card-content>
            {{title}}
          </md-card-content>
        </md-card-area>  

        <md-card-actions>
          <md-button>Edit</md-button>
          <md-button>Remove</md-button>
        </md-card-actions>
      </md-card>
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
</style>
