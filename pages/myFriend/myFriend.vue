<template>
	<view class="fridend_content"><friendsList :friendsList="friendsList"></friendsList></view>
</template>

<script>
import friendsList from '../../components/item/friendsList.vue';
export default {
	components: {
		friendsList
	},
	data() {
		return {
			friendsList: []
		};
	},
	onNavigationBarButtonTap(obj) {
		uni.navigateTo({
			url: '/pages/releaseFriends/releaseFriends'
		});
	},
	onLoad() {
		this.getFriendList();
	},
	methods: {
		//获取朋友圈列表
		getFriendList() {
			this.ajax({
				url: 'friend/list',
				data: {
					val: 5,
					list: 1
				},
				success: res => {
					if (res.data.body === 'success') {
						this.friendsList = res.data.data;
					}
				}
			});
		}
	}
};
</script>

<style lang="less">
.fridend_content {
	padding: 0 15upx;
}
</style>
