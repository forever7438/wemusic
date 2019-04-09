<template>
	<view class="finance">
		<financeList></financeList>
	</view>
</template>

<script>
import financeList from '../../components/item/financeList.vue';
export default {
	components:{
		financeList
	},
	data() {
		return {};
	}
};
</script>

<style lang="less">
.finance {
	padding: 0 15upx;
}
</style>
