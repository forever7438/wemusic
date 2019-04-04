<template>
	<view class="content">
		<video src="../../static/cont-1531578-13707370_adpkg-ad_sd.mp4" controls></video>
		<friendHead></friendHead>
		<friendContent></friendContent>
		<friendOperation></friendOperation>
		<comment></comment>
	</view>
</template>

<script>
import friendHead from '../../components/friendsAssembly/friendHead.vue';
import friendContent from '../../components/friendsAssembly/friendContent.vue';
import friendOperation from '../../components/friendsAssembly/friendOperation.vue';
import comment from '../../components/comment/comment.vue';
export default {
	components: {
		friendHead,
		friendContent,
		friendOperation,
		comment
	},
	data() {
		return {};
	}
};
</script>

<style lang="less">
.content {
	padding: 0 15upx;
	video {
		width: 100%;
		height: 410upx;
		border-radius: 12upx;
	}
}
</style>
