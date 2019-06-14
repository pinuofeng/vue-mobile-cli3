const KEYS = {
    token: 'access-token',  // 用户token
    userInfo: 'user-info',  // 用户信息
    menuTree: 'menu-tree',  // 权限树
    showMenuBtn: 'show-menu-btn', //是否将伸缩按钮显示在菜单上
    themeBgColor: 'theme-bg-color', // 主题背景色(头部和菜单)
    pageAnimation: 'page-animation', // 页面切换动画
    showTagViews: 'show-tag-views', // 是否显示标签页
    activatedPath: 'activated-path', // 当前激活的路由
    tagViews: 'tag-views', // 标签页tag
    dict: 'sys-dict', // 系统词典
};

export function setItem(key, value) {
    ls.set(key, value);
}

export function getItem(key) {
  return ls.get(key);
}

export function removeItem(key) {
  ls.rm(key);
}

export function getAll(keys) {
    return ls.getAll(keys);
}

export function flush() {
    ls.flush();
}

export default KEYS
