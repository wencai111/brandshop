// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import config from '@/config'
import TreeTable from 'tree-table-vue'
import './style.css'
import './weui.min.css'
import 'iview/dist/styles/iview.css';
import '@/assets/icon/iconfont.css'
Vue.use(iView)
Vue.use(TreeTable)
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
