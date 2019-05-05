<template>
	<view class="friend_operation">
		<view class="operation_items" @tap="share(is_forward)">
			<image class="items_image" src="../../static/img/zhuanfa@2x.png"></image>
			<text>{{ forward }}</text>
		</view>
		<view class="operation_items">
			<image class="items_image" src="../../static/img/comment@2x.png"></image>
			<text>{{ message }}</text>
		</view>
		<view class="operation_items" @tap="liked(is_praise)">
			<image class="items_image" src="../../static/img/dianzan@2x.png"></image>
			<text>{{ praise }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			message: Number,
			praise: Number,
			forward: Number,
			listId: String,
			is_forward: Number,
			is_praise: Number
		},
		methods: {
			//点赞
			liked(is_praise) {
				this.ajax({
					url: 'friend/praise',
					data: {
						friend_id: this.listId
					},
					success: res => {
						if (res.data.body === 'success') {
							this.$emit('refreshData');
							uni.showToast({
								title: '点赞成功',
								icon: 'none'
							});
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							});
						}
					}
				});
			},
			//转发
			share(is_forward) {
				if (is_forward) {
					return;
				}
				this.ajax({
					url: 'friend/forward',
					data: {
						friend_id: this.listId
					},
					success: res => {
						if (res.data.body === 'success') {
							this.is_forward = 1;
							this.$emit('refreshData');
							uni.showToast({
								title: '转发成功',
								icon: 'none'
							});
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							});
						}
					}
				});
			}
		}
	};
</script>

<style lang="less">
	.friend_operation {
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin: 20upx 0;

		.operation_items {
			display: flex;
			align-items: center;

			.items_image {
				width: 50upx;
				height: 50upx;
			}

			text {
				margin-left: 10upx;
				font-size: 36upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(102, 102, 102, 1);
			}
		}
	}
</style>
