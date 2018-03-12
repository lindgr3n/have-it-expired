<template>
  <v-list>
    <v-list-tile avatar v-for="item in list" :key="item.key">
      <v-list-tile-content>
        <v-list-tile-title v-text="item.title"></v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-avatar>
         <v-avatar
          :tile="false"
          :size="32"
          color="primary"
        >
         <span class="white--text">{{item.daysLeft}}</span>
        </v-avatar>
      </v-list-tile-avatar>
      
      <v-menu >
        <v-btn icon slot="activator">
          <v-icon color="primary">more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="(menu, i) in menus" :key="i" @click="onMenuClick(menu, item)">
            <v-list-tile-title><v-icon color="pink">{{ menu.icon }}</v-icon></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  name: "expires-simple-list",
  props: ["list", "deleteItem", "loading", "menus"],

  methods: {
    onMenuClick(menu, item) {
      menu.action(item);
    }
  }
};
</script>

<style scoped>
</style>
