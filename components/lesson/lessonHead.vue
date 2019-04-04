<template>
	<view class="lesson_content">
		<view class="lesson_shade">
			<text class="lesson_name">吉他快速入门</text>
			<startclass></startclass>
			<text class="lesson_time">课程时长：30min - 180min</text>
			<view class=""><text class="lesson_desc">通过本科课程的学习，您将会快速掌握吉他基础知识，以及简单的乐理知识，在未来的的学习中打下坚实的基础</text></view>
		</view>
	</view>
</template>

<script>
import startclass from '../starclass.vue';
export default {
	components: {
		startclass
	},
	data() {
		return {};
	},
	onLoad() {},
	methods: {}
};
</script>

<style lang="less">
.lesson_content {
	width: 100%;
	height: 472upx;
	background: url('../../static/img/demo.jpg') no-repeat center/100%;
	.lesson_shade {
		width: 100%;
		height: 472upx;
		padding: 100upx 30upx;
		background: rgba(0, 0, 0, 0.3);
		.lesson_name {
			margin-top: 160upx;
			font-size: 60upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
		}
		.lesson_time {
			margin: 100upx 0;
			font-size: 28upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(255, 255, 255, 1);
			letter-spacing: 2upx;
		}
		.lesson_desc {
			font-size: 26upx;
			font-family: PingFangSC-Light;
			font-weight: 300;
			color: rgba(255, 255, 255, 1);
		}
	}
}
</style>
