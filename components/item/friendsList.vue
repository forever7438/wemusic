<template>
	<view class="friend_list">
		<view class="fridend_content" v-for="(item, index) in friendsList" :key="index">
			<friendHead :itemHead="item"></friendHead>
			<friendContent :type="true" :content="item.body" :listId="item.id"></friendContent>
			<view class="img_lists" v-if="Array.isArray(item.video)" @tap="previewImage(item.video)">
				<image class="image" :src="val || userImage" v-for="(val, index) in item.video" :key="index" @tap="getIndex(index)"></image>
			</view>
			<view class="img_lists" v-else><video class="video" id="video" :src="item.video" controls></video></view>
			<friendOperation
				:message="item.message_num"
				:is_forward="item.is_forward"
				:is_praise="item.is_praise"
				:praise="item.praise_num"
				:forward="item.forward_num"
				:listId="item.id"
				:index="index"
				@refreshData="getFriendList"
				@changeStatus="changeStatus"
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
			userImage: '../../static/img/lf.jpg',
			number: ''
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
		},
		changeStatus(data) {
			this.$emit('forward_praise', data);
		},
		getIndex(index) {
			this.number = index;
		},
		previewImage(video) {
			if (Array.isArray(video)) {
				uni.previewImage({
					current: video[this.number],
					indicator: 'number',
					loop: 'true',
					urls: video
				});
			}
		}
	}
};
</script>

<style lang="less">
.friend_list {
	.fridend_content {
		margin-bottom: 20upx;

		.img_lists {
			.image {
				width: 210upx;
				height: 210upx;
				margin: 0 20upx 20upx 0;
				border-radius: 12upx;
			}

			.video {
				width: 100%;
			}
		}
	}
}
</style>
