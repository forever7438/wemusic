<template>
	<div class="my_evaluate_content">
		<ul>
			<li :class="lessonType == 0 ? 'isActive' : ''" @click="getEvalutateList('0')">待评价</li>
			<li :class="lessonType == 1 ? 'isActive' : ''" @click="getEvalutateList('1')">已评价</li>
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
				lessonType: '',
				listInfo: []
			};
		},
		onLoad(obj) {
			this.lessonType = obj.type;
			this.getEvalutateList(this.lessonType);
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
			this.getEvalutateList(this.lessonType);
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
						if (res.data.body === 'success') {
							uni.stopPullDownRefresh();
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
	.my_evaluate_content {
		padding: 0 30upx;

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
