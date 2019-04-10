<template>
	<view class="course_invitation">
		<view class="invitation_content">
			<text>输入邀请码</text>
			<input type="text" />
		</view>
		<text class="tips">当您的好友发起邀请时，您可以在此输入邀请码，与好友共同上课，邀请码有效期为一个小时，请尽快填写。</text>
		<button>确定</button>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="less">
.course_invitation {
	padding: 0 15upx;
	.invitation_content {
		display: flex;
		align-items: flex-end;
		margin-top: 78upx;		margin-bottom: 60upx;
		text {
			font-size: 32upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
		}
		input {
			width: 376upx;
			height: 88upx;
			margin-left: 30upx;
			padding-left: 10upx;
			border: 2upx solid rgba(51, 51, 51, 1);
		}
	}
	.tips {
		font-size: 24upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		line-height: 36upx;
	}
	button {
		margin-top: 120upx;
		background: rgba(250, 212, 42, 1);
		color: rgba(51, 51, 51, 1);
		font-size: 32upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
	}
}
</style>
