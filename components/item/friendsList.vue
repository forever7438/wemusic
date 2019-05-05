<template>
	<view class="friend_list">
		<view class="fridend_content" v-for="(item, index) in friendsList" :key="index">
			<friendHead :itemHead="item"></friendHead>
			<friendContent :type="true" :content="item.body" :listId="item.id"></friendContent>
			<image :src="item.video || userImage"></image>
			<friendOperation
				:message="item.message_num"
				:is_forward="item.is_forward"
				:is_praise="item.is_praise"
				:praise="item.praise_num"
				:forward="item.forward_num"
				:listId="item.id"
				@refreshData="getFriendList"
			></friendOperation>
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
	},
	methods: {
		//获取朋友圈列表
		getFriendList() {
			getCurrentPages().map(res => {
				if (res.route == 'pages/circleFriends/circleFriends' || res.route == 'pages/myFriend/myFriend') {
					res.getFriendList(0);
				}
			});
		}
	}
};
</script>

<style lang="less">
.friend_list {
	.fridend_content {
		margin-bottom: 20upx;

		image {
			width: 100%;
			height: 410upx;
			border-radius: 12upx;
		}
	}
}
</style>
