import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex);

// 获取modules文件夹下所有模块
const modulesFiles = require.context('./modules', false, /\.js$/);

// 将文件名作为命名空间名称
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules
}, {});

const store = new Vuex.Store({
  modules,
  getters
});

export default store
