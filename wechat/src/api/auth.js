import axios from '@/libs/api.request'
import config from '@/config'
const { domian } = config
//授权界面

export const getAuthUrl = (address ) => {
  return axios.request({
    url: domian+'api/auth/getAuthUrl',
    params: {
      address
  },
    method: 'get'
  })
}


export const getAccount = (code) => {
  var data = {
     "code":code
  }
  return axios.request({
    url: domian+'api/auth/getAccount',
    data,
    method: 'post'
  })
}