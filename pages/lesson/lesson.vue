<template>
	<view class="my_lesson_content">
		<view class="class_meun">
			<text :class="lessonType == -1 ? 'active' : ''" @click="getLessonList('-1')">全部课程</text>
			<text :class="lessonType == 0 ? 'active' : ''" @click="getLessonList('0')">待支付</text>
			<text :class="lessonType == 1 ? 'active' : ''" @click="getLessonList('1')">待开课</text>
			<text :class="lessonType == 2 ? 'active' : ''" @click="getLessonList('2')">已完成</text>
		</view>
		<lesson-list :lessonType="lessonType" :listInfo="listInfo"></lesson-list>
	</view>
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
	onPullDownRefresh() {
		this.index = 0;
		this.getLessonList(this.lessonType);
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
					uni.stopPullDownRefresh();
					if (res.data.body === 'success') {
						if (res.data.data.length === 0) {
							this.isEnd = true;
							uni.showToast({
								title: '没有更多数据了',
								icon: 'none'
							});
							return;
						}
						if (this.index !== 0) {
							this.listInfo = this.listInfo.concat(res.data.data);
						} else {
							this.listInfo = res.data.data;
						}
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

	.class_meun {
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 28upx;
		font-family: PingFangSC-Regular;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		height: 90upx;

		text {
			font-size: 28upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}

		.active {
			border-bottom: 6upx solid #000;
		}
	}
}
</style>
