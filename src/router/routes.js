
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/imprint',
        name: 'Imprint',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ 'pages/HivesoundImprint.vue'),
      },
      {
        path: '/press-kit',
        name: 'Press Kit',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ 'pages/HivesoundPressKit.vue'),
      },
      {
        path: '/newsletter',
        name: 'Newsletter',
        component: () => import('pages/HivesoundNewsletter.vue'),
      },
      {
        path: '/webinar',
        name: 'Webinar',
        component: () => import('pages/HivesoundWebinar.vue'),
      },
      {
        path: '/wir-suchen-dich',
        name: 'Wir suchen dich',
        component: () => import('pages/HivesoundWebinar.vue'),
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ErrorNotFound.vue') },
    ]
  }
]

export default routes
