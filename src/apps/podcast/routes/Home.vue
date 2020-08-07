<script>
export default {
  name: 'PodcastHome',
  inject: ['apiClient'],
  data: () => ({
    podcasts: []
  }),
  async mounted () {
    const { collections } = await this.apiClient.getCollections('io.bethel.podcast')
    this.podcasts = collections
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
          <template v-for="(podcast, index) in podcasts">
            <v-list-item :key="podcast.id">
              <v-list-item-avatar>
                <v-img :src="'https://picsum.photos/500/300?image=' + index"></v-img>
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
              :key="podcast.id"
              inset
            />
          </template>
        </v-list>
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
