<template>
	<view>
		<textarea placeholder="分享学习心得…" />
		<view class="choose_image" @click="chooseImage">照片/拍摄</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		chooseImage: function() {
			uni.chooseImage({
				count: 1,
				sizeType: ['compressed'],
				sourceType: ['album'],
				success: res => {
					console.log('chooseImage success, temp path is', res.tempFilePaths[0]);
					var imageSrc = res.tempFilePaths[0];
					uni.uploadFile({
						url: 'https://unidemo.dcloud.net.cn/upload',
						filePath: imageSrc,
						fileType: 'image',
						name: 'data',
						success: res => {
							console.log('uploadImage success, res is:', res);
							uni.showToast({
								title: '上传成功',
								icon: 'success',
								duration: 1000
							});
							// this.imageSrc = imageSrc;
						},
						fail: err => {
							console.log('uploadImage fail', err);
							uni.showModal({
								content: err.errMsg,
								showCancel: false
							});
						}
					});
				},
				fail: err => {
					console.log('chooseImage fail', err);
				}
			});
		}
	},
	onNavigationBarButtonTap(obj) {
		uni.showToast({
			title: '成功',
			icon: 'success',
			duration: 1000
		});
	}
};
</script>

<style lang="less">
view {
	padding: 0 15upx;
	textarea {
		width: 100%;
		height: 1000upx;
		padding: 38upx;
	}
	.choose_image {
		width: 200upx;
		line-height: 200upx;
		text-align: center;
		background: url('../../static/img/creame@2x.png') no-repeat center/100%;
		font-size: 24upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
	}
}
</style>
