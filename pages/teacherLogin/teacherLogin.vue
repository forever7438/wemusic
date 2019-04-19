<template>
	<view class="teacher_login">
		<view class="teacher_login_image"><image src="../../static/img/open_ico.png"></image></view>
		<view class="teacher_login_acount">
			<text>账号</text>
			<input type="text" v-model="email" />
		</view>
		<view class="teacher_login_pass">
			<text>密码</text>
			<input type="password" v-model="pass" />
		</view>
		<button @click="teacher_login">登录</button>
		<view class="teacher_login_option">
			<navigator url="/pages/addTeacher/addTeacher"><text>教师入驻</text></navigator>
			<text>忘记密码</text>
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
	methods: {
		//登录
		teacher_login() {
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
					role: 'teacher'
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
							uni.switchTab({
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
	font-size: 24upx;
	width: 100%;
	text-align: center;
}
.teacher_login {
	padding: 0 144upx;

	.teacher_login_image {
		margin: 164upx 190upx;
		text-align: center;

		image {
			width: 102upx;
			height: 102upx;
		}
	}

	.teacher_login_acount {
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

	.teacher_login_pass {
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

		input {
			padding-left: 10upx;
			border-bottom: 2upx solid #000;
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

	.teacher_login_option {
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

	.teacher_login_third {
		margin: 40upx 0;
		width: auto;
		text-align: center;
		font-size: 24upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
	}

	.teacher_login_party {
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
