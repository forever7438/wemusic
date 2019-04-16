<template>
	<view class="list">
		<view class="" v-for="(item, index) in friendsList" :key="index">
			<friendHead :itemHead="item"></friendHead>
			<friendContent :content="item.body" :listId="item.id"></friendContent>
			<image :src="item.video || userImage"></image>
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
		return {
			userImage: '../../static/img/lf.jpg'
		};
	}
};
</script>

<style lang="less">
.list {
	view {
		margin-bottom: 20upx;
		image {
			width: 100%;
			height: 410upx;
			border-radius: 12upx;
		}
	}
}
</style>
