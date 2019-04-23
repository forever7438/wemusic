<template>
	<view class="fridend_content">
		<navigator hover-class="none" url="/pages/myFriend/myFriend">
			<view class="toMyFriend">
				<text>我的朋友圈</text>
				<uni-icon type="forward" size="20"></uni-icon>
			</view>
		</navigator>
		<friendsList :friendsList="friendsList"></friendsList>
	</view>
</template>

<script>
import friendsList from '../../components/item/friendsList.vue';
import uniIcon from '../../components/uni-icon/uni-icon.vue';
export default {
	components: {
		friendsList,
		uniIcon
	},
	data() {
		return {
			friendsList: [],
			isEnd: false,
			index: 0
		};
	},
	onLoad() {
		this.getFriendList(this.index);
	},
	onNavigationBarButtonTap(obj) {
		uni.navigateTo({
			url: '/pages/releaseFriends/releaseFriends'
		});
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

	.toMyFriend {
		height: 104upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 2upx solid #ddd;
		margin-bottom: 20upx;

		text {
			font-size: 32upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}

		image {
			width: 20upx;
			height: 20upx;
		}
	}
}
</style>
