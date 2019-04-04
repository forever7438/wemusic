<template>
	<view class="my_code">
		<view class="code_option">
			<input type="text" value="DX6KD82A"/>
			<text>复制</text>
		</view>
		<text class="send_btn">发送邀请</text>
		<h4>邀请步骤</h4>
		<view class="code_list">
			<text>1.将邀请码复制发送给你的朋友； </text>
			<text>2.好友前往个人中心-邀请码，填写邀请码后即可查看订单信息。</text>
			<text>3.邀请有效期为1个小时，，如果到期未有人加入课程，课程自动变更为一对一。</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">
	.my_code {
		padding: 0 15upx;

		.code_option {
			margin: 50upx 0;
			display: flex;
			align-items: center;
			justify-content: space-around;

			input {
				width: 426upx;
				height: 88upx;
				padding-left: 20upx;
				border: 2upx solid rgba(51, 51, 51, 1);
				font-size: 48upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}

			text {
				text-align: center;
				width: 234upx;
				line-height: 88upx;
				background: rgba(250, 212, 42, 1);
				border-radius: 12upx;
				font-size: 32upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
		}

		.send_btn {
			margin-bottom: 50upx;
			display: inline-block;
			text-align: center;
			width: 100%;
			line-height: 88upx;
			background: rgba(250, 212, 42, 1);
			border-radius: 12upx;
			font-size: 32upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}

		h4 {
			font-size: 32upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}

		.code_list {
			display: flex;
			flex-direction: column;
			align-items: center;

			text {
				width: 100%;
				height: 34upx;
				margin: 10upx 0;
				font-size: 24upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(102, 102, 102, 1);
			}
		}
	}
</style>
