<template>
	<view><recharge-list></recharge-list></view>
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
					list: 1,
					val: 5
				},
				success: res => {
					console.log(res);
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
