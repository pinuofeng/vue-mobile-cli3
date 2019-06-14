import axios from 'axios'
import router from 'router'
import {login, getUserInfo, getUserTree, resetPassword, logout} from 'api/login'
import keys, {setItem, getItem, removeItem} from 'utils/lsOperation'

const state = {
    token: getItem(keys.token) || '',
    userInfo: getItem(keys.userInfo) || {},
    menuTree: getItem(keys.menuTree) || [],
    asyncRoutes: '',
};

const mutations = {
    SET_TOKEN: (state, token='') => {
        state.token = token
    },
    SET_USER_INFO: (state, userInfo={}) => {
        state.userInfo = userInfo
    },
    SET_MENU_TREE: (state, menuTree=[]) => {
        state.menuTree = menuTree
    },
    SET_ASYNC_ROUTES: (state, routes='') => {
        state.asyncRoutes = routes
    },
};

const actions = {
    userLogin({dispatch, commit}, userInfo) {
        return new Promise((resolve, reject) => {
            login(userInfo).then(({token}) => {
                if(token===''){
                    reject('用户名或密码错误');
                    return
                }
                if(!token){
                    reject('网络连接错误');
                    return
                }
                commit('SET_TOKEN', token);
                setItem(keys.token, token);

                axios.all([getUserInfo(token), getUserTree()])
                    .then(axios.spread(function (userInfo, menuTree) {
                        commit('SET_USER_INFO', userInfo);
                        setItem(keys.userInfo, userInfo);
                        commit('SET_MENU_TREE', menuTree);
                        setItem(keys.menuTree, menuTree);
                        dispatch('setAsyncRoutes');
                        resolve();
                })).catch(e => {
                    console.error('获取用户信息和用户树出错：', e);
                    reject('获取用户信息失败');
                });

            }).catch(error => {
                console.error('登录失败：', e);
                reject('登录失败，请重试')
            })
        })
    },

    resetPwd({commit}, data){
        return new Promise((resolve, reject) => {
            resetPassword(data).then(res => {
                if(res.rel){
                    resolve()
                }else {
                    reject(res.message);
                }
            }).catch(e => {
                console.error('密码修改失败：', e);
                reject('密码修改失败，请重试')
            })
        })
    },
    logout({commit}, timeout) {

        return new Promise((resolve, reject) => {
            // 超时，前端退出
            if(timeout==='timeout'){
                clearData();
                resolve();
                return
            }
            // 正常，后端+前端退出
            logout().then(() => {
                clearData();
                resolve()
            }).catch(e => {
                reject('退出登录异常')
            })
        });

        function clearData() {
            commit('SET_TOKEN', '');
            commit('SET_USER_INFO', {});
            commit('SET_MENU_TREE', []);
            commit('SET_ASYNC_ROUTES', '');
            removeItem(keys.token);
            removeItem(keys.userInfo);
            removeItem(keys.menuTree);
        }

    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
