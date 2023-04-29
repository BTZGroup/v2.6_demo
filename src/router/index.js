import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue')
  },
  {
    path: '/main',
    name: 'main',
    redirect: '/vue2_table',
    component: () => import(/* webpackChunkName: "main" */ '../views/main/index.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '数据看板',
          multi: false
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard/index.vue')
      }, {
        path: '/elViews',
        name: 'elViews',
        meta: {
          title: '功能组件',
          multi: false
        }, 
        component: {
          name: 'elViews',
          render() { return <router-view /> },
        },
        children: [
          {
            path: '/vue2_btn',
            name: 'vue2_btn',
            meta: {
              title: 'vue2_btn',
              multi: false
            },
            component: () => import(/* webpackChunkName: "btnPage" */ '../views/elViews/btnPage.vue')
          },
          {
            path: '/upload',
            name: 'upload',
            meta: {
              title: 'upload',
              multi: false
            },
            component: () => import(/* webpackChunkName: "upload" */ '../views/elViews/upload.vue')
          },
          {
            path: '/vue2_table',
            name: 'vue2_table',
            meta: {
              title: 'vue2_table',
              multi: false
            },
            component: () => import(/* webpackChunkName: "elViews" */ '../views/elViews/table.vue'),
            children: [
              {
                path: 'etable_detail/:name/:id',
                name: 'etable_detail',
                meta: {
                  title: 'etable_detail',
                  multi: true
                },
                component: () => import(/* webpackChunkName: "tableDetail" */ '../views/elViews/components/tableDetail.vue')
              },
              {
                path: 'etable_other_detail',
                name: 'etable_other_detail',
                meta: {
                  title: 'etable_other_detail',
                  multi: true
                },
                component: () => import(/* webpackChunkName: "tableDetail" */ '../views/elViews/components/etable_other_detail.vue')
              }
            ]
          }, {
            path: '/allView',
            name: 'allView',
            meta: {
              title: 'allView',
              multi: false
            },
            component: () => import(/* webpackChunkName: "elViews" */ '../views/elViews/all.vue')
          }
        ]
      },{
        path: '/tech',
        name: 'tech',
        meta: {
          title: '组件测试',
          multi: false
        },
        component: {
          name: 'plugIn',
          render() { return <router-view /> },
        },
        children: [
          {
            path: '/vuex',
            name: 'vuex',
            meta: {
              title: 'vuex',
              multi: false
            },
            component: () => import(/* webpackChunkName: "vuexView" */ '../views/technique/vuexView.vue')
          },
          {
            path: '/$bus',
            name: '$bus',
            meta: {
              title: '$bus',
              multi: false
            },
            component: () => import(/* webpackChunkName: "vueBus" */ '../views/technique/vueBus.vue')
          },
          {
            path: '/socket',
            name: 'socket',
            meta: {
              title: 'socket',
              multi: false
            },
            component: () => import(/* webpackChunkName: "socket" */ '../views/technique/socket.vue')
          },
          {
            path: '/es6',
            name: 'es6',
            meta: {
              title: 'es6',
              multi: false
            },
            component: {
              name: 'plugIn',
              render() { return <router-view /> },
            },
            children: [
              {
                path: '6_base',
                name: '6_base',
                meta: {
                  title: '6_base',
                  multi: false
                },
                component: () => import(/* webpackChunkName: "base6" */ '../views/technique/es6/base6')
              },]
          }
        ]
      },{
        path: '/business',
        name: 'business',
        meta: {
          title: '业务测试',
          multi: false
        },
        component: {
          name: 'plugIn',
          render() { return <router-view /> },
        },
        children: [
          {
            path: '/fly',
            name: 'fly',
            meta: {
              title: 'fly',
              multi: false
            },
            component: () => import(/* webpackChunkName: "fly" */ '../views/business/fly.vue')
          },{
            path: '/shop',
            name: 'shop',
            meta: {
              title: 'shop',
              multi: false
            },
            component: () => import(/* webpackChunkName: "shop" */ '../views/business/shop.vue')
          }
        ]
      }, {
        path: '/plugIn',
        name: 'plugIn',
        meta: {
          title: '插件组件',
          multi: false
        },
        component: {
          name: 'plugIn',
          render() { return <router-view /> },
        },
        children: [
          {
            path: '/highcharts',
            name: 'highcharts',
            meta: {
              title: 'highcharts',
              multi: false
            },
            component: () => import(/* webpackChunkName: "HView" */ '../views/charts/HView.vue')
          },
          {
            path: '/echarts',
            name: 'echarts',
            meta: {
              title: 'echarts',
              multi: false
            },
            component: () => import(/* webpackChunkName: "EView" */ '../views/charts/EView.vue')
          },
          {
            path: '/plumb',
            name: 'plumb',
            meta: {
              title: 'plumb',
              multi: false
            },
            component: () => import(/* webpackChunkName: "Plumb" */ '../views/charts/Plumb.vue')
          },
          {
            path: '/ptzControl',
            name: 'ptzControl',
            meta: {
              title: 'plumb',
              multi: false
            },
            component: () => import(/* webpackChunkName: "Plumb" */ '../views/charts/ptzCon.vue')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
