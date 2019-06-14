const getters = {
    /* user */
    token: state => state.user.token,
    userInfo: state => state.user.userInfo,
    menuTree: state => state.user.menuTree,
    asyncRoutes: state => state.user.asyncRoutes,

};

export default getters
