<template>
	<view class="list">
		<view class="" v-for="(item, index) in friendsList" :key="index">
			<friendHead :itemHead="item"></friendHead>
			<friendContent :content="item.body" :listId='item.id'></friendContent>
			<video src="../../static/cont-1531578-13707370_adpkg-ad_sd.mp4" controls></video>
			<friendOperation></friendOperation>
		</view>
	</view>
</template>

<script>
import friendHead from '../friendsAssembly/friendHead.vue';
import friendContent from '../friendsAssembly/friendContent.vue';
import friendOperation from '../friendsAssembly/friendOperation.vue';
export default {
	components: {
		friendHead,
		friendContent,
		friendOperation
	},
	props: {
		friendsList: Array
	},
	data() {
		return {};
	}
};
</script>

<style lang="less">
.list {
	view {
		margin-bottom: 20upx;
		video {
			width: 100%;
			height: 410upx;
			border-radius: 12upx;
		}
	}
}
</style>
