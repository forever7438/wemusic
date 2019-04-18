<template>
	<view>
		<view class="meun_list">
			<text :class="type == 0 ? 'active' : ''" @click="type = '0'">满减券</text>
			<text :class="type == 1 ? 'active' : ''" @click="type = '1'">折扣券</text>
		</view>
		<couponList v-if="couponList.length" :coupomList="couponList"></couponList>
		<view class="no_content" v-else>
			<image src="../../static/img/nothing.png"></image>
			<text>暂无记录</text>
		</view>
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
			type: 0
		};
	},
	onLoad(obj) {
		this.type = obj.type;
		this.getCouponList(this.type);
	},
	methods: {
		//获取优惠卷列表
		getCouponList(type) {
			this.ajax({
				url: 'studentclass/coupom_list',
				data: {
					type: type,
					list: 0,
					val: 5
				},
				success: res => {
					if (res.data.body === 'success') {
						this.couponList = res.data.data;
					}
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
	.no_content {
		height: 600upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		image {
			width: 216upx;
			height: 244upx;
		}
		text {
			font-size: 32upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(0, 0, 0, 0.5);
		}
	}
}
</style>
