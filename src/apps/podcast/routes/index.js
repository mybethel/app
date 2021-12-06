export default [
  {
    component: () => import('./Home'),
    name: 'io.bethel.podcast',
    path: '/podcast',
    children: [
      {
        path: ':id',
        name: 'io.bethel.podcast.detail',
        component: () => import('./Episodes')
      },
      {
        path: 'settings',
        name: 'io.bethel.podcast.settings',
        component: () => import('./Settings')
      }
    ]
  }
]
