<template>
	<div class="my_lesson_content">
		<ul>
			<li :class="lessonType == -1 ? 'isActive' : ''" @click="getLessonList('-1')">全部课程</li>
			<li :class="lessonType == 0 ? 'isActive' : ''" @click="getLessonList('0')">待支付</li>
			<li :class="lessonType == 1 ? 'isActive' : ''" @click="getLessonList('1')">待开课</li>
			<li :class="lessonType == 2 ? 'isActive' : ''" @click="getLessonList('2')">已完成</li>
		</ul>
		<lesson-list :lessonType="lessonType" :listInfo="listInfo"></lesson-list>
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
			isEnd: false,
			index: 0,
			lessonType: -1,
			listInfo: []
		};
	},
	onLoad(obj) {
		this.lessonType = obj.type;
		this.getLessonList(this.lessonType);
	},
	onReachBottom() {
		if (this.isEnd) {
			return;
		}
		this.index++;
		setTimeout(() => {
			this.getLessonList(this.lessonType);
		}, 300);
	},
	methods: {
		//获取课程
		getLessonList(val) {
			this.lessonType = val;
			this.ajax({
				url: 'studentclass/class_type',
				data: {
					type: val,
					list: this.index,
					val: 5
				},
				success: res => {
					if (res.data.body === 'success') {
						if (res.data.data.length === 0) {
							this.isEnd = true;
							uni.showToast({
								title: '没有更多数据了',
								icon: 'none'
							});
							return;
						}
						this.listInfo = this.listInfo.concat(res.data.data);
					}
				}
			});
		}
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
