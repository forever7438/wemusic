<template>
	<div class="messgae_content"><message-list :messageList="messageList"></message-list></div>
</template>

<script>
import messageList from '../../components/item/messageList.vue';
export default {
	components: {
		messageList
	},
	data() {
		return {
			isEnd: false,
			index: 0,
			messageList: []
		};
	},
	onShow() {
		if (uni.getStorageSync('langType') == 'en-US') {
			uni.setNavigationBarTitle({
				title: 'Notice of adjustment'
			});
		} else {
			uni.setNavigationBarTitle({
				title: '调整通知'
			});
		}
	},
	onLoad() {
		this.getMessageList();
	},
	onReachBottom() {
		if (this.isEnd) {
			return;
		}
		this.index++;
		setTimeout(() => {
			this.getMessageList();
		}, 300);
	},
	onPullDownRefresh() {
		this.index = 0;
		this.getMessageList();
	},
	methods: {
		//获取通知列表
		getMessageList() {
			this.ajax({
				url: uni.getStorageSync('type') == 1 ? 'studentclass/student_message' : 'teacherclass/teacher_message',
				data: {
					list: this.index,
					val: 5
				},
				success: res => {
					uni.stopPullDownRefresh();
					if (res.data.body === 'success') {
						if (res.data.data.length === 0) {
							this.isEnd = true;
							uni.showToast({
								title: '没有更多数据了',
								icon: 'none'
							});
							return;
						}
						if (this.index !== 0) {
							this.messageList = this.messageList.concat(res.data.data);
						} else {
							this.messageList = res.data.data;
						}
					}
				}
			});
		}
	}
};
</script>

<style lang="less" scoped>
.messgae_content {
	padding: 0 15upx;
}
</style>
