import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: function (resolve) {
        require(['@/views/Index'], resolve)
      }
    },
    {
      path: '/exponent',
      name: 'Exponent',
      component: function (resolve) {
        require(['@/views/Exponent'], resolve)
      }
    },
    {
      path: '/grade',
      name: 'Grade',
      component: function (resolve) {
        require(['@/views/Grade'], resolve)
      },
      backBtn: true
    },
    {
      path: '/news',
      name: 'News',
      component: function (resolve) {
        require(['@/views/News'], resolve)
      }
    },
    {
      path: '/news/:id',
      name: 'NewsView',
      component: function (resolve) {
        require(['@/views/NewsView'], resolve)
      }
    },
    {
      path: '/team/:id',
      name: 'TeamView',
      component: function (resolve) {
        require(['@/views/TeamView'], resolve)
      }
    },
    {
      path: '/grade/:id',
      name: 'GradeView',
      component: function (resolve) {
        require(['@/views/GradeView'], resolve)
      }
    },
    {
      path: '/account',
      name: 'Account',
      component: function (resolve) {
        require(['@/views/Account'], resolve)
      },
      meta: { requiresAuth: true }
    },
    {
      path: '*',
      name: '404',
      component: function (resolve) {
        require(['@/views/404'], resolve)
      }
    }
  ]
})
