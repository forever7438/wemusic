<template>
	<view>
		<view class="meun_list">
			<text :class="type == 0 ? 'active' : ''" @click="getCouponList('0')">满减券</text>
			<text :class="type == 1 ? 'active' : ''" @click="getCouponList('1')">折扣券</text>
		</view>
		<couponList v-if="couponList.length" :coupomList="couponList"></couponList>
		<noContent v-else title="暂无记录"></noContent>
	</view>
</template>

<script>
import couponList from '../../components/item/couponList.vue';
import noContent from '../../components/noContent.vue';
export default {
	components: {
		couponList,
		noContent
	},
	data() {
		return {
			isEnd: false,
			couponList: [],
			type: 0,
			index: 0
		};
	},
	onLoad(obj) {
		this.type = obj.type;
		this.getCouponList(this.type);
	},
	onReachBottom() {
		if (this.isEnd) {
			return;
		}
		this.index++;
		setTimeout(() => {
			this.getCouponList(this.type);
		}, 300);
	},
	onPullDownRefresh() {
		this.index = 0;
		this.getCouponList(this.type);
	},
	methods: {
		//获取优惠卷列表
		getCouponList(type) {
			this.couponList = [];
			this.type = type;
			this.ajax({
				url: 'studentclass/coupom_list',
				data: {
					type: type,
					list: this.index,
					val: 5
				},
				success: res => {
					uni.stopPullDownRefresh();
					if (res.data.body === 'success') {
						if (res.data.data.length === 0) {
							this.isEnd = true;
							uni.showToast({
								title: '没有更多数据了',
								icon: 'none'
							});
							return;
						}
						if (this.index !== 0) {
							this.couponList = this.couponList.concat(res.data.data);
						} else {
							this.couponList = res.data.data;
						}
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
			padding-bottom: 20upx;
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
