import Vue from 'vue'
import VueI18n from './i18n.js'
Vue.use(VueI18n)
const i18n = new VueI18n({
	locale: 'en-US',
	messages: {
		'en-US': {
			index: {
				invite: 'Invite',
				game: 'Game'
			}
		},
		'zh-CN': {
			index: {
				invite: '邀请',
				game: '游戏'
			}
		}
	}
})
export {
	i18n
}
