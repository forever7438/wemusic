<template>
	<view><recharge-list :moneyList="consumptionList"></recharge-list></view>
</template>

<script>
import rechargeList from '../../components/item/rechargeList.vue';
export default {
	components: {
		rechargeList
	},
	data() {
		return {
			consumptionList: []
		};
	},
	onLoad() {
		this.getConumptionList();
	},
	methods: {
		//获取消费记录
		getConumptionList() {
			this.ajax({
				url: 'studentclass/consumption_list',
				data: {
					list: 0,
					val: 5
				},
				success: res => {
					if (res.data.body === 'success') {
						this.consumptionList = res.data.data;
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
