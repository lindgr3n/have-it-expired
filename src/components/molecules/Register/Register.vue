<template>
  <div>
    <v-form @submit.prevent="onSubmitForm" :valid="valid" ref="form" lazy-validation>
      <v-text-field label="Title" v-model="title" required></v-text-field>
      <v-date v-on:boughtChange="onBoughtChanged"/>
      <v-text-field label="Days valid" v-model="daysValid" required></v-text-field>
      
      <v-btn @click="clear">clear</v-btn>
      <v-btn
        type="submit"
        :disabled="!valid"
        color="success"
      >
        submit
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import DatePicker from "@/components/atoms/DatePicker";
export default {
  name: "v-register",

  props: ["onSubmit"],
  components: {
    "v-date": DatePicker
  },

  data: () => ({
    title: "",
    bought: "",
    daysValid: ""
  }),

  computed: {
    valid() {
      return !!this.title && !!this.bought && !!this.daysValid;
    }
  },

  methods: {
    onBoughtChanged(value) {
      this.bought = value;
    },

    onSubmitForm() {
      // TOOD: call parent onSubmit
      console.log({
        title: this.title,
        bought: this.bought,
        daysValid: this.daysValid
      });
      this.onSubmit({
        title: this.title,
        bought: this.bought,
        daysValid: this.daysValid
      });
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
</style>
