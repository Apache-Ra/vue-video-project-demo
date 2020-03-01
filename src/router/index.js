import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
/**
 *  配置滚动条的位置
 *  通过这个这个属性（是个函数），可以让应用像浏览器的原生表现那样，在按下 后退/前进 按钮时，简单地让页面滚动到顶部或原来的位置。
 */
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return {x: 0, y: 0}
  }
}
/**
 *  路由配置
 *  @mode: 配置路由模式（"hash" | "history" | "abstract"）
 *  @base: 如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"。
 *  @linkActiveClass: 点击触发的class
 *  @scrollBehavior: 配置滚动条的位置
 */
const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  likActiveClass: 'link-active',
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require.ensure([], () => resolve(require('@/view/home')), 'home'),
      meta: {title: 'rtmp 测试流码', requireAuth: false}
    },{
      path: '/rtmp_1',
      name: 'rtmp_1',
      component: resolve => require.ensure([], () => resolve(require('@/view/rtmp_1')), 'home'),
      meta: {title: 'rtmp_1', requireAuth: false}
    },{
      path: '/rtmp_2',
      name: 'rtmp_2',
      component: resolve => require.ensure([], () => resolve(require('@/view/rtmp_2')), 'home'),
      meta: {title: '10.4.1.1 通道2', requireAuth: false}
    },{
      path: '/rtmp_3',
      name: 'rtmp_3',
      component: resolve => require.ensure([], () => resolve(require('@/view/rtmp_3')), 'home'),
      meta: {title: '10.4.1.21 通道10', requireAuth: false}
    },{
      path: '/rtmp_4',
      name: 'rtmp_4',
      component: resolve => require.ensure([], () => resolve(require('@/view/rtmp_4')), 'home'),
      meta: {title: '10.4.10.1 通道2', requireAuth: false}
    },{
      path: '/rtmp_5',
      name: 'rtmp_5',
      component: resolve => require.ensure([], () => resolve(require('@/view/rtmp_5')), 'home'),
      meta: {title: '10.4.10.21 通道4', requireAuth: false}
    }
  ]
})
/**
 *  修改网站title的值
 */
router.afterEach((transition) => {
  if (transition.meta.title) {
    document.title = transition.meta.title
  }
})
/**
 * 路由拦截器
 * 1.判断该路由是否需要登录权限
 * 2.通过vuex state获取当前的token是否存在
 * 3.将跳转的路由path作为参数，登录成功后跳转到该路由
 */
router.beforeEach((to, from, next) => {
  next()
})
/**
 * 路由输出
 */
export default router
