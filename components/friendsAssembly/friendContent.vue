<template>
	<view class="contents">
		<navigator v-if="type" :url="'/pages/friendsDetail/friendsDetail?listId=' + listId">
			<text>{{ content }}</text>
		</navigator>
		<text v-else>{{ content }}</text>
	</view>
</template>

<script>
export default {
	props: {
		content: String,
		listId: String,
		type: Boolean
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
