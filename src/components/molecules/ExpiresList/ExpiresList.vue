<template>
    <v-data-table
    :headers="headers"
    :items="list"
    hide-actions
    v-bind:pagination.sync="defaultSort"
    class="elevation-1 expireslist"
    >
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">{{ props.item.title }}</td>
      <td class="text-xs-left">{{ props.item.bought }}</td>
      <td class="text-xs-left" >{{ props.item.daysValid }}</td>
      <td class="text-xs-left">{{ props.item.daysLeft }}</td>
      
    </template>
  </v-data-table>

</template>

<script>
/*
<v-list>
      <v-list-tile v-for="item in items" :key="item.title" @click="">
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-avatar>
          30
        </v-list-tile-avatar>
      </v-list-tile>
    </v-list>
*/
export default {
  name: "expires-list",

  props: ["list"],

  data() {
    return {
      headers: [
        { text: "Title", value: "title" },
        { text: "Bought", value: "bought" },
        { text: "Days valid", value: "daysValid" },
        { text: "Days left", value: "daysLeft" }
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
