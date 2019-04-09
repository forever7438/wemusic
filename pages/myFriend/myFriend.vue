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
			friendsList: [],
			isEnd: false,
			index: 1
		};
	},
	onNavigationBarButtonTap(obj) {
		uni.navigateTo({
			url: '/pages/releaseFriends/releaseFriends'
		});
	},
	onLoad() {
		this.getFriendList(this.index);
	},
	onReachBottom() {
		if (this.isEnd) {
			return;
		}
		this.index++;
		setTimeout(() => {
			this.getFriendList(this.index);
		}, 300);
	},
	methods: {
		//获取朋友圈列表
		getFriendList(val) {
			this.ajax({
				url: 'friend/list',
				data: {
					val: 5,
					list: val
				},
				success: res => {
					if (res.data.body === 'success') {
						if (res.data.data.length === 0) {
							this.isEnd = true;
							uni.showToast({
								title: '没有更多数据了',
								icon: 'none'
							});
							return;
						}
						this.friendsList = this.friendsList.concat(res.data.data);
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
