<template>
  <div>
    <v-menu
      ref="menu"
      lazy
      :close-on-content-click="false"
      v-model="menu"
      transition="scale-transition"
      offset-y
      full-width
      :nudge-right="40"
      min-width="290px"
      :return-value.sync="date"
    >
      <v-text-field
        slot="activator"
        label="Picker in menu"
        v-model="date"
        prepend-icon="event"
        readonly
      ></v-text-field>
      <v-date-picker v-model="date" no-title scrollable first-day-of-week="1">
        <v-spacer></v-spacer>
        <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
        <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
      </v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "v-date",
  props: ["value"],

  data() {
    return {
      menu: false,
      modal: false,
      date: this.value
    };
  },

  watch: {
    date(value) {
      this.$emit("boughtChange", value);
    }
  }
};
</script>

<style scoped>
</style>
