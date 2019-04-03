<template>
	<view class="list">
		<view class="" v-for="(item, index) in 12" :key="index">
			<friendHead></friendHead>
			<friendContent></friendContent>
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
	data() {
		return {};
	}
};
</script>

<style lang="less">
.list {
	view {
		margin-bottom: 20upx;
	}
}
</style>
