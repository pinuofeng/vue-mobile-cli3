import axios from 'axios'
import axiosConfig from './axiosConfig'
import store from 'store'
import router from 'router'

// 创建axios实例
const service = axios.create(axiosConfig);

// request拦截器
service.interceptors.request.use(config => {
    // 设置请求头携带token
    if (store.getters.token) {
        config.headers['access-token'] = store.getters.token;
    }
    return config
}, error => {
    return Promise.reject(error);
});

// response拦截器
service.interceptors.response.use(
    response => {
        let res = response.data;
        // token错误或过期
        if (response.status === 401 || res.status === 40101 || res.status === 40301) {
            reLogin('登录已失效，请重新登录');
            return Promise.reject('Token错误或已过期。');
        }
        return res
    },
    error => {
        console.error('[root/fetch/axiosInstance.js] 响应失败：', error);
        alert('网络出现错误，请稍后重试。');
        return error;
    }
);

function reLogin(msg){
    alert(msg);
    store.dispatch('user/logout', 'timeout').then(() => {
        location.reload(); // 清空动态路由
    });
}

export default service
