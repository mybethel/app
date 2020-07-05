import { mdiPodcast as glyph } from '@mdi/js'

export default {
  id: 'io.bethel.podcast',
  displayName: 'Podcasting',
  icon: {
    color: '#842AC0',
    glyph
  },
  routes: [
    { name: 'io.bethel.podcast', path: '/podcast', component: () => import('./routes/Home') }
  ]
}
