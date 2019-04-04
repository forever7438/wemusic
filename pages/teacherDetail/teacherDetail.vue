<template>
	<view>
		<lessonHead headType='teacherDetail' title='吉他快速入门' content='通过本科课程的学习，您将会快速掌握吉他基础知识，以及简单的乐理知识，在未来的的学习中打下坚实的基础'></lessonHead>
		<view class="all_lesson">
			<text class="lesson_tips">全部课程</text>
			<lessonList lessonType='teacherDetail'></lessonList>
		</view>
		<lessonComment title='学生评价'></lessonComment>
		<lessonScience title='教师风采'></lessonScience>
	</view>
</template>

<script>
	import lessonHead from '../../components/lesson/lessonHead.vue';
	import lessonList from '../../components/item/lessonList.vue';
	import lessonComment from '../../components/lesson/lessonComment.vue';
	import lessonScience from '../../components/lesson/lessonScience.vue';
	export default {
		components: {
			lessonHead,
			lessonList,
			lessonComment,
			lessonScience
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">
	view {
		.all_lesson {
			padding: 0 15upx;
			margin-top: 40upx;

			.lesson_tips {
				font-size: 48upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
		}
	}
</style>
