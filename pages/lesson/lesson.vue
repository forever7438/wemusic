<template>
	<view class="my_lesson_content">
		<view class="class_meun">
			<text v-if="isShow" :class="lessonType == -1 ? 'active' : ''" @click="getLessonList('-1')">全部课程</text>
			<text v-if="isShow" :class="lessonType == 0 ? 'active' : ''" @click="getLessonList('0')">待支付</text>
			<text :class="lessonType == 1 ? 'active' : ''" @click="getLessonList('1')">待开课</text>
			<text :class="lessonType == 3 ? 'active' : ''" @click="getLessonList('3')">已完成</text>
		</view>
		<lesson-list v-if="isShow" :lessonType="lessonType" :listInfo="listInfo"></lesson-list>
		<teacherClessonList v-else :lessonType="lessonType" :listInfo="listInfo"></teacherClessonList>
	</view>
</template>

<script>
let _this = '';
import teacherClessonList from '../../components/item/teacherClessonList.vue';
import lessonList from '../../components/item/lessonList.vue';
export default {
	components: {
		teacherClessonList,
		lessonList
	},
	data() {
		return {
			isShow: false,
			isEnd: false,
			index: 0,
			lessonType: -1,
			listInfo: []
		};
	},
	onLoad(obj) {
		_this = this;
		uni.getStorageSync('type') == 1 ? (this.isShow = true) : (this.isShow = false);
		this.lessonType = obj.type;
		this.getLessonList(this.lessonType);
	},
	onShow() {
		if (uni.getStorageSync('langType') == 'en-US') {
			uni.setNavigationBarTitle({
				title: 'My Lesson'
			});
		} else {
			uni.setNavigationBarTitle({
				title: '我的课程'
			});
		}
	},
	onReachBottom() {
		if (this.isEnd) {
			// return;
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
	watch: {
		lessonType: (now, old) => {
			_this.listInfo = [];
		}
	},
	methods: {
		//获取课程
		getLessonList(val) {
			this.lessonType = val;
			this.ajax({
				url: uni.getStorageSync('type') == 1 ? 'studentclass/class_type' : 'teacherclass/class_list',
				data:
					uni.getStorageSync('type') == 1
						? {
								type: val,
								list: this.index,
								val: 5
						  }
						: {
								status: val - 1,
								list: this.index,
								val: 5
						  },
				success: res => {
					uni.stopPullDownRefresh();
					if (res.data.body === 'success') {
						switch (uni.getStorageSync('type')) {
							case 1:
								if (res.data.data.length === 0) {
									this.isEnd = true;
									uni.showToast({
										title: '没有更多数据了',
										icon: 'none'
									});
								}
								if (this.index !== 0) {
									this.listInfo = this.listInfo.concat(res.data.data);
								} else {
									this.listInfo = res.data.data;
								}
								break;
							default:
								if (res.data.data.list.length === 0) {
									this.isEnd = true;
									uni.showToast({
										title: '没有更多数据了',
										icon: 'none'
									});
								}
								if (this.index !== 0) {
									this.listInfo = this.listInfo.concat(res.data.data.list);
								} else {
									this.listInfo = res.data.data.list;
								}
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
		z-index: 99;
		position: fixed;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 28upx;
		font-family: PingFangSC-Regular;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		background-color: #fff;
		height: 90upx;

		text {
			font-size: 28upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
			padding-bottom: 20upx;
		}

		.active {
			border-bottom: 6upx solid #000;
		}
	}
}
</style>
