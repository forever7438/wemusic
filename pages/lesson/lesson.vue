<template>
	<div class="my_lesson_content">
		<ul>
			<li class="isActive">全部课程</li>
			<li>待支付</li>
			<li>待开课</li>
			<li>已完成</li>
		</ul>
		<lesson-list :lessonType="lessonType"></lesson-list>
	</div>
</template>

<script>
import lessonList from '../../components/item/lessonList.vue';
export default {
	components: {
		lessonList
	},
	data() {
		return {
			lessonType: ''
		};
	},
	onLoad(obj) {
		this.lessonType = obj.type;
	}
};
</script>

<style lang="less" scoped>
.my_lesson_content {
	padding: 0 15upx;
	ul {
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 36upx;
		font-family: PingFangSC-Regular;
		font-weight: 600;
		color: rgba(51, 51, 51, 1);
		height: 90upx;
		li {
			display: flex;
			align-items: center;
		}
		.isActive {
			border-bottom: 6upx solid #333333ff;
		}
	}
}
</style>
