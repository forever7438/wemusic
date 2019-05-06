<template>
	<view class="fridend_content">
		<view class="parents">
			<navigator hover-class="none" url="/pages/myFriend/myFriend">
				<view class="toMyFriend">
					<text>{{ $t('index').myFridens }}</text>
					<uni-icon type="forward" size="20"></uni-icon>
				</view>
			</navigator>
		</view>
		<view class="line"></view>
		<view class="parents"><friendsList :friendsList="friendsList" @forward_praise="forward_praise"></friendsList></view>
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
	onShow() {
		if (uni.getStorageSync('langType') == 'en-US') {
			uni.setNavigationBarTitle({
				title: 'circleFriends'
			});
		} else {
			uni.setNavigationBarTitle({
				title: '朋友圈'
			});
		}
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
		forward_praise(data) {
			if (data.key == 'is_forward') {
				if (this.friendsList[data.index].is_forward == 1) {
					this.friendsList[data.index].is_forward = 0;
					this.friendsList[data.index].forward_num--;
				} else {
					this.friendsList[data.index].is_forward = 1;
					this.friendsList[data.index].forward_num++;
				}
			} else {
				if (this.friendsList[data.index].is_praise == 1) {
					this.friendsList[data.index].is_praise = 0;
					this.friendsList[data.index].praise_num--;
				} else {
					this.friendsList[data.index].is_praise = 1;
					this.friendsList[data.index].praise_num++;
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
								title: this.$t('index').No_more_data,
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
	.parents {
		padding: 0 30upx;
	}

	.line {
		height: 2upx;
		background-color: #ddd;
	}

	.toMyFriend {
		height: 104upx;
		display: flex;
		align-items: center;
		justify-content: space-between;

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
