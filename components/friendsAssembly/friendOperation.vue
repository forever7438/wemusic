<template>
	<view class="operation">
		<view>
			<image src="../../static/img/zhuanfa@2x.png"></image>
			<text>{{ forward }}</text>
		</view>
		<view>
			<image src="../../static/img/comment@2x.png"></image>
			<text>{{ message }}</text>
		</view>
		<view>
			<image src="../../static/img/dianzan@2x.png"></image>
			<text>{{ praise }}</text>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		message: Number,
		praise: Number,
		forward: Number
	}
};
</script>

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
