<template>
	<view class="content">
		<video src="../../static/cont-1531578-13707370_adpkg-ad_sd.mp4" controls></video>
		<friendHead :itemHead="friendDetail"></friendHead>
		<friendContent :content="friendDetail.body"></friendContent>
		<friendOperation :message="friendDetail.message" :praise="friendDetail.praise" :forward="friendDetail.forward"></friendOperation>
		<comment :list="friendDetail.list" :message="friendDetail.message"></comment>
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
					console.log(res);
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
	video {
		width: 100%;
		height: 410upx;
		border-radius: 12upx;
	}
}
</style>
