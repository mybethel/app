<script>
export default {
  inject: ['theme']
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
      <svg viewBox="0 0 160 160" width="32" height="32">
        <path
          :fill="theme.isDark ? '#FFF' : '#137490'"
          :fill-opacity="theme.isDark ? 0.6 : 1"
          fill-rule="nonzero"
          d="M52 97l28 16 28-16V64L80 48 58 61V41l22-13 45 26v53l-45 26-45-26.25V27L80 1l68 39v80l-68 39-68-39V67l17-10v53l51 30 51-30V50L80 21 52 37z"
        />
      </svg>
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
