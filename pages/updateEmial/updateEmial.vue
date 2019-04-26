<template>
	<div class="change_emial">
		<ul>
			<li>
				<span>新邮箱</span>
				<input type="text" placeholder="请输入新邮箱" v-model="new_email" />
			</li>
			<li>
				<span>验证码</span>
				<input type="number" placeholder="请输入验证码" v-model="code" maxlength="6" />
				<span class="btn_code" @tap="getCode">获取验证码</span>
			</li>
		</ul>
		<s>修改邮箱后,您可以使用新的邮箱登录,修改后,原邮箱不可使用</s>
		<span class="btn" @click="updateEmial">确&nbsp;&nbsp;定</span>
	</div>
</template>

<script>
export default {
	data() {
		return {
			code: '',
			new_email: '',
			reg: new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$')
		};
	},
	onShow() {
		if (uni.getStorageSync('langType') == 'en-US') {
			uni.setNavigationBarTitle({
				title: 'Change Emial'
			});
		} else {
			uni.setNavigationBarTitle({
				title: '修改邮箱'
			});
		}
	},
	methods: {
		//获取验证码
		getCode() {
			if (!this.new_email) {
				uni.showToast({
					title: '请填写邮箱',
					icon: 'none'
				});
				return;
			}
			if (!this.reg.test(this.new_email)) {
				uni.showToast({
					title: '邮箱格式不正确',
					icon: 'none'
				});
				return;
			}
			this.ajax({
				url: 'index/email_code',
				data: {
					email: this.new_email
				},
				success: res => {
					if (res.data.body === 'success') {
						uni.showToast({
							title: '验证码已发送至邮箱,请注意查收!',
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
		//修改邮箱
		updateEmial() {
			if (!this.new_email) {
				uni.showToast({
					title: '请填写邮箱',
					icon: 'none'
				});
				return;
			}
			if (!this.reg.test(this.new_email)) {
				uni.showToast({
					title: '邮箱格式不正确',
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
				url: uni.getStorageSync('type') == 1 ? 'user/update_email' : 'teacherclass/update_email',
				data: {
					new_email: this.new_email,
					code: this.code
				},
				success: res => {
					if (res.data.body === 'success') {
						uni.showToast({
							title: '邮箱修改成功',
							icon: 'none'
						});
					} else {
						uni.showTabBar({
							title: '邮箱修改失败',
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
.change_emial {
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
