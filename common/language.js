import Vue from 'vue'
import VueI18n from './i18n.js'
import {
	enUS
} from './lang/en-US.js'
import {
	zhCN
} from './lang/zh-CN.js'
Vue.use(VueI18n)
const i18n = new VueI18n({
	locale: uni.getStorageSync('langType') == 'zh-CN' ? 'zh-CN' : 'en-US',
	messages: {
		'en-US': {
			index: enUS
		},
		'zh-CN': {
			index: zhCN
		}
	}
})
export {
	i18n
}
