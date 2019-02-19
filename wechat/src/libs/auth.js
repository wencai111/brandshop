import {
  getAccount
} from '@/api/auth'
import {
  getAuthUrl,
  setToken,
  getToken,
  getQueryString
} from '@/libs/util'


/// 不是通过路由进来的，而是通过访问地址进来
///获取微信公众号验证
export const getAuth = (to) => {
   setToken("oHqoO1CYJI4UfMzPPSA9dZredrCI");
  // setToken("oHqoO1ETMkt9ZoCkfpvcC7AdgLac");
  var authObj = {
    operate:1,// 1 next() 2 next(auth) 3 等待 4异步获取openid成功 5 获取openid失败 6异步后台错误 7请求错误
    token: false,
    next: {},
    authPromise:null,
    message:""
  }
  //获取缓存微信公众号openId
  var token = getToken();
  var code=null;
  //获取code
  if(to.name){
    if(to&&to.name&&to.params&&to.params.code){
      code=to.params.code
    }
  }
  else{
      code = getQueryString(to.fullPath, "code");
  }
  //---operate=1  开始过滤operate=1 的情况---
  //operate=1 授权通过  1token=true
  if(token){
    authObj.operate=1;
    return authObj;
  }
  //operate=1 授权通过  1错误界面 
  if(to.name&&to.name==="error"){
    authObj.operate=1;
    return authObj;
  }
  //operate=1 授权通过  1公众号菜单进入或者重定向进入
  if(!to.name&&to.fullPath.indexOf("https://open.weixin.qq.com/connect/oauth2/authorize")!=-1){
    authObj.operate=1;
    return authObj;
  }
   //operate=1  结束滤operate=1 的情况

   //operate=2  开始过滤operate=2 的情况
   if(!code){
    authObj.operate=2;
    authObj.next={"auth":getAuthUrl(to)};
    return authObj;
   }
  //operate=2  结束过滤operate=2 的情况
  
  //operate=3  开始过滤operate=3 的情况
  authObj.operate=3;
  authObj.authPromise=new Promise((resolve, reject) => {
    //授权成功
    getAccount(code)
    .then(res => {
      let currentAuthObj = {
        operate:4,// 1 next() 2 next(auth) 3 等待 4异步获取openid成功 5 获取openid失败 6异步后台错误 7请求错误
        token: false,
        next: {},
        authPromise:null,
        message:""
      }
      if(res.data.success){
        currentAuthObj.operate=4;
        setToken(res.data.data.openid);
      }
      else if (!res.data.success && (res.data.errcode === "40163" || res.data.errcode === "40029")) {
        currentAuthObj.operate=5;
        currentAuthObj.next={"auth":getAuthUrl(to)};
        currentAuthObj.message=res.data.errcode+res.data.message;
      }
      else{
        currentAuthObj.operate=6;
        currentAuthObj.next={"name":"error"};
        currentAuthObj.message=res.data.errcode+res.data.message;
      }
      resolve(currentAuthObj);
    })
    .catch(error => {
      reject(error);
    });
  });
   return authObj;
  //operate=3  结束过滤operate=3 的情况
}