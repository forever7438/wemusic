<template>
	<div class="my_lesson_content">
		<ul>
			<li :class="lessonType == -1 ? 'isActive' : ''" @click="lessonType='-1'">全部课程</li>
			<li :class="lessonType == 0  ? 'isActive' : ''" @click="lessonType='0'">待支付</li>
			<li :class="lessonType == 1  ? 'isActive' : ''" @click="lessonType='1'">待开课</li>
			<li :class="lessonType == 2  ? 'isActive' : ''" @click="lessonType='2'">已完成</li>
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
			lessonType: -1
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
		font-size: 28upx;
		font-family: PingFangSC-Regular;
		font-weight: 500;
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
