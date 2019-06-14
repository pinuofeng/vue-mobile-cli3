import Fetch from 'fetch'

// 登录获取token
export function login(data) {
    return Fetch.post('/jwt/token', data);
}

// 根据token获取用户信息
export function getUserInfo(token) {
    return Fetch.get(`/jwt/user?token=${token}`);
}

// 获取用户菜单
export function getUserTree() {
    return Fetch.get('/api/admin/menu/userTree');
}

// 修改密码
export function resetPassword(data) {
    return Fetch.put('/api/admin/user/updateUserPwd', data);
}

// 退出登录
export function logout() {
    return Fetch.post('/jwt/invalid');
}

