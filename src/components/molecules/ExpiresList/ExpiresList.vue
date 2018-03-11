<template>
  <v-data-table
  :headers="headers"
  :items="list"
  hide-actions
  v-bind:pagination.sync="defaultSort"
  class="elevation-1 expireslist"
  :loading="loading"
  no-data-text="Plese hold while im checking the archive for records..."
  >
    <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">{{ props.item.title }}</td>
      <td class="text-xs-left">{{ props.item.bought }}</td>
      <td class="text-xs-left" >{{ props.item.daysValid }}</td>
      <td class="text-xs-left">{{ props.item.daysLeft }}</td>
      <td class="justify-center layout px-0">
        <!-- <v-btn icon class="mx-0" @click="editItem(props.item)">
          <v-icon color="teal">edit</v-icon>
        </v-btn> -->
        <v-btn icon class="mx-0" @click="deleteItem(props.item)">
          <v-icon color="pink">delete</v-icon>
        </v-btn>
      </td>
    </template>
  </v-data-table>

</template>

<script>
export default {
  name: "expires-list",

  props: ["list", "loading", "deleteItem"],

  data() {
    return {
      headers: [
        { text: "Title", value: "title" },
        { text: "Bought", value: "bought" },
        { text: "Days valid", value: "daysValid" },
        { text: "Days left", value: "daysLeft" },
        { text: "Actions", value: "name", sortable: false }
      ],
      defaultSort: { sortBy: "daysLeft", descending: false, rowsPerPage: -1 }
    };
  }
};
</script>

<style scoped>
.expireslist {
  width: 100%;
}
</style>
