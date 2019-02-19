export default [
  {
    path: '/',
    name: 'list',
    meta: {
      title: '个人中心'
    },
    component: () => import('@/view/main/main.vue')
  },
  {
    path: '/my',
    name: 'my',
    meta: {
      title: '个人中心'
    },
    component: () => import('@/view/my/my.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    meta: {
      title: '授权',
      href: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=appidflag&redirect_uri=Urlflag&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect',
      icon: 'ios-book'
    }
  },
  {
    path: '/error',
    name: 'error',
    meta: {
      title: '授权'
    },
    component: () => import('@/view/error/show.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: '授权'
    },
    component: () => import('@/view/about/about.vue')
  },
  {
    path: '/service',
    name: 'service',
    meta: {
      title: '客服'
    },
    component: () => import('@/view/service/service.vue')
  },
  {
    path: '/site',
    name: 'site',
    meta: {
      title: '地址'
    },
    component: () => import('@/view/site/site.vue')
  },
  {
    path: '/personal',
    name: 'personal',
    meta: {
      title: '个人中心'
    },
    component: () => import('@/view/personal/personal.vue')
  },
  {
    path: '/security',
    name: 'security',
    meta: {
      title: '安全中心'
    },
    component: () => import('@/view/security/security.vue')
  },
  {
    path: '/order',
    name: 'order',
    meta: {
      title: '订单列表'
    },
    component: () => import('@/view/order/order.vue')
  },
  {
    path: '/my-site',
    name: 'my-site',
    meta: {
      title: '我的地址'
    },
    component: () => import('@/view/my-site/my-site.vue')
  },
  {
    path: '/Boutique',
    name: 'Boutique',
    meta: {
      title: '精选购物'
    },
    component: () => import('@/view/Boutique/Boutique.vue')
  },
  {
    path: '/product',
    name: 'product',
    meta: {
      title: '产品页面'
    },
    component: () => import('@/view/product/product.vue')
  },
  {
    path: '/discount',
    name: 'discount',
    meta: {
      title: '优惠券'
    },
    component: () => import('@/view/discount/discount.vue')
  },
  {
    path: '/purchase',
    name: 'purchase',
    meta: {
      title: '付款页面'
    },
    component: () => import('@/view/purchase/purchase.vue')
  },
  {
    path: '/confirm',
    name: 'confirm',
    meta: {
      title: '确认订单'
    },
    component: () => import('@/view/confirm/confirm.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    meta: {
      title: '菜单'
    },
    component: () => import('@/view/menu/menu.vue')
  },
  {
    path: '/safety',
    name: 'safety',
    meta: {
      title: '安全课堂'
    },
    component: () => import('@/view/safety/safety.vue')
  },
  {
    path: '/answer',
    name: 'answer',
    meta: {
      title: '答题页面'
    },
    component: () => import('@/view/answer/answer.vue')
  },
  {
    path: '/Starting-work',
    name: 'Starting-work',
    meta: {
      title: '答题题目'
    },
    component: () => import('@/view/Starting-work/Starting-work.vue')
  },
]