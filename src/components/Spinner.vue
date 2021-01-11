<script>
export default {
  props: {
    count: {
      default: 3,
      type: Number
    },
    size: {
      default: 5,
      type: Number
    },
    color: {
      default: 'primary',
      type: String
    }
  },
  render (h) {
    return h('div', {
      class: ['spinner', this.theme],
      style: {
        width: this.count * (this.size + (this.size * 0.6)) + 'px'
      }
    }, Array.from(Array(this.count).keys()).map(i =>
      h('i', {
        class: ['dot', 'd' + i],
        style: {
          animationDelay: `+${i * 0.1}s`,
          height: this.size + 'px',
          width: this.size + 'px'
        }
      })
    ))
  }
}
</script>

<style lang="scss">
  .spinner {
    display: inline-flex;
    justify-content: space-around;
    position: relative;
    vertical-align: middle;

    i.dot {
      animation: pulse 1s infinite ease-in-out;
      background: currentColor;
      border-radius: 50%;
    }
  }

  @keyframes pulse {
    0%,
    100%,
    80% {
      opacity: 0;
      transform: scale(0.8);
    }

    40% {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
