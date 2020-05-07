<script>
import Logo from './Logo'

export default {
  inject: ['theme'],
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
        src="https://gravatar.com/avatar/fa93eef69a0457fbfcd1085e63050df0.png?d=mm"
      >
    </v-avatar>
  </v-app-bar>
</template>

<style lang="scss">
header.v-app-bar.v-toolbar {
  box-shadow: 0 1px 3px 2px rgba(0, 0, 0, .05);

  a.v-toolbar__brand {
    line-height: 0;
  }
}
</style>
