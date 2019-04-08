<template>
	<view class="contents">
		<navigator :url="'/pages/friendsDetail/friendsDetail?listId=' + listId">
			<text>{{ content }}</text>
		</navigator>
	</view>
</template>

<script>
export default {
	props: {
		content: String,
		listId: String
	}
};
</script>

<style lang="less">
.contents {
	text {
		font-size: 32upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
	}
}
</style>
