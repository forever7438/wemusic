<template>
	<view>
		<textarea placeholder="请留下您宝贵的意见" v-model="contact" />
		<input class="uni-input" placeholder="请输入联系方式(手机或邮箱)" v-model="body" />
		<button @tap="submitFeedback">提交</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			body: '',
			contact: ''
		};
	},
	methods: {
		//提交意见反馈
		submitFeedback() {
			if (!this.contact) {
				uni.showToast({
					title: '反馈内容不得为空',
					icon: 'none'
				});
				return;
			}
			if (!this.body) {
				uni.showToast({
					title: '联系方式不得为空',
					icon: 'none'
				});
				return;
			}
			this.ajax({
				url: 'studentclass/feed_back',
				data: {
					body: this.body,
					contact: this.contact
				},
				success: res => {
					console.log(res);
				}
			});
		}
	}
};
</script>

<style lang="less">
view {
	padding: 0 30upx;
	textarea {
		width: auto;
		margin: 30upx 0;
		height: 600upx;
		padding: 30upx;
		background: rgba(249, 249, 249, 1);
		border-radius: 12upx;
		font-size: 32upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(144, 144, 144, 1);
	}
	.uni-input {
		height: 92upx;
		padding-left: 30upx;
		background: rgba(249, 249, 249, 1);
		font-size: 32upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(144, 144, 144, 1);
	}
	button {
		margin-top: 80upx;
		background: rgba(250, 212, 42, 1);
		font-size: 32upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
	}
}
</style>
