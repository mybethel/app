import { mdiPodcast as glyph } from '@mdi/js'

export default {
  id: 'io.bethel.podcast',
  displayName: 'Podcasting',
  icon: {
    color: '#842AC0',
    glyph
  },
  routes: [
    {
      component: () => import('./routes/Home'),
      name: 'io.bethel.podcast',
      path: '/podcast',
      children: [
        {
          path: ':id',
          name: 'io.bethel.podcast.detail',
          component: () => import('./routes/Detail')
        }
      ]
    }
  ]
}
