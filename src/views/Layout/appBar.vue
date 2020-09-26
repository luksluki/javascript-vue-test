<template>
    <v-app-bar
      app
      color="#29537c"
      dark
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>CRUD Apps</v-toolbar-title>
    </v-app-bar>
</template>

<script>
  export default {
      name: 'appbar',
      props: {
        drawer: String,
      },
      watch: { 
          drawer: function(newVal, oldVal) { // watch it
            console.log('Prop changed: ', newVal, ' | was: ', oldVal)
          }
      }
  }
</script>