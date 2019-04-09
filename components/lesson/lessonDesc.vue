<template>
	<view class="lesson_desc">
		<text class="teacher_class">{{ title }}</text>
		<view class="teacher_content">{{ content }}</view>
	</view>
</template>

<script>
export default {
	props: {
		title: String,
		content: String
	}
};
</script>

<style lang="less">
.lesson_desc {
	padding: 20upx 15upx 0;

	.teacher_class {
		margin: 40upx 20upx;
		font-size: 48upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}

	.teacher_content {
		margin-top: 30upx;
		padding: 0 24upx;
		font-size: 26upx;
		line-height: 44upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
	}
}
</style>
