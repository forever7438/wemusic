<template>
	<view>
		<view class="meun_list">
			<text class="active">满减券</text>
			<text>折扣券</text>
		</view>
		<couponList></couponList>
	</view>
</template>

<script>
	import couponList from '../../components/item/couponList.vue';
	export default {
		components: {
			couponList
		},
		data() {
			return {};
		}
	};
</script>

<style lang="less">
	view {
		.meun_list {
			height: 90upx;
			display: flex;
			align-items: center;
			justify-content: space-around;

			text {
				font-size: 28upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
			.active {
				border-bottom: 6upx solid #000;
			}
		}
	}
</style>
