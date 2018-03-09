<template>
<div class="content">
    <v-data-table
    :headers="headers"
    :items="list"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.title }}</td>
      <!-- <td class="text-xs-right">{{ props.item.bought }}</td>
      <td >{{ props.item.daysValid }}</td> -->
      <td >{{ props.item.daysLeft }}</td>
      
    </template>
  </v-data-table>
</div>
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
        // { text: "Bought", value: "bought" },
        // { text: "Days valid", value: "daysValid" },
        { text: "Days left", value: "daysLeft" }
      ]
    };
  }
};
</script>

<style scoped>
.content,
.content > ul {
  width: 80%;
}
</style>
