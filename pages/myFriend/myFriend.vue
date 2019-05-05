<template>
	<view class="fridend_content">
		<friendsList :friendsList="friendsList" @forward_praise="forward_praise"></friendsList>
	</view>
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
				index: 0
			};
		},
		onNavigationBarButtonTap(obj) {
			uni.navigateTo({
				url: '/pages/releaseFriends/releaseFriends'
			});
		},
		onShow() {
			if (uni.getStorageSync('langType') == 'en-US') {
				uni.setNavigationBarTitle({
					title: 'My Friend'
				});
			} else {
				uni.setNavigationBarTitle({
					title: '我的朋友圈'
				});
			}
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
		onPullDownRefresh() {
			this.index = 0;
			this.getFriendList(this.index);
		},
		methods: {
			forward_praise(data){
				console.log(this.friendsList[data.index])
				if(data.key == 'is_forward'){
					if(this.friendsList[data.index].is_forward == 1){
						this.friendsList[data.index].is_forward = 0;
						this.friendsList[data.index].forward_num --
					}else{
						this.friendsList[data.index].is_forward = 1;
						this.friendsList[data.index].forward_num ++
					}
				}else{
					if(this.friendsList[data.index].is_praise == 1){
						this.friendsList[data.index].is_praise = 0;
						this.friendsList[data.index].praise_num --
					}else{
						this.friendsList[data.index].is_praise = 1;
						this.friendsList[data.index].praise_num ++
					}
				}
			},
			//获取朋友圈列表
			getFriendList(val) {
				this.ajax({
					url: 'friend/list',
					data: {
						val: 5,
						list: val
					},
					success: res => {
						uni.stopPullDownRefresh();
						if (res.data.body === 'success') {
							if (res.data.data.length === 0) {
								this.isEnd = true;
								uni.showToast({
									title: '没有更多数据了',
									icon: 'none'
								});
								return;
							}
							if (this.index !== 0) {
								this.friendsList = this.friendsList.concat(res.data.data);
							} else {
								this.friendsList = res.data.data;
							}
						}
					}
				});
			}
		}
	};
</script>

<style lang="less">
	.fridend_content {
		padding: 0 30upx;
	}
</style>
