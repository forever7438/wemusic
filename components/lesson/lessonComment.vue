<template>
	<view class="lesson_comment">
		<text class="teacher_class">{{title}}</text>
		<view class="comment" v-for="(item,index) in 6" :key='index'>
			<view class="comment_infos">
				<image src="../../static/img/lf.jpg"></image>
				<view class="comment_info">
					<text class="comment_title">Edward Williams</text>
					<text class="lesson_class">吉他速成班19期</text>
				</view>
				<startclass size="16"></startclass>
			</view>
			<text class="comment_content">
				教室整洁舒适，老师很有耐心，教育质量优秀。
			</text>
		</view>
	</view>
</template>

<script>
	import startclass from '../starclass.vue';
	export default {
		components: {
			startclass
		},
		props: {
			title: String
		}
	}
</script>

<style lang='less'>
	.lesson_comment {
		padding: 20upx 15upx 0;

		.teacher_class {
			margin: 40upx 20upx;
			font-size: 48upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}

		.comment {
			margin: 20upx 0;

			.comment_infos {
				display: flex;
				align-items: center;
				padding: 0 20upx;

				image {
					width: 80upx;
					height: 80upx;
					border-radius: 50%;
				}

				.comment_info {
					margin: 0 20upx;
					display: flex;
					align-items: end;
					flex-direction: column;

					.comment_title {
						font-size: 28upx;
						font-family: PingFangSC-Medium;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
					}

					.lesson_class {
						font-size: 24upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(51, 51, 51, 1);
					}
				}
			}
		}

		.comment_content {
			padding: 0 20upx;
			font-size: 32upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
		}
	}
</style>
