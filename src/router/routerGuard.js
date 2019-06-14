import router from 'router'
import store from 'store'

// 路由白名单
const whiteList = ['/Login', '/404'];

// 进入路由页面前
router.beforeEach((to, from, next) => {

    // 在白名单里直接跳转
    if(whiteList.indexOf(to.path) !== -1){
        next();
        return
    }

    const Token = store.getters.token;

    // 需要登录且token存在
    if (Token) {
        next();
    } else {
        next({ path: `/Login?redirect=${to.path}`, replace: true })
    }

});