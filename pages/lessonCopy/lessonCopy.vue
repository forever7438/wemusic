<template>
	<view class="lesson_copy">
		<lessonHead title='吉他' headType='lessonCopy' content='吉他在流行音乐、摇滚音乐、蓝调、民歌、佛朗明哥中，常被视为主要乐器。而在古典音乐的领域里，吉他常以独奏或二重奏的型式演出；当然，在室内乐和管弦乐中，吉他亦扮演着相当程度的陪衬角色。'></lessonHead>
		<view class="all_lesson">
			<text class="lesson_tips">全部课程</text>
			<lessonList lessonType='lessonCopy'></lessonList>
		</view>
	</view>
</template>

<script>
	import lessonHead from '../../components/lesson/lessonHead.vue';
	import lessonList from '../../components/item/lessonList.vue';
	export default {
		components: {
			lessonHead,
			lessonList
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">
	.lesson_copy {
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
