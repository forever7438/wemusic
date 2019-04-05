<template>
	<view class="class_list">
		<navigator url="/pages/lessonCopy/lessonCopy">
			<image v-for="(item, index) in 10" :key="index" src="../../../static/img/wemusic.jpg"></image>
		</navigator>
		<navigator url="/pages/myCode/myCode">我的邀请码</navigator>
		</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello'
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style lang="less">
.class_list {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
	image {
		width: 350upx;
		height: 284upx;
		margin: 12upx;
		border-radius: 8upx;
	}
}
</style>
