<template>
	<view class="upload_file">
		<view class="upload_shade"><image src="../../static/img/creame@2x.png"></image></view>
		<button>上传</button>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="less">
.upload_file {
	padding: 86upx 86upx 0;
	.upload_shade {
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 500upx;
		height: 844upx;
		background: rgba(246, 246, 246, 1);
		image {
			width: 80upx;
			height: 80upx;
		}
	}
	button {
		margin: 50upx 30upx 0;
		width: auto;
		line-height: 100upx;
		background: rgba(250, 212, 42, 1);
		border-radius: 12upx;
		font-size: 32upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
}
</style>
