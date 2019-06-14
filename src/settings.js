module.exports = {
    /**
     * html标题
     */
    DOCUMENT_TITLE: 'Mobile App',

    /**
     * dev-server默认端口
     */
    SERVER_PORT: 8689,

    /**
     * 项目部署根路径
     * 如果项目部署根文件夹是http://192.168.1.78:8986/ProjectName/
     * 则需要将PROD_ROOT_DIR设置为 '/ProjectName/'
     * 否则默认根路径是http://192.168.1.78:8986/
     */
    PROD_ROOT_DIR: '/',

    /**
     * 项目启动自动打开浏览器
     */
    AUTO_OPEN_BROWSER: true,

    /**
     * 代理服务器
     * 代理"/api"开头的请求：http://localhost:8986/api/userInfo => http://hostaddress/ProjectName/userInfo
     */
    PROXY_SERVERS: {
        /*'/api': {
            target: `http://hostaddress/ProjectName/`,
            changeOrigin: true,
            pathRewrite: {
                '^api': ''
            }
        }*/
    }

};
