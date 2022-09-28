import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LayOut from '@/views/LayOut/LayOut.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: LayOut,
    redirect:{name:"homeson"},
    children:[
      {
        path:"/home",
        name:"homeson",
        component:HomeView
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:"/fen",
    name: 'fen',
    component: LayOut,
    redirect:{name:"type"},
    children:[
      {
        path:"/type",
        name:"type",
        component:()=> import("@/views/Fenxiao/index.vue")
      }
    ]
  },
  {
    path:"/cart",
    name: 'cart',
    component: LayOut,
    redirect:{name:"cartGou"},
    children:[
      {
        path:"/cartGou",
        name:"cartGou",
        component:()=> import("@/views/Mycart/index.vue")

      }
    ]
  },
  {
    path:"/mine",
    name: 'mine',
    component: LayOut,
    redirect:{name:"MyGou"},
    children:[
      {
        path:"/MyGou",
        name:"MyGou",
        component:()=> import("@/views/MineView/index.vue")


      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
