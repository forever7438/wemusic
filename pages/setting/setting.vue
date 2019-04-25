<template>
	<div class="setting_content">
		<ul>
			<li @click="goPath('/pages/updatePass/updatePass')">
				<span>修改密码</span>
				<uni-icon type="forward" size="20"></uni-icon>
			</li>
			<li @click="goPath('/pages/updateEmial/updateEmial')">
				<span>修改邮箱</span>
				<uni-icon type="forward" size="20"></uni-icon>
			</li>
			<li @click="goPath('/pages/updatePhone/updatePhone')">
				<span>修改手机号</span>
				<uni-icon type="forward" size="20"></uni-icon>
			</li>
		</ul>
		<span class="login_out" @click="goPath('/pages/login/login')">退出登录</span>
	</div>
</template>

<script>
import uniIcon from '../../components/uni-icon/uni-icon.vue';
export default {
	components: {
		uniIcon
	},
	data() {
		return {};
	},
	methods: {
		//跳转
		goPath(val) {
			if (val === '/pages/login/login') {
				//退出登录,移除token  type
				uni.clearStorage();
			}
			uni.navigateTo({
				url: val
			});
		}
	}
};
</script>

<style lang="less">
.setting_content {
	padding: 0 30upx;

	ul {
		display: flex;
		align-items: center;
		flex-direction: column;
		padding-left: 0;

		li {
			width: 100%;
			height: 104upx;
			background: rgba(255, 255, 255, 1);
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 32upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			border-bottom: 2upx solid #ddd;

			&:last-of-type {
				border-bottom: none;
			}
		}
	}

	.login_out {
		text-align: center;
		margin-top: 40upx;
		display: inline-block;
		width: 100%;
		line-height: 80upx;
		border-radius: 12upx;
		border: 2upx solid rgba(153, 153, 153, 1);
		font-size: 32upx;
		font-family: PingFangSC-Regular;
	}
}
</style>
