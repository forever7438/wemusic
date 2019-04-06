<template>
	<div class="change_password">
		<ul>
			<li>
				<span>原密码</span>
				<input type="password" placeholder="请输入原密码" v-model="pass" />
			</li>
			<li>
				<span>新密码</span>
				<input type="password" placeholder="请输入新密码" v-model="new_pass" />
			</li>
			<li>
				<span>新密码</span>
				<input type="password" placeholder="请再次输入新密码" v-model="rest_pass" />
			</li>
		</ul>
		<span class="btn" @click="updatePassword">确&nbsp;&nbsp;定</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pass: '',
				new_pass: '',
				rest_pass: ''
			};
		},
		methods: {
			//修改密码
			updatePassword() {
				if (!this.pass) {
					uni.showToast({
						title: "请输入原密码"
					})
					return
				}
				if (!this.new_pass) {
					uni.showToast({
						title: "请输入新密码"
					})
					return
				}
				
			}
		}
	};
</script>

<style lang="less">
	.change_password {
		padding: 0 15upx;

		ul {
			padding-left: 0;

			li {
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 2upx solid #ddd;
				padding: 20upx 0;

				span {
					display: inline-block;
					width: 200upx;
					font-size: 32upx;
					font-weight: 600;
				}

				input {
					width: 100%;
					border: none;
					margin-bottom: 0;
				}
			}
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
