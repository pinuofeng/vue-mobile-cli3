import Qs from 'qs'

export default {

    // 基础url前缀：baseURL 将自动加在 url 前面，除非 url 是一个绝对 URL。
    baseURL: process.env.VUE_APP_BASE_API,

    /*
    *   在默认的 transformRequest里，axios判断了URL和object，分别自动设置了application/x-www-form-urlencoded 或 application/json;
        这里的自动设置是没有手动指定Content-Type的时候才设置，当你在之前已经设置了Content-Type这里是不会自动设置的;
        而multipart/form-data 是在请求发送之前， 判断data里是不是FormData，如果是就强制删除Content-Type，因为浏览器会自动的设置为multipart/form-data
    */

    // 设置请求头
    //headers: {'Content-Type': 'application/json;charset=utf-8'},

    // 处理请求体
    /*transformRequest: [
        function (data) {
            return JSON.stringify(data); // 用于'Content-Type': 'application/json'
            //return Qs.stringify(data); //用于'Content-Type': 'application/x-www-form-urlencoded'(axios默认)
        }
    ],*/

    //设置超时时间，超过请求将被中断
    timeout: 5000,

}
