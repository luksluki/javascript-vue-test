<template>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
    >
      <v-list dense>
        <v-list-item :to="menu.url" link v-for="(menu, i) in menus" :key="i">
          <v-list-item-action>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    data: () => ({
      menus: [{
          icon: "mdi-home",
          title: "Todos",
          url: '/'
      },
      {
          icon: "mdi-email",
          title: "Javascript",
          url: '/Javascript'
      },
      {
          icon: "mdi-home",
          title: "Posts",
          url: '/'
      }],
    }),
  }
</script>