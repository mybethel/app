<script>
export default {
  name: 'SpringboardIcon',
  props: {
    icon: Object
  },
  computed: {
    color: ({ icon }) => icon?.color,
    glyph: ({ icon }) => icon?.glyph
  }
}
</script>

<template>
  <svg viewBox="0 0 24 24">
    <g transform="scale(.0375)">
      <path
        :fill="color"
        d="M320 640c-38.064 0-156.732.665-238.694-81.297C-.664 476.733 0 358.057 0 320c0-38.06-.665-156.732 81.306-238.695C163.268-.66 281.936 0 320 0c38.057 0 156.732-.66 238.695 81.305C640.665 163.268 640 281.94 640 320c0 38.057.665 156.732-81.305 238.703C478.048 639.35 361.85 640 321.887 640H320"
      />
    </g>
    <g transform="translate(4,4) scale(0.66666667)">
      <path :d="glyph" fill="#FFF" />
    </g>
  </svg>
</template>

<style scoped lang="scss">
  .icon {
    height: 60px;
    margin-bottom: 6px;
    position: relative;
    transition: transform 0.2s;
    width: 60px;
    & .backing {
      position: absolute;
      top: 0;
      left: 0;
    }
    & .app {
      fill: #FFF;
      filter: drop-shadow(1px 2px 1px rgba(0, 0, 0, 0.05));
      position: relative;
      transform: scale(0.7);
      transition: transform 0.3s;
      z-index: 1;
    }
    &:hover {
      transform: scale(1.1);
      & .app {
        transform: scale(0.8);
      }
    }
  }
</style>
