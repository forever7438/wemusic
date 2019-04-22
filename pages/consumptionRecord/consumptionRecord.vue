<template>
	<view>
		<recharge-list :moneyList="consumptionList"></recharge-list>
	</view>
</template>

<script>
	import rechargeList from '../../components/item/rechargeList.vue';
	export default {
		components: {
			rechargeList
		},
		data() {
			return {
				index: 0,
				isEnd: false,
				consumptionList: []
			};
		},
		onLoad() {
			this.getConumptionList();
		},
		onReachBottom() {
			if (this.isEnd) {
				return;
			}
			this.index++;
			setTimeout(() => {
				this.getConumptionList();
			}, 300);
		},
		onPullDownRefresh() {
			this.getConumptionList();
		},
		methods: {
			//获取消费记录
			getConumptionList() {
				this.ajax({
					url: 'studentclass/consumption_list',
					data: {
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
							this.consumptionList = this.consumptionList.concat(res.data.data);
						}
					}
				});
			}
		}
	};
</script>

<style lang="less">
	view {
		padding: 0 30upx;
	}
</style>
