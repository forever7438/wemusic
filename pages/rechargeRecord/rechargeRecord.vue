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
			rechargeList: []
		};
	},
	onLoad() {
		this.getRechargeList();
	},
	methods: {
		//获取充值记录
		getRechargeList() {
			this.ajax({
				url: 'studentclass/money_list',
				data: {
					list: 0,
					val: 5
				},
				success: res => {
					if (res.data.body === 'success') {
						this.rechargeList = res.data.data;
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
