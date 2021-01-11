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
        md="4"
        lg="3"
      >
        <v-list>
          <v-subheader>{{ podcasts.length }} podcasts</v-subheader>
          <template v-for="(podcast, index) in podcasts">
            <v-list-group
              @click="$router.push({ name: 'io.bethel.podcast.detail', params: { id: podcast.id } })"
              :key="podcast.id"
              two-line
              inactive
            >
              <template v-slot:activator>
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
              </template>

              <v-list-item
                :key="podcast.id + '.settings'"
                :to="{ name: 'io.bethel.podcast.detail', params: { id: podcast.id } }"
                dense
                exact
                link
              >
                <v-list-item-title>Episodes</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>$media</v-icon>
                </v-list-item-icon>
              </v-list-item>
              <v-list-item
                :key="podcast.id + '.settings'"
                :to="{ name: 'io.bethel.podcast.settings', params: { id: podcast.id } }"
                dense
                link
              >
                <v-list-item-title>Settings</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>$settings</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
            <v-divider
              v-if="index < podcasts.length - 1"
              :key="podcast.id + '-divider'"
              inset
            />
          </template>
        </v-list>
      </v-col>
      <v-col
        md="8"
        lg="9"
      >
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

  .v-list-item--dense {
    padding-left: 88px;
  }
}
</style>
