<script>
import Logo from './Logo'

export default {
  name: 'AppBar',
  inject: ['authData', 'theme'],
  components: {
    Logo
  }
}
</script>

<template>
  <v-app-bar
    :color="theme.isDark ? null : '#FFF'"
    app
    dense
  >
    <v-btn icon>
      <v-icon>$apps</v-icon>
    </v-btn>

    <v-spacer />

    <router-link
      class="v-toolbar__brand"
      to="/"
    >
      <logo size="32" />
    </router-link>

    <v-spacer />

    <v-avatar size="32">
      <img
        :src="authData.user.avatar"
      >
    </v-avatar>
  </v-app-bar>
</template>

<style lang="scss">
header.v-app-bar.v-toolbar {
  a.v-toolbar__brand {
    line-height: 0;
  }

  &.theme--light {
    box-shadow: 0 1px 3px 2px rgba(0, 0, 0, .05) !important;
  }
}
</style>
