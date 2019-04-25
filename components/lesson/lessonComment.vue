<template>
	<view class="lesson_comment">
		<text class="teacher_class">{{ title }}</text>
		<view v-if="comment.length">
			<view class="comment" v-for="(item, index) in comment" :key="index">
				<view class="comment_infos">
					<image :src="item.photo || image"></image>
					<view class="comment_info">
						<text class="comment_title">{{ item.student_name }}</text>
						<text class="lesson_class">{{ item.class_name }}</text>
					</view>
					<view style="position: absolute;right: 30upx;"><startclass :star="Number(item.assess_star)" starColor="#666666"></startclass></view>
				</view>
				<text class="comment_content">{{ item.assess_content }}</text>
			</view>
		</view>
		<noContent v-else title="暂无评价"></noContent>
	</view>
</template>

<script>
import startclass from '../starclass.vue';
import noContent from '../noContent.vue';
export default {
	components: {
		startclass,
		noContent
	},
	props: {
		title: String,
		comment: Array
	},
	data() {
		return {
			image: '../../static/img/demo.jpg'
		};
	}
};
</script>

<style lang="less">
.lesson_comment {
	padding: 20upx 30upx 0;
	.teacher_class {
		margin: 40upx 0;
		font-size: 48upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}

	.comment {
		margin: 20upx 0;
		padding-bottom: 20upx;
		border-bottom: 2upx solid rgba(231, 232, 234, 1);
		.comment_infos {
			display: flex;
			align-items: center;
			margin-bottom: 20upx;
			/* padding: 0 20upx; */
			image {
				width: 80upx;
				height: 80upx;
				border-radius: 50%;
			}

			.comment_info {
				position: relative;
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
		/* padding: 0 20upx; */
		font-size: 32upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
	}
}
</style>
