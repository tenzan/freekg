const routes = [{
  path: '/',
  component: () => import('layouts/MainLayout.vue'),
  children: [{
      path: '',
      component: () => import('pages/Index.vue')
    },
    {
      path: 'booking',
      component: () => import('pages/Booking.vue')
    },
    {
      path: 'ads',
      component: () => import('pages/Ads.vue')
    },
  ]
}]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
