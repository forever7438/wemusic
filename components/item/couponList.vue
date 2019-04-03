<template>
	<view class="coupon_list">
		<view v-for="(item, index) in 6" :key="index">
			<div class="coupon_parise">￥ 45</div>
			<div class="coupon_message">
				<p class="coupon_title">满￥500减￥45</p>
				<p class="coupon_date">2018.11.11至2018.11.30有效</p>
			</div>
			<div class="coupon_use"><span>立即使用</span></div>
		</view>
	</view>
</template>

<script></script>

<style lang="less">
.coupon_list {
	view {
		width: 100%;
		height: 200upx;
		margin-bottom: 10upx;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		background: url('../../static/img/url@2x.png') no-repeat center/100%;
		.coupon_parise {
			margin-left: -30upx;
			font-size: 46upx;
			font-family: PingFangSC-Semibold;
			font-weight: 600;
			color: rgba(128, 97, 30, 1);
		}
		.coupon_message {
			.coupon_title {
				font-size: 32upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(128, 97, 30, 1);
				margin-bottom: 10upx;
			}
			.coupon_date {
				font-size: 24upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(176, 136, 47, 1);
				-webkit-background-clip: text;
			}
		}
		.coupon_use {
			span {
				padding: 10upx;
				background: rgba(255, 255, 255, 1);
				border-radius: 10upx;
				font-size: 24upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(119, 91, 31, 1);
			}
		}
	}
}
</style>
