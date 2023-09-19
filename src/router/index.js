import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Analyze from '../views/Analyze.vue'
import homeInit from '../views/homeInit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/homeInit',
      name: 'homeInit',
      component: homeInit,
      children: [
        {
          path: '/:sceneType/list',
          name: 'list',
          meta: {
            title: '列表',
            permiss: '1',
          },
          component: List
        },
        {
          path: '/:sceneType/:videoId/analyze',
          name: 'analyze',
          meta: {
            title: '分析',
            permiss: '2',
          },
          component: Analyze
        }
      ]
    }
    // {
    //   path: '/:sceneType/list',
    //   name: 'list',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: List
    // },
    // {
    //   path: '/:sceneType/:videoId/analyze',
    //   name: 'analyze',
    //   component: Analyze
    // }
  ]
})

export default router
