<template>
  <v-app id="inspire">
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
    <v-app-bar
      app
      color="#29537c"
      dark
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>CRUD Apps</v-toolbar-title>
    </v-app-bar>
    <v-main>
        <router-view></router-view>
    </v-main>

    <v-footer
      color="#29537c"
      app
    >
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    components: {
    },
    data: () => ({
      drawer: null,
      menus: [{
          icon: "mdi-vuejs",
          title: "Vue",
          url: '/'
      },
      {
          icon: "mdi-language-javascript",
          title: "Javascript",
          url: '/Javascript'
      }],
    }),
  }
</script>