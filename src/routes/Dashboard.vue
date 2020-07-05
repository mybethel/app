<script>
import Springboard from '../components/Springboard'

export default {
  components: {
    Springboard
  },
  inject: ['authData'],
  computed: {
    greeting () {
      const time = new Date().getHours()
      if (time < 12) return 'morning'
      if (time < 6) return 'afternoon'
      return 'evening'
    }
  }
}
</script>

<template>
  <section>
    <div class="dashboard__welcome mt-8 mb-6">
      <v-avatar size="96">
        <img :src="authData.user.avatar">
      </v-avatar>
      <span class="text-h5 font-weight-medium my-4">
        Good {{ greeting }}, {{ authData.user.name }}
      </span>
    </div>
    <springboard />
  </section>
</template>

<style lang="scss">
.dashboard__welcome {
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>
