<template>
	<view class="content_head">
		<image :src="itemHead.people_photo || imageUrl"></image>
		<view class="user_info">
			<text>{{ itemHead.people_name }}</text>
			<text>{{ itemHead.add_time }}</text>
		</view>
	</view>
</template>

<script>
import { sysTime } from '../../common/common.js';
export default {
	props: {
		itemHead: Object
	},
	data() {
		return {
			imageUrl: '../../static/img/lf.jpg',
			add_time: ''
		};
	},
};
</script>

<style lang="less">
.content_head {
	display: flex;
	align-items: center;
	image {
		width: 100upx;
		height: 100upx;
		border: 2upx solid #ddd;
		border-radius: 50%;
	}
	.user_info {
		display: flex;
		flex-direction: column;
		margin-left: 20upx;
		text {
			&:nth-of-type(1) {
				font-size: 32upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
			&:nth-of-type(2) {
				font-size: 24upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(153, 153, 153, 1);
			}
		}
	}
}
</style>
