<template>
	<view class="submit">
		<input type="text" placeholder="输入评论内容…" v-model="body" />
		<text @tap="submit(friend_id)">发送</text>
	</view>
</template>

<script>
export default {
	data() {
		return {
			body: ''
		};
	},
	props: {
		friend_id: String
	},
	methods: {
		//提交留言
		submit(friend_id) {
			if (!this.body) {
				uni.showToast({
					title: '内容不得为空',
					icon: 'none'
				});
				return;
			}
			this.ajax({
				url: 'friend/message',
				data: {
					friend_id: friend_id,
					body: this.body
				},
				success: res => {
					if (res.data.body === 'success') {
						uni.showToast({
							title: '评论成功',
							icon: 'none'
						});
						this.body = '';
						this.$emit('refreshFriend');
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
.submit {
	width: 100%;
	position: fixed;
	bottom: 10upx;
	left: 0;
	padding: 10upx 40upx;
	background-color: #fff;
	input {
		float: left;
		width: 540upx;
		line-height: 52upx;
		font-size: 28upx;
		background: rgba(240, 242, 247, 1);
		border-radius: 12upx;
		padding-left: 10upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
	}
	text {
		float: right;
		text-align: center;
		width: 116upx;
		line-height: 52upx;
		background: rgba(250, 212, 42, 1);
		border-radius: 12upx;
		font-size: 28upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
	}
}
</style>
