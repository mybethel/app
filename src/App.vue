<script>
import AppBar from './components/AppBar'

export default {
  name: 'App',
  components: {
    AppBar
  },
  inject: ['authData']
}
</script>

<template>
  <v-app>
    <app-bar v-if="authData.isLoggedIn" />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
body.theme--light,
#app.theme--light.v-application {
  background: #F4F6F8;
}

body.theme--dark {
  background: #272727;
}
</style>
