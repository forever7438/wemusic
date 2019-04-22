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
	methods: {
		//获取通知列表
		getMessageList() {
			this.ajax({
				url: 'teacherclass/teacher_message',
				data: {
					list: this.index,
					val: 5
				},
				success: res => {
					if (res.data.body === 'success') {
						if (res.data.data.length === 0) {
							this.isEnd = true;
							uni.showToast({
								title: '没有更多数据了',
								icon: 'none'
							});
							return;
						}
						this.messageList = this.messageList.concat(res.data.data);
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
