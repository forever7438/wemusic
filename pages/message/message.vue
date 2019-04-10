<template>
	<div class="messgae_content"><message-list></message-list></div>
</template>

<script>
import messageList from '../../components/item/messageList.vue';
export default {
	components: {
		messageList
	},
	data() {
		return {};
	}
};
</script>

<style lang="less">
.messgae_content {
	// padding: 0 15upx;
}
</style>
