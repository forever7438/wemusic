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
		return {};
	}
};
</script>

<style lang="less">
view {
	padding: 0 15upx;
}
</style>
