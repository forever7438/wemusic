<template>
	<view class="content">
		<image v-if="Array.isArray(friendDetail.video)" :src="friendDetail.video[0]"></image>
		<video v-else :src="friendDetail.video" controls></video>
		<view class="parents">
			<!-- <friendHead :itemHead="friendDetail"></friendHead> -->
			<friendContent :type="false" :content="friendDetail.body"></friendContent>
			<friendOperation :message="friendDetail.message" :praise="friendDetail.praise" :forward="friendDetail.forward"
			 :is_forward="friendDetail.is_forward" :is_praise="friendDetail.is_praise" :listId="friendDetail.id" @changeStatus="forward_praise"></friendOperation>
		</view>
		<view class="line"></view>
		<view class="parents">
			<comment :list="commentList" :message="friendDetail.message"></comment>
		</view>
		<submitBtn :friend_id="friendDetail.id" @refreshFriend="snedComment"></submitBtn>
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
				friendDetail: {},
				commentList: [],
				listId: '',
				index: 0,
				isEnd: false
			};
		},
		onLoad(obj) {
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: '#ffffff'
			});
			this.listId = obj.listId;
			this.getFriendDetail(this.listId, this.index);
		},
		onReachBottom() {
			if (this.isEnd) {
				return;
			}
			this.index++;
			setTimeout(() => {
				this.getFriendDetail(this.listId, this.index);
			}, 300);
		},
		methods: {
			forward_praise(data) {
				if (data.key == 'is_forward') {
					if (this.friendDetail.is_forward) {
						this.friendDetail.is_forward = 0;
						this.friendDetail.forward--;
					} else {
						this.friendDetail.is_forward = 1;
						this.friendDetail.forward++;
					}
				} else {
					if (this.friendDetail.is_praise) {
						this.friendDetail.is_praise = 0;
						this.friendDetail.praise--;
					} else {
						this.friendDetail.is_praise = 1;
						this.friendDetail.praise++;
					}
				}
			},
			//获取朋友圈详情
			getFriendDetail(listId, list) {
				this.ajax({
					url: 'friend/info',
					data: {
						friend_id: listId,
						list: list,
						val: 5
					},
					success: res => {
						if (res.data.body === 'success') {
							if (res.data.data.video.indexOf('mp4') != -1) {
								res.data.data.video = res.data.data.video
							} else {
								res.data.data.video = res.data.data.video.split(',');
							}
							this.friendDetail = res.data.data;
							if (res.data.data.list.length === 0) {
								this.isEnd = true;
								uni.showToast({
									title: '没有更多数据了',
									icon: 'none'
								});
								return;
							}
							this.commentList = this.commentList.concat(this.friendDetail.list);
						}
					}
				});
			},
			//发表评论
			snedComment() {
				this.commentList = [];
				this.getFriendDetail(this.listId, 0);
			}
		}
	};
</script>

<style lang="less">
	.content {
		image {
			width: 100%;
			height: 410upx;
			// border-radius: 12upx;
		}

		video {
			width: 100%;
			height: 410upx;
			// border-radius: 12upx;
		}

		.parents {
			padding: 0 30upx;
		}

		.line {
			width: auto;
			height: 2upx;
			background-color: #ddd;
			margin: 20upx 0;
		}
	}
</style>
