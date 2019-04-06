<template>
	<div class="pay_content">
		<ul class="pay_type">
			<li>
				<label>
					<s class="WeChat_pay"></s>
					<radio value="r1" />
					微信付款
				</label>
			</li>
			<li>
				<label>
					<s class="balance_pay"></s>
					<radio value="r2" />
					余额付款
				</label>
			</li>
			<li>
				<label>
					<s class="card_pay"></s>
					<radio value="r3" />
					便捷支付
				</label>
			</li>
		</ul>
		<div class="card_message">
			<h4>填写信用卡信息</h4>
			<ul>
				<li>
					<span>信用卡号</span>
					<input type="number" placeholder="输入信用卡号" />
				</li>
				<li>
					<span>信用卡到期时间</span>
					<!-- <input type="text" placeholder="输入信用卡到期时间" /> -->
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{ date }}</view>
					</picker>
				</li>
				<li>
					<span>后三位标识码</span>
					<input type="number" placeholder="输入后三位标识码" />
				</li>
			</ul>
		</div>

		<navigator url="/pages/paySuccess/paySuccess">充值成功</navigator>
		<span class="sign_up">立即支付</span>
	</div>
</template>

<script>
	function getDate(type) {
		const date = new Date();

		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();

		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;
		day = day > 9 ? day : '0' + day;

		return `${year}-${month}-${day}`;
	}
	export default {
		components: {},
		data() {
			return {
				date: getDate({
					format: true
				}),
				startDate: getDate('start'),
				endDate: getDate('end')
			};
		},
		methods: {
			bindDateChange: function(e) {
				this.date = e.target.value;
			}
		}
	};
</script>

<style lang="less">
	.pay_content {
		margin-top: 80upx;

		.pay_type {
			li {
				margin: 50upx 40upx 0;

				label {
					display: flex;
					align-items: center;
					font-size: 32upx;
					font-family: PingFangSC-Regular;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
					margin: 0 28%;

					s {
						display: inline-block;
						width: 44upx;
						height: 44upx;
						margin-right: 40upx;
					}

					.WeChat_pay {
						background: url('../../static/img/weixinpay@2x.png') no-repeat center/100%;
					}

					.balance_pay {
						background: url('../../static/img/yue@2x.png') no-repeat center/100%;
					}

					.card_pay {
						background: url('../../static/img/card@2x.png') no-repeat center/100%;
					}
				}
			}
		}

		.card_message {
			margin-top: 200upx;

			h4 {
				text-align: left;
				margin-left: 35upx;
				margin-bottom: 20upx;
			}

			ul {
				border-radius: 8upx;
				background: rgba(78, 78, 78, 1);
				box-shadow: 0upx 8upx 10upx 0upx rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.12);
				margin: 0 30upx;
				padding: 20upx;

				li {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin: 20upx 0;
					font-family: PingFangSC-Regular;
					font-weight: 500;
					color: rgba(255, 255, 255, 1);

					span {
						font-size: 32upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(255, 255, 255, 1);
					}

					input {
						width: 380upx;
						font-size: 24upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(255, 255, 255, 1);
					}

					uni-picker {
						width: 380upx;
						font-size: 24upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(255, 255, 255, 1);
					}
				}
			}
		}

		.sign_up {
			text-align: center;
			position: absolute;
			bottom: 0;
			display: inline-block;
			width: 100%;
			line-height: 100upx;
			background: rgba(250, 212, 42, 1);
			font-size: 28upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}
	}
</style>
