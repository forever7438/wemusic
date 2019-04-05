<template>
	<view class="register">
		<view class="register_image">
			<image src="../../static/img/open_ico.png"></image>
		</view>
		<view class="register_acount">
			<text>账号</text>
			<input type="text" />
		</view>
		<view class="register_pass">
			<text>密码</text>
			<input type="password" />
		</view>
		<view class="register_code">
			<text>验证码</text>
			<input type="number" />
			<text class="get_code">获取验证码</text>
		</view>
		<button @click="register">注册</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			//登录
			register() {
				uni.switchTab({
					url: "/pages/tabbar/tabbar-1/tabbar-1"
				})
			}
		}
	}
</script>

<style lang="less">
	.register {
		padding: 0 144upx;

		.register_image {
			margin: 164upx 190upx;
			text-align: center;

			image {
				width: 102upx;
				height: 102upx;
			}

		}

		.register_acount {
			display: flex;
			align-items: center;
			margin-bottom: 30upx;

			text {
				width: 100upx;
				height: 44upx;
				font-size: 32upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
			}

			input {
				padding-left: 10upx;
				border-bottom: 2upx solid #000;
			}
		}

		.register_pass {
			display: flex;
			align-items: center;
			margin-bottom: 30upx;

			text {
				width: 100upx;
				height: 44upx;
				font-size: 32upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
			}

			input {
				padding-left: 10upx;
				border-bottom: 2upx solid #000;
			}
		}

		.register_code {
			display: flex;
			align-items: center;
			margin-bottom: 100upx;

			text {
				width: 190upx;
				height: 44upx;
				font-size: 32upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
			}

			input {
				width: 370upx;
				padding-left: 10upx;
				border-bottom: 2upx solid #000;
			}

			.get_code {
				width: 320upx;
				border: 1px solid #000;
				border-radius: 8upx;
				padding: 2upx;
			}
		}

		button {
			width: auto;
			line-height: 88upx;
			background: rgba(250, 212, 42, 1);
			border-radius: 12upx;
			font-size: 32upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}
	}
</style>
