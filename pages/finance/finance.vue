<template>
	<view class="finance">
		<financeList></financeList>
		<w-picker mode="dates" :defaultVal="[0, 1, 0]" startYear="2014" @confirm="onConfirm" ref="picker"></w-picker>
	</view>
</template>

<script>
	import financeList from '../../components/item/financeList.vue';
	import wPicker from '@/components/w-picker/w-picker.vue';
	export default {
		components: {
			financeList,
			wPicker
		},
		data() {
			return {};
		},
		onNavigationBarButtonTap(obj) {
			this.toggleTab();
		},
		methods: {
			toggleTab() {
				this.$refs.picker.show();
			},
			onConfirm(val) {
				console.log(val);
			}
		}
	};
</script>

<style lang="less">
	.finance {
		// padding: 0 30upx;
	}
</style>
