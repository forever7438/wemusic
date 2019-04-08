<template>
	<view class="shode">
		<view class="uni-padding-wrap uni-common-mt">
			<view class="progress-box"><progress :percent="progress" show-info="true" active stroke-width="10" /></view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		progress: Number
	}
};
</script>

<style lang="less">
.shode {
	z-index: 999999;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	padding: 600upx 100upx;
	background-color: rgba(0, 0, 0, 0.5);
}
</style>
