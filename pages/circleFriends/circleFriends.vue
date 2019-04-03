<template>
	<view class="fridend_content">
		<navigator url="/pages/myFriend/myFriend">
			<view class="toMyFriend">
				<text>我的朋友圈</text>
				<image src="../../static/img/arrow.png"></image>
			</view>
		</navigator>
		<friendsList></friendsList>
	</view>
</template>

<script>
import friendsList from '../../components/item/friendsList.vue';
export default {
	components: {
		friendsList
	},
	data() {
		return {};
	}
};
</script>

<style lang="less">
.fridend_content {
	padding: 0 15upx;
	.toMyFriend {
		height: 104upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 2upx solid #ddd;
		margin-bottom: 20upx;
		text {
			font-size: 32upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}
		image {
			width: 20upx;
			height: 20upx;
		}
	}
}
</style>
