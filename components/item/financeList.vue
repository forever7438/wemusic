<template>
	<view class="finance_list">
		<text class="finance_year">2019年</text>
		<view class="finance_content">
			<text class="finance_time">2019.01-2019.02</text>
			<view class="finance_money">
				<text>$2000.00</text>
				<text>金额</text>
			</view>
		</view>
		<view class="finance_option">
			<view class="total_class">
				<text>30</text>
				<text style="margin-right: 60upx;">总课时</text>
			</view>
			<view class="total_student">
				<text>5</text>
				<text>学生数</text>
			</view>
			<button>申请</button>
		</view>
	</view>
</template>

<script></script>

<style lang="less">
.finance_list {
	.finance_year {
		display: inline-block;
		margin: 20upx 0;
		font-size: 48upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
	.finance_content {
		display: flex;
		align-items: end;
		flex-direction: column;
		.finance_time {
			font-size: 24upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
		}
		.finance_money {
			margin: 20upx 0;
			display: flex;
			align-items: center;
			text {
				&:nth-of-type(1) {
					margin-right: 30upx;
					font-size: 48upx;
					font-family: DINAlternate-Bold;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
				}

				&:nth-of-type(2) {
					font-size: 24upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(51, 51, 51, 1);
				}
			}
		}
	}
	.finance_option {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.total_class,
		.total_student {
			display: flex;
			align-items: center;
			text {
				&:nth-of-type(1) {
					margin-right: 30upx;
					font-size: 48upx;
					font-family: DINAlternate-Bold;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
				}
				&:nth-of-type(2) {
					font-size: 24upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(51, 51, 51, 1);
				}
			}
		}
		button {
			width: 128upx;
			line-height: 44upx;
			margin-right: 0;
			font-size: 28upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			background: rgba(250, 212, 42, 1);
			border-radius: 6upx;
		}
	}
}
</style>
