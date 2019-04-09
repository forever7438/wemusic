<template>
	<view class="authentication">
		<view class="">
			<text>某某证上传</text>
			<view class="shade_image"><image src="../../static/img/creame@2x.png"></image></view>
		</view>
		<view class="">
			<text>某某证上传</text>
			<view class="shade_image"><image src="../../static/img/creame@2x.png"></image></view>
		</view>
		<button>提交认证</button>
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
.authentication {
	padding: 40upx 15upx 0;
	view {
		text {
			font-size: 32upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}
		.shade_image {
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 40upx auto;
			width: 500upx;
			height: 288upx;
			background: rgba(246, 246, 246, 1);
			image {
				width: 80upx;
				height: 80upx;
			}
		}
	}
	button {
		margin: 0 80upx;
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
