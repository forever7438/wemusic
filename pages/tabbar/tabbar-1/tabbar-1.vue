<template>
	<view class="class_list">
		<navigator hover-class="none" style="height: 268upx;margin-bottom: 30upx;" v-for="(item, index) in musicList" :key="index"
		 :url="'/pages/lessonCopy/lessonCopy?musicId=' + item.id">
			<image v-if="item.photo" :src="item.photo | imgformat"></image>
			<image v-else src="../../../static/img/wemusic.jpg"></image>
		</navigator>
		<!-- <navigator url="/pages/myCode/myCode">我的邀请码</navigator>
		<navigator url="/pages/tabbar/tabbar-5/tabbar-5">工资详情</navigator>
		<navigator url="/pages/adjustmentDetail/adjustmentDetail">调整详情</navigator> -->
		<view class="meun_list">
			<view v-if="isStudent" @tap="goPath('/pages/tabbar/tabbar-1/tabbar-1', 'home')">
				<image :src="pathType == 'home' ? '/static/img/tabbar/homeactive.png' : '/static/img/tabbar/home.png'"></image>
			</view>
			<view @tap="goPath('/pages/tabbar/tabbar-2/tabbar-2', 'class')">
				<image :src="pathType == 'class' ? '/static/img/tabbar/classactive.png' : '/static/img/tabbar/class.png'"></image>
			</view>
			<view @tap="goPath('/pages/tabbar/tabbar-5/tabbar-5', 'me')">
				<image :src="pathType == 'me' ? '/static/img/tabbar/meactive.png' : '/static/img/tabbar/me.png'"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isStudent: true,
				pathType: 'home',
				musicList: []
			};
		},
		onShow() {
			if (uni.getStorageSync('langType') == 'en-US') {
				uni.setNavigationBarTitle({
					title: 'Course selection'
				});
			} else {
				uni.setNavigationBarTitle({
					title: '选课'
				});
			}
		},
		onLoad(obj) {
			this.pathType = obj.type;
			if (uni.getStorageSync('type')) {
				uni.getStorageSync('type') == 1 ? (this.isStudent = true) : (this.isStudent = false);
			} else {
				this.isStudent = true
			}
			this.getMusicList();
		},
		onPullDownRefresh() {
			this.getMusicList();
		},
		methods: {
			goPath(path, type) {
				if (uni.getStorageSync('token')) {
					uni.redirectTo({
						url: `${path}?type=${type}`
					});
				} else {
					uni.showModal({
						title: '提示',
						content: '您还未登录,是否去登录?',
						success: function(res) {
							if (res.confirm) {
								uni.navigateTo({
									url: '/pages/login/login'
								})
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}

			},
			//获取艺术列表
			getMusicList() {
				this.ajax({
					url: 'music/index',
					method: 'post',
					header: {

					},
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

		.meun_list {
			position: fixed;
			bottom: 0;
			width: 100%;
			display: flex;
			height: 98upx;
			background-color: #fff;
			align-items: center;
			justify-content: space-around;
			border-top: 2upx solid #ddd;

			view {
				flex: 1;
				text-align: center;

				image {
					width: 48upx;
					height: 48upx;
				}
			}
		}
	}
</style>
