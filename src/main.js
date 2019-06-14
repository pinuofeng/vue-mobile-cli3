import Vue from 'vue'
import App from './App'
import router from 'router'
import store from 'store'
import Vant from 'vant';
import FastClick from 'fastclick'
import { FetchAxios } from 'fetch'
import 'amfe-flexible'

import 'normalize.css'
import 'vant/lib/index.css';
import 'font-awesome/css/font-awesome.min.css'
import 'styles/index.scss'

// Vue全局配置
Vue.config.silent = true;
Vue.config.devtools = false;
Vue.config.productionTip = false;

// 处理移动端click事件300毫秒延迟
FastClick.attach(document.body);

Vue.use(Vant);
Vue.use(FetchAxios);

// 高德地图
/*VueAMap.initAMapApiLoader({
    key: '6ae79a0afe60b2e51857c7516b9c82f0',
    plugin: ['Autocomplete', 'Geocoder', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'ControlBar', 'MapType', 'PolyEditor', 'CircleEditor', 'Geolocation', 'Heatmap', 'MarkerClusterer'],
    v: '1.4.10'
});*/

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
