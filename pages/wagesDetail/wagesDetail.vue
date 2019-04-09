<template>
	<view class="wages_detail">
		<view class="wages_detail_in">
			<view class="wages_date">
				<text>Invoice Date</text>
				<text>31 Dec 2018</text>
				<text>Reference</text>
				<text>PL1901</text>
			</view>
			<view class="wages_number">
				<text>Invoice Number</text>
				<text>INV-3122</text>
				<text>ABN</text>
				<text>19 615 624 103</text>
			</view>
		</view>

		<view class="wages_text">
			<text>JZ Centre Stage Pty Ltd Shop 5G, 427 Docklands Drive</text>
			<text>Docklands Waterfront City Melbourne</text>
			<text>Tel: (03) 9042 0394</text>
		</view>
		<view class="wages_table">
			<view class="wages_title">
				<text>日期</text>
				<text>时间</text>
				<text>时长</text>
				<text>单价</text>
				<text>总金额</text>
			</view>
			<view v-for="(item, index) in 10" :key="index" class="wages_item">
				<text>25/05/2019</text>
				<text>10:30-12:00</text>
				<text>1.5</text>
				<text>50</text>
				<text>75</text>
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
.wages_detail {
	.wages_detail_in {
		padding: 0 15upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.wages_date,
		.wages_number {
			display: flex;
			align-items: initial;
			flex-direction: column;
			text {
				font-size: 28upx;
				font-family: PingFangSC-Medium;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
				&:nth-of-type(2n-1) {
					margin-top: 30upx;
					font-weight: 500;
				}
				&:nth-of-type(2n) {
					margin-top: 10upx;
				}
			}
		}
	}
	.wages_text {
		padding: 0 15upx;
		display: flex;
		flex-direction: column;
		font-size: 24upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		text {
			margin: 10upx 0;
		}
	}
	.wages_table {
		padding: 0 15upx;
		border-top: 4upx solid #000;
		border-bottom: 4upx solid #000;
		margin-top: 50upx;
		.wages_title,
		.wages_item {
			display: flex;
			align-items: center;
			color: rgba(51, 51, 51, 1);
			text {
				flex: 1;
				text-align: center;
			}
		}
		.wages_title {
			font-size: 28upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			border-bottom: 2upx solid #ddd;
			padding: 20upx 0;
		}
		.wages_item {
			font-size: 24upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			text {
				padding: 10upx 0;
			}
		}
	}
}
</style>
