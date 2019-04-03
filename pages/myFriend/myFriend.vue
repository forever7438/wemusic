<template>
	<view class="fridend_content">
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
}
</style>
