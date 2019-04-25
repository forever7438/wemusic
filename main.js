import Vue from 'vue'
import App from './App'
import {
	ajax
} from './common/common.js';
import {
	i18n
} from './common/language.js';
import ToolsUp from './common/request/request-upFiles.js'
Vue.config.productionTip = false
//封装请求方法
Vue.prototype.ajax = ajax
Vue.prototype.ToolsUp = ToolsUp;
Vue.prototype._i18n = i18n;
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
