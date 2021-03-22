<script>
import Logo from './Logo'
import UserMenu from './UserMenu'

export default {
  name: 'AppBar',
  inject: ['apiClient', 'authData', 'theme'],
  components: {
    Logo,
    UserMenu
  }
}
</script>

<template>
  <v-app-bar
    :color="theme.isDark ? null : '#FFF'"
    app
    dense
  >
    <v-progress-linear
      :active="apiClient.status.loading"
      indeterminate
      absolute
      bottom
    />

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

    <user-menu />
  </v-app-bar>
</template>

<style lang="scss">
header.v-app-bar.v-toolbar {
  a.v-toolbar__brand {
    line-height: 0;
    left: calc(50% - 16px);
    position: absolute;
  }

  &.theme--light {
    box-shadow: 0 1px 3px 2px rgba(0, 0, 0, .05) !important;
  }
}
</style>
