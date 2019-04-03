<template>
	<view class="operation">
		<view>
			<image src="../../static/img/zhuanfa@2x.png"></image>
			<text>12</text>
		</view>
		<view>
			<image src="../../static/img/comment@2x.png"></image>
			<text>66</text>
		</view>
		<view>
			<image src="../../static/img/dianzan@2x.png"></image>
			<text>88</text>
		</view>
	</view>
</template>

<script></script>

<style lang="less">
.operation {
	display: flex;
	align-items: center;
	justify-content: space-around;
	view {
		display: flex;
		align-items: center;
		image {
			width: 50upx;
			height: 50upx;
		}
		text {
			margin-left: 10upx;
			font-size: 36upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(102, 102, 102, 1);
		}
	}
}
</style>
