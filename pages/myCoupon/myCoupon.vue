<template>
	<view>
		<view class="meun_list">
			<text :class="type == 0 ? 'active' : ''" @click="type='0'">满减券</text>
			<text :class="type == 1 ? 'active' : ''" @click="type='1'">折扣券</text>
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
		return {
			couponList: [],
			type:0
		};
	},
	onLoad(obj) {
		this.type = obj.type
		this.getCouponList();
	},
	methods: {
		//获取优惠卷列表
		getCouponList(type) {
			this.ajax({
				url: 'studentclass/coupom_list',
				data: {
					type: this.type,
					list: 1,
					val: 5
				},
				success: res => {
					console.log(res);
				},
				error:(res)=>{
					console.log(res)
				}
			});
		}
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
