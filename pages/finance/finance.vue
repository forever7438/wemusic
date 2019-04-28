<template>
	<view class="finance">
		<financeList :financeList="financeList"></financeList>
		<w-picker mode="dates" title="选择年份" :defaultVal="[0, 1, 0]" startYear="2014" @confirm="onConfirm" ref="picker"></w-picker>
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
		return {
			time: '',
			index: 0,
			isEnd: false,
			financeList: []
		};
	},
	onNavigationBarButtonTap(obj) {
		this.toggleTab();
	},
	onLoad() {
		this.time = new Date().getFullYear();
		this.getFinanceList();
	},
	onShow() {
		if (uni.getStorageSync('langType') == 'en-US') {
			uni.setNavigationBarTitle({
				title: 'Financial Management'
			});
		} else {
			uni.setNavigationBarTitle({
				title: '财务管理'
			});
		}
	},
	onReachBottom() {
		if (this.isEnd) {
			return;
		}
		this.index++;
		setTimeout(() => {
			this.getFinanceList();
		}, 300);
	},
	onPullDownRefresh() {
		this.index = 0;
		this.getFinanceList();
	},
	methods: {
		toggleTab() {
			this.$refs.picker.show();
		},
		onConfirm(val) {
			this.time = val[0];
			this.getFinanceList();
		},
		//获取财务列表
		getFinanceList() {
			this.ajax({
				url: 'teacherclass/finance',
				data: {
					time: this.time,
					list: this.index,
					val: 5
				},
				success: res => {
					uni.stopPullDownRefresh();
					if (res.data.body === 'success') {
						if (res.data.data.list.length === 0) {
							this.isEnd = true;
							uni.showToast({
								title: '没有更多数据了',
								icon: 'none'
							});
							// return;
						}
						if (this.index !== 0) {
							this.financeList = this.financeList.concat(res.data.data.list);
						} else {
							this.financeList = res.data.data.list;
						}
					}
				}
			});
		}
	}
};
</script>

<style lang="less">
.finance {
	// padding: 0 30upx;
}
</style>
