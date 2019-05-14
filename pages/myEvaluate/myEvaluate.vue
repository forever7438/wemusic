<template>
	<div class="my_evaluate_content">
		<view class="meun_list">
			<text :class="lessonType == 2 ? 'active' : ''" @click="getEvalutateList('2')">待评价</text>
			<text :class="lessonType == 3 ? 'active' : ''" @click="getEvalutateList('3')">已评价</text>
		</view>
		<lesson-list :lessonType="lessonType" :listInfo="listInfo"></lesson-list>
	</div>
</template>

<script>
let _this = '';
import lessonList from '../../components/item/lessonList.vue';
export default {
	components: {
		lessonList
	},
	data() {
		return {
			isEnd: false,
			index: 0,
			lessonType: '',
			listInfo: []
		};
	},
	onLoad(obj) {
		_this = this;
		this.lessonType = obj.type;
		this.getEvalutateList(this.lessonType);
	},
	onShow() {
		if (uni.getStorageSync('langType') == 'en-US') {
			uni.setNavigationBarTitle({
				title: 'My Evaluate'
			});
		} else {
			uni.setNavigationBarTitle({
				title: '我的评价'
			});
		}
	},
	onReachBottom() {
		if (this.isEnd) {
			return;
		}
		this.index++;
		setTimeout(() => {
			this.getEvalutateList(this.lessonType);
		}, 300);
	},
	onPullDownRefresh() {
		this.index = 0;
		this.getEvalutateList(this.lessonType);
	},
	watch: {
		lessonType: (now, old) => {
			_this.listInfo = [];
		}
	},
	methods: {
		//获取评价
		getEvalutateList(type) {
			this.lessonType = type;
			this.ajax({
				url: 'studentclass/my_assess',
				data: {
					type: type,
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
.my_evaluate_content {
	padding: 0 30upx;
	.meun_list {
		z-index: 99;
		position: fixed;
		width: 100%;
		height: 90upx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		background-color: #fff;
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
