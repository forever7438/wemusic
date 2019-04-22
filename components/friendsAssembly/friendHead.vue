<template>
	<view class="content_head">
		<image class="content_images" :src="itemHead.photo || imageUrl"></image>
		<view class="user_info">
			<text>{{ itemHead.people_name }}</text>
			<text>{{ (itemHead.add_time * 1000) | formatDate }}</text>
		</view>
	</view>
</template>

<script>
	import {
		sysTime
	} from '../../common/common.js';
	import {
		dateUtils
	} from '../../common/util.js';
	export default {
		props: {
			itemHead: Object
		},
		data() {
			return {
				imageUrl: '../../static/img/lf.jpg'
			};
		},
		filters: {
			formatDate: add_time => {
				return dateUtils.humanize(add_time);
			}
		}
	};
</script>

<style lang="less">
	.content_head {
		display: flex;
		align-items: center;

		.content_images {
			width: 100upx !important;
			height: 100upx !important;
			border: 2upx solid #ddd !important;
			border-radius: 50% !important;
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
