import axios from 'axios'
import axiosInstance from './axiosInstance'

class Fetch {

    static get = function (url, params) {
        return axiosInstance.request({
            url: url,
            method: 'get',
            params
        })
    };

    static delete = function (url, params) {
        return axiosInstance.request({
            url: url,
            method: 'delete',
            params
        })
    };

    static post = function (url, data) {
        return axiosInstance.request({
            url: url,
            method: 'post',
            data
        })
    };

    static put = function (url, data) {
        return axiosInstance.request({
            url: url,
            method: 'put',
            data
        })
    };

}

export const FetchAxios = (Vue)=> {
    Vue.prototype.$fetch = Fetch;
    Vue.prototype.$request = axiosInstance.request;
    Vue.prototype.$axios = axios;
};

export default Fetch
