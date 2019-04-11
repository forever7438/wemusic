<template>
	<view class="register">
		<view class="register_image"><image src="../../static/img/open_ico.png"></image></view>
		<view class="register_acount">
			<text>账号</text>
			<input type="text" 
				   placeholder="请输入您的邮箱"
				   v-model="email" 
				   maxlength="30"/>
		</view>
		<view class="register_pass">
			<text>密码</text>
			<input type="password" 
				   placeholder="不超过16个字符"
				   v-model="pass" 
				   maxlength="16"/>
		</view>
		<view class="register_code">
			<text>验证码</text>
			<input type="number" v-model="code" maxlength="6"/>
			<text class="get_code">获取验证码</text>
		</view>
		<button @click="register">注册</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			pass: '',
			code: '',
			reg: new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$')
		};
	},
	methods: {
		//注册
		register() {
			if (!this.email) {
				uni.showToast({
					title: '请填写邮箱',
					icon: 'none'
				});
				return;
			}
			if (!this.reg.test(this.email)) {
				uni.showToast({
					title: '邮箱格式不正确',
					icon: 'none'
				});
				return;
			}
			if (!this.pass) {
				uni.showToast({
					title: '请填写密码',
					icon: 'none'
				});
				return;
			}
			if (!this.code) {
				uni.showToast({
					title: '验证码不得为空',
					icon: 'none'
				});
				return;
			}
			this.ajax({
				url: 'index/registered',
				header: {
					'Content-Type': 'application/json',
					role: 'student'
				},
				data: {
					email: this.email,
					pass: this.pass,
					code: this.code
				},
				success: res => {
					if (res.data.data === 'success') {
						uni.showToast({
							title: '注册成功,快去登录吧！',
							icon: 'none'
						});
						setTimeout(() => {
							uni.navigateTo({
								url: '/pages/login/login'
							});
						}, 1500);
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				}
			});
		}
	}
};
</script>

<style lang="less">
	input{
		font-size: 24upx;
		width: 100%;
		text-align: center;
	}
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
			border-bottom: 2upx solid rgba(185,185,185,1);
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
			border-bottom: 2upx solid rgba(185,185,185,1);
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
			width: 170upx;
			padding-left: 10upx;
			border-bottom: 2upx solid rgba(185,185,185,1);;
		}

		.get_code {
			width: 280upx;
			border: 2upx solid rgba(185,185,185,1);;
			border-radius: 16upx;
			text-align: center;
			height: 60upx;
			display: inline-block;
			padding: 8upx 16upx;
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
