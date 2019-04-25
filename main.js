import Vue from 'vue'
import App from './App'
import {
	ajax
} from './common/common.js';
import {
	i18n
} from './common/language.js';
Vue.config.productionTip = false
//封装请求方法
Vue.prototype.ajax = ajax
Vue.prototype._i18n = i18n;
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
