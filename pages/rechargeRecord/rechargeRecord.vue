<template>
	<view><recharge-list :moneyList="rechargeList"></recharge-list></view>
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
			rechargeList: []
		};
	},
	onLoad() {
		this.getRechargeList();
	},
	onReachBottom() {
		if (this.isEnd) {
			return;
		}
		this.index++;
		setTimeout(() => {
			this.getRechargeList();
		}, 300);
	},
	onPullDownRefresh() {
		this.index = 0;
		this.getRechargeList();
	},
	methods: {
		//获取充值记录
		getRechargeList() {
			this.ajax({
				url: 'studentclass/money_list',
				data: {
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
							this.rechargeList = this.rechargeList.concat(res.data.data);
						} else {
							this.rechargeList = res.data.data;
						}
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
