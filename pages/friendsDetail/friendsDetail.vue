<template>
	<view class="content">
		<image :src="friendDetail.video"></image>
		<friendHead :itemHead="friendDetail"></friendHead>
		<friendContent :content="friendDetail.body"></friendContent>
		<friendOperation :message="friendDetail.message" :praise="friendDetail.praise" :forward="friendDetail.forward"></friendOperation>
		<comment :list="friendDetail.list" :message="friendDetail.message"></comment>
		<submitBtn :friend_id="friendDetail.id"></submitBtn>
	</view>
</template>

<script>
import friendHead from '../../components/friendsAssembly/friendHead.vue';
import friendContent from '../../components/friendsAssembly/friendContent.vue';
import friendOperation from '../../components/friendsAssembly/friendOperation.vue';
import comment from '../../components/comment/comment.vue';
import submitBtn from '../../components/submitBtn.vue';
export default {
	components: {
		friendHead,
		friendContent,
		friendOperation,
		comment,
		submitBtn
	},
	data() {
		return {
			friendDetail: {}
		};
	},
	onLoad(obj) {
		this.getFriendDetail(obj.listId);
	},
	methods: {
		//获取朋友圈详情
		getFriendDetail(listId) {
			this.ajax({
				url: 'friend/info',
				data: {
					friend_id: listId
				},
				success: res => {
					this.friendDetail = res.data.data;
				}
			});
		}
	}
};
</script>

<style lang="less">
.content {
	padding: 0 15upx;
	image {
		width: 100%;
		height: 410upx;
		border-radius: 12upx;
	}
}
</style>
