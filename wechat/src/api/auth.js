import axios from '@/libs/api.request'
import config from '@/config'
const { domian } = config
//授权界面

export const getAuthUrl = (address ) => {
  debugger;
  console.log("调用接口getAuthUrl：入参："+JSON.stringify(address));
  return axios.request({
    url: domian+'api/auth/getAuthUrl',
    params: {
      address
  },
    method: 'get'
  })
}


export const getAccount = (code) => {
  console.log("调用接口getAccount：入参："+JSON.stringify(code));
  var data = {
     "code":code
  }
  return axios.request({
    url: domian+'api/auth/getAccount',
    data,
    method: 'post'
  })
}