<template>
	<div class="change_phone">
		<ul>
			<li>
				<span>手机号</span>
				<input type="text" placeholder="请输入手机号" v-model="new_email" maxlength="11" />
			</li>
			<li>
				<span>验证码</span>
				<input type="number" placeholder="请输入验证码" v-model="code" maxlength="6" />
				<span class="btn_code" @tap="getCode">获取验证码</span>
			</li>
		</ul>
		<s>绑定手机号后，您可以使用手机号或邮箱登录</s>
		<span class="btn" @click="updatePhone">确&nbsp;&nbsp;定</span>
	</div>
</template>

<script>
export default {
	data() {
		return {
			code: '',
			new_email: '',
			reg: /^[1][3,4,5,7,8][0-9]{9}$/
		};
	},
	// onLoad() {
	// 	console.log(getCurrentPages());
	// },
	methods: {
		//获取手机验证码
		getCode() {
			if (!this.new_email) {
				uni.showToast({
					title: '请输入手机号',
					icon: 'none'
				});
				return;
			}
			if (!this.reg.test(this.new_email)) {
				uni.showToast({
					title: '手机号格式不正确',
					icon: 'none'
				});
				return;
			}
			this.ajax({
				url: 'index/email_code',
				data: {
					phone: this.new_email
				},
				success: res => {
					if (res.data.body === 'success') {
						uni.showToast({
							title: '验证码已发送至您的手机,请注意查收!',
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
		},
		//修改手机号
		updatePhone() {
			if (!this.new_email) {
				uni.showToast({
					title: '请输入手机号',
					icon: 'none'
				});
				return;
			}
			if (!this.reg.test(this.new_email)) {
				uni.showToast({
					title: '手机号格式不正确',
					icon: 'none'
				});
				return;
			}
			if (!this.code) {
				uni.showToast({
					title: '请输入验证码',
					icon: 'none'
				});
				return;
			}
			this.ajax({
				url: uni.getStorageSync('type') == 1 ? 'user/set_phone' : 'teacherclass/set_phone',
				data: {
					phone: this.new_email,
					code: this.code
				},
				success: res => {
					if (res.data.body === 'success') {
						uni.showToast({
							title: '手机号修改成功',
							icon: 'none'
						});
						uni.navigateTo({
							url: uni.getStorageSync('type') == 1 ? '/pages/login/login' : '/pages/teacherLogin/teacherLogin'
						});
						uni.clearStorage();
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
input {
	font-size: 24upx;
}
.change_phone {
	padding: 0 30upx;
	ul {
		margin-bottom: 40upx;
		padding-left: 0;
		li {
			display: flex;
			align-items: center;
			border-bottom: 2upx solid #ddd;
			padding: 30upx 0;
			.btn_code {
				text-align: center;
				width: 204upx;
				background-color: #fad42a;
				font-size: 28upx;
				font-weight: 600;
				padding: 8upx;
				color: #fff;
				border-radius: 8upx;
			}
			span {
				display: inline-block;
				width: 200upx;
				font-size: 32upx;
				font-weight: 600;
			}
			input {
				border: none;
				margin-bottom: 0;
			}
		}
	}
	s {
		text-decoration: none;
		display: inline-block;
		font-size: 32upx;
		color: #aeaeae;
		text-align: left;
	}
	.btn {
		margin-top: 100upx;
		height: 80upx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 8upx;
		border: 2upx solid #ddd;
		font-size: 28upx;
		font-family: PingFangSC-Regular;
		font-weight: 600;
		color: rgba(51, 51, 51, 1);
	}
}
</style>
