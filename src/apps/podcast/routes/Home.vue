<script>
import query from '../queries/allPodcasts.gql'

export default {
  name: 'PodcastHome',
  inject: ['apiClient'],
  data: () => ({
    podcasts: []
  }),
  async mounted () {
    this.podcasts = await this.apiClient.getCollections({ query })
  }
}
</script>

<template>
  <v-container
    class="podcast--home pa-0"
    fluid
  >
    <v-row no-gutters>
      <v-col
        class="podcast--home__sidebar"
        cols="4"
      >
        <v-list two-line>
          <v-subheader>{{ podcasts.length }} podcasts</v-subheader>
          <template v-for="(podcast, index) in podcasts">
            <v-list-item
              :to="{ name: 'io.bethel.podcast.detail', params: { id: podcast.id } }"
              :key="podcast.id"
            >
              <v-list-item-avatar rounded="sm">
                <v-img :src="podcast.settings.get('image')"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ podcast.title }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ podcast.links.totalCount }} episode{{ podcast.links.totalCount !== 1 ? 's' : '' }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider
              v-if="index < podcasts.length - 1"
              :key="podcast.id + '-divider'"
              inset
            />
          </template>
        </v-list>
      </v-col>
      <v-col cols="8">
        <router-view />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.podcast--home {
  &.container,
  & > .row,
  .podcast--home__sidebar,
  .podcast--home__sidebar > .v-list {
    height: 100%;
  }
}
</style>
