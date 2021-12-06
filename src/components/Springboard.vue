<script>
import themeable from 'vuetify/lib/mixins/themeable'

import SpringboardIcon from './SpringboardIcon.vue'

export default {
  name: 'Springboard',
  components: {
    SpringboardIcon
  },
  mixins: [themeable],
  inject: ['plugins'],
  computed: {
    springboard () {
      return this.plugins.filter(plugin => {
        return plugin.springboardVisible ?? true
      })
    }
  }
}
</script>

<template>
  <div id="springboard" :class="rootThemeClasses">
    <router-link
      v-for="plugin in springboard"
      :key="plugin.id"
      :to="{ name: plugin.id }"
    >
      <springboard-icon :icon="plugin.icon" />
      <label class="mt-2">
        {{ plugin.displayName }}
      </label>
    </router-link>
  </div>
</template>

<style lang="scss">
#springboard {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 2rem;
  margin: 0 20%;
  grid-template-columns: repeat(3, 1fr);

  @include breakpoint('sm-and-up') {
    grid-template-columns: repeat(4, 1fr);
  }

  @include breakpoint('md-and-up') {
    grid-template-columns: repeat(6, 1fr);
  }

  @include breakpoint('lg-and-up') {
    grid-template-columns: repeat(6, 1fr);
  }

  @include breakpoint('xl-only') {
    grid-template-columns: repeat(8, 1fr);
  }

  svg {
    filter: drop-shadow(0 5px 28px rgba(0, 0, 0, .1));
  }

  a {
    align-items: center;
    color: unset;
    display: flex;
    flex-direction: column;
    font-weight: 400;
    text-align: center;
    text-decoration: none;

    label {
      font-size: 3vw;

      @include breakpoint('sm-and-up') {
        font-size: 2.25vw;
      }

      @include breakpoint('md-and-up') {
        font-size: 1.5vw;
      }

      @include breakpoint('lg-and-up') {
        font-size: 1.125vw;
      }
    }
  }

  &.theme--dark {
    a label {
      opacity: 0.7;
    }
  }
}
</style>
