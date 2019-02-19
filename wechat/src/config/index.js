export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: 'talko',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev: 'http://talko.wuxincheng.com',
    pro: 'http://talko.wuxincheng.com'
  },
  // baseUrl: {
  //   dev: 'http://localhost:52954',
  //   pro: 'http://localhost:52954'
  // },
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: '/',
  domian:"http://talko.wuxincheng.com/",
	/**
	 * 微信公众号部分设置
	 */
	weChat:{
    appId:"wx7debe560edf5eb91",
	}
}
