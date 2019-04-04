<template>
	<div class="vip_center_content">
		<div class="vip_center_message">
			<div class="vip_center_info">
				<p class="vip_name">WeMusic会员</p>
				<div>
					<span>
						<p>账户余额</p>
						<s>2369</s>
					</span>
					<span>
						<p>我的积分</p>
						<s>3695</s>
					</span>
				</div>
			</div>
		</div>
		<div class="vip_recharge">
			<h3>充 值</h3>
			<ul>
				<li v-for="(item, index) in 6" :key="index">
					<p>充</p>
					<p>{{ index * 500 }}</p>
					<p>送 ${{ index * 100 }}</p>
				</li>
			</ul>
			<navigator url="/pages/pay/pay"><span class="vip_recharge_btn">充 值</span></navigator>
		</div>
		<ul class="vip_record">
			<navigator url="/pages/rechargeRecord/rechargeRecord">
				<li>
					<span>充值记录</span>
					<s>></s>
				</li>
			</navigator>
			<navigator url="/pages/consumptionRecord/consumptionRecord">
				<li>
					<span>消费记录</span>
					<s>></s>
				</li>
			</navigator>
		</ul>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			moneyList: []
		};
	},
	methods: {
		//获取充值金钱种类
		async getMoneyList() {
			let res = await money_list();
			if (res.data.body === 'success') {
				this.moneyList = res.data.data;
			}
		}
	}
};
</script>

<style lang="less" scoped>
.vip_center_content {
	padding: 0 15upx;
	.vip_center_message {
		width: 100%;
		height: 300upx;
		background-image: linear-gradient(180deg, #434445ff 50%, #fff 50%);
		.vip_center_info {
			display: flex;
			flex-direction: column;
			text-align: left;
			font-weight: 500;
			padding: 30upx 40upx;
			border-radius: 8upx;
			background: url('../../static/img/vipbg@2x.png') no-repeat center/100%;
			.vip_name {
				font-size: 48upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(255, 230, 190, 1);
				text-shadow: 0upx 2upx 2upx rgba(141, 105, 51, 1);
			}
			div {
				display: flex;
				margin-top: 40upx;
				span {
					&:nth-of-type(1) {
						margin-right: 30upx;
					}
					p {
						font-size: 24upx;
						font-family: PingFangSC-Light;
						font-weight: 300;
						color: rgba(255, 226, 182, 1);
					}
					s {
						font-size: 48upx;
						font-family: DINAlternate-Bold;
						font-weight: 500;
						color: rgba(255, 230, 190, 1);
						text-shadow: 0upx 2upx 2upx rgba(141, 105, 51, 1);
					}
				}
			}
		}
	}
	.vip_recharge {
		margin: 20upx 0;
		// padding: 0 0.3rem;
		h3 {
			font-size: 32upx;
			font-family: PingFangSC-Medium;
			font-weight: 600;
			color: rgba(51, 51, 51, 1);
			margin-bottom: 20upx;
		}
		ul {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			li {
				text-align: center;
				width: 220upx;
				height: 234upx;
				border-radius: 8upx;
				margin-bottom: 8upx;
				background: linear-gradient(135deg, rgba(216, 178, 120, 1) 0%, rgba(164, 129, 75, 1) 100%);
				p {
					color: #fff;
					font-size: 28upx;
					font-weight: 600;
					margin: 30upx 0;
				}
			}
		}
		.vip_recharge_btn {
			display: inline-block;
			width: 100%;
			line-height: 88upx;
			text-align: center;
			background: linear-gradient(135deg, rgba(216, 178, 120, 1) 0%, rgba(164, 129, 75, 1) 100%);
			border-radius: 8upx;
			color: #fff;
			font-size: 34upx;
			font-weight: 400;
		}
	}
	.vip_record {
		// padding: 0 0.3rem;
		width: 100%;

		li {
			width: 100%;
			height: 104upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 32upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			border-top: 2upx solid #ddd;
		}
	}
}
</style>
