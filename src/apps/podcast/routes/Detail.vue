<script>
import query from '../queries/getPodcast.gql'

export default {
  name: 'PodcastDetail',
  inject: ['apiClient'],
  data: () => ({
    edit: false,
    podcast: null
  }),
  created () {
    this.fetchData()
  },
  watch: {
    $route: 'fetchData'
  },
  computed: {
    episodes () {
      return this.podcast.links?.edges || []
    },
    episodeCount () {
      return this.podcast.links?.totalCount || 0
    }
  },
  methods: {
    async fetchData () {
      this.podcast = await this.apiClient.getCollection({
        query,
        variables: { id: this.$route.params.id }
      })
    }
  }
}
</script>

<template>
  <section class="podcast__detail" v-if="podcast">
    <v-card
      class="mb-4"
      color="transparent"
      dark
      flat
    >
      <div class="d-flex flex-no-wrap justify-space-between pa-2">
        <div>
          <v-card-title class="headline" v-text="podcast.title" />
          <v-card-subtitle>{{ episodeCount }} Episodes</v-card-subtitle>
        </div>

        <v-avatar
          class="ma-3"
          size="125"
          rounded="sm"
        >
          <v-img :src="podcast.settings.get('image')" />
        </v-avatar>
      </div>
    </v-card>
    <v-expansion-panels class="px-4">
      <v-expansion-panel
        v-for="episode in episodes"
        :key="episode.node.id"
      >
        <v-expansion-panel-header>
          {{ episode.node.title }}
          <v-spacer />
          <small class="mr-4">{{ new Date(episode.node.date).toLocaleDateString() }}</small>
        </v-expansion-panel-header>
      </v-expansion-panel>
    </v-expansion-panels>
  </section>
</template>

<style lang="scss">
.podcast__detail {
  .v-expansion-panel-header {
    small {
      flex-grow: 0;
      opacity: 0.7;
    }
  }
}
</style>
