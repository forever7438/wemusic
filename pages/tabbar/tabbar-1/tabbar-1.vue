<template>
	<view class="class_list">
		<navigator hover-class="none" style="height: 268upx;margin-bottom: 30upx;" v-for="(item, index) in musicList" :key="index"
		 :url="'/pages/lessonCopy/lessonCopy?musicId=' + item.id">
			<image src="../../../static/img/wemusic.jpg"></image>
		</navigator>
		<!-- <navigator url="/pages/myCode/myCode">我的邀请码</navigator>
		<navigator url="/pages/wagesDetail/wagesDetail">工资详情</navigator>
		<navigator url="/pages/adjustmentDetail/adjustmentDetail">调整详情</navigator> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				musicList: []
			};
		},
		onLoad() {
			this.getMusicList();
		},
		onPullDownRefresh() {
			this.getMusicList();
		},
		methods: {
			//获取艺术列表
			getMusicList() {
				this.ajax({
					url: 'music/index',
					method: 'post',
					success: res => {
						uni.stopPullDownRefresh();
						if (res.data.body === 'success') {
							this.musicList = res.data.data;
						}
					}
				});
			}
		}
	};
</script>

<style lang="less">
	.class_list {
		display: flex;
		padding: 0 15upx;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-around;

		image {
			width: 330upx;
			height: 268upx;
			margin: 15upx;
			border-radius: 16upx;
		}
	}
</style>
