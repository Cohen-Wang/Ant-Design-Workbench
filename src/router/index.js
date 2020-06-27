import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Layout/Index'

Vue.use(VueRouter)

/**
 * 报错解决方案
 * Error: Avoided redundant navigation to current location: "/home"."
 * @type {{(location: RawLocation): Promise<Route>; (location: RawLocation, onComplete?: Function, onAbort?: ErrorHandler): void}}
 * 有空了解下为什么会有这个报错！！
 */
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Index,
        isShow: false,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                meta: {title: '首页', icon: 'menu'},
                component: () => import('@/views/Home.vue')
            }
        ]
    },
    {
        path: '/study',
        name: 'study',
        component: Index,
        isShow: true,
        meta: {title: '学习', icon: 'credit-card'},
        redirect: '/axios',
        children: [
            {
                path: '/es6',
                name: 'es6',
                component: () => import('@/views/Study/ES6/Index.vue'),
                meta: {title: 'ES6', icon: 'bulb'},
                redirect: '/async-await',
                children: [
                    { path: '/async-await', name: 'async-await', meta: {title: 'Async&Await'}, component: () => import('@/views/Study/ES6/Async-Await.vue') },
                ],
            },
            {
                path: '/vue',
                name: 'vue',
                component: () => import('@/views/Study/Vue/Index.vue'),
                meta: {title: 'VUE', icon: 'smile'},
                redirect: '/router',
                children: [
                    { path: '/watch', name: 'watch', meta: {title: '侦听属性(watch)'}, component: () => import('@/views/Study/Vue/Watch.vue') },
                    { path: '/router', name: 'router', meta: {title: '路由(router)'}, component: () => import('@/views/Study/Vue/Router.vue') },
                    { path: '/transition', name: 'transition', meta: {title: '过渡(transition)'}, component: () => import('@/views/Study/Vue/Transition.vue') },
                ],
            },
            {
                path: '/axios',
                name: 'axios',
                meta: {title: 'axios', icon: 'credit-card'},
                component: () => import('@/views/Study/Axios/Axios.vue')
            },
            {
                path: '/antv-g6',
                name: 'antv-g6',
                component: () => import('@/views/Study/Antv-G6/Index.vue'),
                meta: {title: '蚂蚁数据可视化(Antv-G6)', icon: 'dot-chart'},
                redirect: '/fruchterman',
                children: [
                    { path: '/fruchterman', name: 'fruchterman', meta: {title: '图布局'}, component: () => import('@/views/Study/Antv-G6/Fruchterman.vue') },
                    { path: '/force', name: 'force', meta: {title: '力导向图布局'}, component: () => import('@/views/Study/Antv-G6/Force.vue') },
                ],
            },

        ]
    },
    {
        path: '/case',
        name: 'case',
        component: Index,
        isShow: true,
        meta: {title: '案例', icon: 'file'},
        redirect: '/axios',
        children: [
            {
                path: '/axios',
                name: 'axios',
                meta: {
                    title: 'axios',
                    icon: 'credit-card',
                },
                component: () => import('@/views/Study/Axios/Axios.vue')
            }
        ]
    },
    {
        path: '/404',
        name: '404',
        isShow: false,
        component: () => import('@/views/404.vue')
    },
    {
        path: '/*',
        redirect: '/404'
    },
]

const router = new VueRouter({
  routes
})




export default router
