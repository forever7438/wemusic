<template>
	<view class="lesson_science">
		<text class="teacher_class">{{title}}</text>
		<view class="lesson_image">
			<image src="../../static/img/lesson.jpg"></image>
			<view class="">
				<image src="../../static/img/lesson1.jpg"></image>
				<image src="../../static/img/lesson2.jpg"></image>
			</view>
		</view>
		<view class="lesson_images">
			<image src="../../static/img/lesson3.jpg"></image>
			<image src="../../static/img/lesson4.jpg"></image>
			<image src="../../static/img/lesson1.jpg"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: String
		}
	}
</script>

<style lang='less'>
	.lesson_science {
		padding: 20upx 15upx 0;

		.teacher_class {
			margin: 40upx 20upx;
			font-size: 48upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}

		.lesson_image {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 20upx;
			padding: 0 30upx;
			image {
				width: 434upx;
				height: 432upx;
			}

			view {
				display: flex;
				align-items: center;
				flex-direction: column;

				image {
					width: 206upx;
					height: 206upx;

					&:nth-of-type(1) {
						margin-bottom: 20upx;
					}
				}
			}
		}

		.lesson_images {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 20upx 0;
			padding: 0 30upx;
			image {
				width: 206upx;
				height: 206upx;
			}
		}
	}
</style>
