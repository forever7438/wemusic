<template>
	<view class="adjustment_detail">
		<image src="../../static/img/lesson1.jpg"></image>
		<view class="adjustment_content">
			<text class="adjustment_title">Timothy Thompson</text>
			<view class="adjustment_event">
				<text class="class_title">钢琴兴趣班12期第10课时</text>
				<view class="event_adjust">
					<text>调整</text>
					<text>2019年1月20日 13:30</text>
				</view>
				<view class="event_res">
					<text>理由</text>
					<text>明天下午临时有事。</text>
				</view>
				<view class="event_btn">
					<text>拒绝</text>
					<text>同意</text>
				</view>
				<text class="class_res">理由 课以排满</text>
			</view>
			<view class="adjustment_reason">
				<text class="class_title">钢琴兴趣班12期第10课时</text>
				<view class="event_adjust">
					<text>调整</text>
					<text>2019年1月20日 13:30</text>
				</view>
				<view class="event_res">
					<text>理由</text>
					<text>明天下午临时有事。</text>
				</view>
				<view class="event_btn">
					<text>拒绝</text>
					<text>同意</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="less">
.adjustment_detail {
	padding: 20upx 30upx 0;
	display: flex;
	image {
		width: 90upx;
		height: 90upx;
		border-radius: 50%;
		margin-right: 30upx;
	}
	.adjustment_content {
		.adjustment_title {
			font-size: 32upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}
		.adjustment_event {
			margin-bottom: 20upx;
			.class_res {
				margin-top: 20upx;
				padding: 24upx;
				display: inline-block;
				width: 386upx;
				height: 130upx;
				background: rgba(237, 239, 242, 1);
				font-size: 28upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
			}
		}
		.adjustment_event,
		.adjustment_reason {
			padding: 36upx 30upx;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0upx 8upx 18upx 0upx rgba(163, 165, 168, 0.17);
			border-radius: 16upx;
			.class_title {
				display: inline-block;
				font-size: 32upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				margin-bottom: 20upx;
			}
			.event_adjust,
			.event_res {
				display: flex;
				align-items: center;
				margin-bottom: 20upx;
				text {
					&:nth-of-type(1) {
						font-size: 30upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(153, 153, 153, 1);
						margin-right: 20upx;
					}
					&:nth-of-type(2) {
						font-size: 28upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(51, 51, 51, 1);
					}
				}
			}
			.event_btn {
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 28upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(255, 255, 255, 1);
				text {
					text-align: center;
					width: 126upx;
					line-height: 44upx;
					border-radius: 8upx;
					&:nth-of-type(1) {
						background: rgba(205, 76, 56, 1);
					}
					&:nth-of-type(2) {
						background: rgba(79, 205, 56, 1);
					}
				}
			}
		}
	}
}
</style>
