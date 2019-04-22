<template>
	<div class="vip_center_content">
		<div class="vip_center_message">
			<div class="vip_center_info">
				<p class="vip_name">WeMusic会员</p>
				<div>
					<span>
						<p>账户余额</p>
						<s>{{ userInfo.money }}</s>
					</span>
					<span>
						<p>我的积分</p>
						<s>{{userInfo.phone}}</s>
					</span>
				</div>
			</div>
		</div>
		<div class="vip_recharge">
			<h3>充 值</h3>
			<ul>
				<li v-for="(item, index) in moneyList" :key="index" @tap="checkId = item.id">
					<p>充</p>
					<p>{{ item.full_money }}</p>
					<p>送 ${{ item.give_money }}</p>
				</li>
			</ul>
			<span class="vip_recharge_btn" @tap="moneyAadd">充 值</span>
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
			userInfo: {},
			moneyList: [],
			checkId: ''
		};
	},
	onLoad() {
		this.getUserInfo();
		this.getMoneyList();
	},
	methods: {
		//获取个人资料
		getUserInfo() {
			this.ajax({
				url: 'user/info',
				success: res => {
					if (res.data.body === 'success') {
						this.userInfo = res.data.data;
					} else {
						uni.showToast({
							title: res.data.msg
						});
					}
				}
			});
		},
		//获取充值金钱种类
		getMoneyList() {
			this.ajax({
				url: 'user/money_list',
				success: res => {
					if (res.data.body === 'success') {
						this.moneyList = res.data.data;
					} else {
						uni.showToast({
							title: res.data.msg
						});
					}
				}
			});
		},
		//充值操作
		moneyAadd() {
			if (!this.checkId) {
				uni.showToast({
					title: '请选择充值金额',
					icon: 'none'
				});
				return;
			}
			this.ajax({
				url: 'studentclass/money_add',
				data: {
					money_id: this.checkId
				},
				success: res => {
					if (res.data.body === 'success') {
						uni.showToast({
							title: '充值成功',
							icon: 'none'
						});
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				}
			});
			// 			uni.navigateTo({
			// 				url: '/pages/pay/pay'
			// 			});
		}
	}
};
</script>

<style lang="less" scoped>
.vip_center_content {
	padding: 0 30upx;

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
			background: url('../../static/img/vipbg@2x.png') no-repeat center/100%;
			border-radius: 8upx;

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
