import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import iView from 'iview'
import { setTitle } from '@/libs/util'
import {getAuth} from '@/libs/auth'
import {getAuthUrl} from '@/api/auth'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  // debugger;
  iView.LoadingBar.start();
  var authObj=getAuth(to,from);
  if(authObj.operate===1){
    next();
  }
  else if(authObj.operate===2){
    console.log("authObj.next.auth"+authObj.next.auth);
    getAuthUrl(authObj.next.auth).then(res=>{
      console.log("res.data.data"+res.data.data);
      // debugger;
      window.location.href = res.data.data;
    });
  }
  else if(authObj.operate===3){
    authObj.authPromise
      .then(res=>{
        if(res.operate===4){
           next();
        }
        else if(res.operate===5){
          getAuthUrl(authObj.next.auth).then(res=>{
            // debugger;
            window.location.href = res.data.data;
          });
        }
        else if(res.operate===6){
           next(res.next);
        }
      })
  }
})
router.afterEach(to => {
  setTitle(to, router.app)
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})
export default router
