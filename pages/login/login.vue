<template>
	<view class="login">
		<view class="login_image"><image src="../../static/img/open_ico.png"></image></view>
		<view class="login_acount">
			<text>账号</text>
			<input type="text" v-model="email" />
		</view>
		<view class="login_pass">
			<text>密码</text>
			<input type="password" v-model="pass" />
		</view>
		<button hover-class="btn-hover" @tap="login">登录</button>
		<view class="login_option">
			<navigator hover-class="none" url="/pages/register/register"><text>注册</text></navigator>
			<navigator hover-class="none" url="/pages/forgetPass/forgetPass"><text>忘记密码</text></navigator>
		</view>
		<navigator hover-class="none" url="/pages/teacherLogin/teacherLogin">
			<button hover-class="btn-hover" style="background-color: #fff;border: 2upx solid rgba(102,102,102,1);;">教师端</button>
		</navigator>
		<view class="login_third"><text>第三方快捷登录</text></view>
		<view class="login_party">
			<view class="login_weixin">
				<image src="../../static/img/weixin.png"></image>
				<text>Wechat</text>
			</view>
			<view class="login_facebook">
				<image src="../../static/img/facebook.png"></image>
				<text>Facebook</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			pass: ''
		};
	},
	onLoad() {},
	methods: {
		//登录
		login() {
			if (!this.email) {
				uni.showToast({
					title: '账号不得为空',
					icon: 'none'
				});
				return;
			}
			if (!this.pass) {
				uni.showToast({
					title: '密码不得为空',
					icon: 'none'
				});
				return;
			}
			this.ajax({
				url: 'index/login',
				data: {
					email: this.email,
					pass: this.pass
				},
				header: {
					'Content-Type': 'application/json',
					role: 'student'
				},
				success: res => {
					if (res.data.data === 'success') {
						//登录成功,存储token全局使用
						uni.setStorage({
							key: 'token',
							data: res.data.body.token
						}),
							//存储做类型判断
							uni.setStorage({
								key: 'type',
								data: res.data.type
							}),
							uni.reLaunch({
								url: '/pages/tabbar/tabbar-1/tabbar-1'
							});
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				},
				error: error => {}
			});
		}
	}
};
</script>

<style lang="less">
input {
	text-align: center;
	font-size: 24upx;
	width: 100%;
	padding-left: 10upx;
	border-bottom: 2upx solid rgba(185, 185, 185, 1);
}

.login {
	padding: 0 144upx;

	.login_image {
		margin: 164upx 190upx;
		text-align: center;

		image {
			width: 102upx;
			height: 102upx;
		}
	}

	.login_acount {
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
	}

	.login_pass {
		display: flex;
		align-items: center;
		margin-bottom: 100upx;

		text {
			width: 100upx;
			height: 44upx;
			font-size: 32upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
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

	.login_option {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 30upx 0 50upx;

		text {
			font-size: 32upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
		}
	}

	.login_third {
		margin: 40upx 0;
		width: auto;
		text-align: center;
		font-size: 24upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
	}

	.login_party {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 90upx;

		view {
			display: flex;
			flex-direction: column;
			align-items: center;

			image {
				width: 44upx;
				height: 44upx;
				margin-bottom: 10upx;
			}

			text {
				font-size: 20upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(153, 153, 153, 1);
			}
		}
	}
}
</style>
