import Vue from 'vue'
import App from './App'
import {
	ajax
} from './common/common.js'
Vue.config.productionTip = false
//封装请求方法
Vue.prototype.ajax = ajax
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
