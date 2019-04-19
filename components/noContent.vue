<template>
	<view class="no_content">
		<image src="../../static/img/nothing.png"></image>
		<text>{{title}}</text>
	</view>
</template>

<script>
	export default {
		props:{
			title:String
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
	.no_content {
		height: 600upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		image {
			width: 216upx;
			height: 244upx;
		}
		text {
			font-size: 32upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(0, 0, 0, 0.5);
		}
	}
</style>
