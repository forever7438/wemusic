<template>
	<view>
		<lessonHead headType='lessonDetail' title='吉他快速入门' content='通过本科课程的学习，您将会快速掌握吉他基础知识，以及简单的乐理知识，在未来的的学习中打下坚实的基础'></lessonHead>
		<lessonTeacher></lessonTeacher>
		<lessonDesc title='课程介绍' content='该课程立足于钢琴官方，结合本机构的深入研究，帮助学员快速了解钢琴特点，帮助学员快速了解钢琴特点， 通过听说读写分项授课，难点各个击破，掌握熟练钢琴。'></lessonDesc>
		<lessonComment title='课程评价'></lessonComment>
		<lessonScience title='教学环境'></lessonScience>
		<span class="sign_up">报名</span>
	</view>
</template>

<script>
	import lessonHead from '../../components/lesson/lessonHead.vue';
	import lessonTeacher from '../../components/lesson/lessonTeacher.vue';
	import lessonDesc from '../../components/lesson/lessonDesc.vue';
	import lessonComment from '../../components/lesson/lessonComment.vue';
	import lessonScience from '../../components/lesson/lessonScience.vue';
	export default {
		components: {
			lessonHead,
			lessonTeacher,
			lessonDesc,
			lessonComment,
			lessonScience
		},
		data() {
			return {};
		}
	};
</script>

<style lang="less">
	view {
		.sign_up {
			text-align: center;
			margin-top: 40upx;
			display: inline-block;
			width: 100%;
			line-height: 100upx;
			background: rgba(250, 212, 42, 1);
			font-size: 28upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}
	}
</style>
