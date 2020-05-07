<script>
export default {
  inject: ['theme'],
  props: {
    size: {
      type: [Number, String],
      default: 160
    }
  }
}
</script>

<template>
  <svg viewBox="0 0 160 160" :width="size" :height="size">
    <path
      :fill="$vuetify.theme.themes[theme.isDark ? 'dark' : 'light'].primary.base"
      fill-rule="nonzero"
      d="M52 97l28 16 28-16V64L80 48 58 61V41l22-13 45 26v53l-45 26-45-26.25V27L80 1l68 39v80l-68 39-68-39V67l17-10v53l51 30 51-30V50L80 21 52 37z"
    />
  </svg>
</template>
