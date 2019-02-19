import axios from '@/libs/api.request'
import config from '@/config'
const { domian } = config
//个人中心页面接口

export const getInfo = (userId) => {
    console.log("调用接口getInfo：入参："+JSON.stringify(userId));
    return axios.request({
        url: domian + '/api/my/getInfo',
        params: {
            userId
        },
        method: 'get'
    })
}

export const getCourses = (userId) => {
    console.log("调用接口getCourses：入参："+JSON.stringify(userId));
    return axios.request({
        url: domian + '/api/my/getCourses',
        params: {
            userId
        },
        method: 'get'
    })
}
