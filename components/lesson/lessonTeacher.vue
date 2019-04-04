<template>
	<view class="lesson_teacher">
		<text class="teacher_class">授课教师</text>
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval">
			<swiper-item v-for="(item, index) in 6" :key="index">
				<!-- <view v-for="(item, index) in 3" :key="index">
					<image src="../../static/img/lf.jpg"></image>
					<text class="teacher_name">Kevin Young</text>
					<startclass size="18"></startclass>
				</view> -->
				<navigator url="/pages/teacherDetail/teacherDetail">
					<image src="../../static/img/lf.jpg"></image>
				</navigator>
				<text class="teacher_name">Kevin Young</text>
				<startclass size="18"></startclass>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import startclass from '../starclass.vue';
	export default {
		components: {
			startclass
		},
		data() {
			return {
				indicatorDots: false,
				autoplay: false,
				interval: 2000,
				duration: 500
			};
		},
		methods: {}
	};
</script>

<style lang="less">
	.lesson_teacher {
		padding: 20upx 15upx 0;

		.teacher_class {
			margin: 40upx 20upx;
			font-size: 48upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}

		.swiper {
			swiper-item {
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 280upx;
				height: 360upx;
				padding: 20upx;
				background: rgba(255, 255, 255, 1);
				box-shadow: 0upx 12upx 16upx 0upx rgba(143, 152, 188, 0.2);
				border-radius: 8upx;

				image {
					width: 120upx;
					height: 120upx;
					border-radius: 50%;
					border: 2upx solid #d9b379;
				}

				.teacher_name {
					margin-top: 20upx;
					font-size: 28upx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
				}
			}
		}
	}
</style>
