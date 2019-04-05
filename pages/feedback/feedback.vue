<template>
	<view>
		<textarea placeholder="请留下您宝贵的意见" />
		<input class="uni-input" placeholder="请输入联系方式(手机或邮箱)" v-model="inputClearValue" />
		<button>提交</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			inputClearValue: ''
		};
	}
};
</script>

<style lang="less">
view {
	padding: 0 15upx;
	textarea {
		width: auto;
		margin: 30upx 0;
		height: 500upx;
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
