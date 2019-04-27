<template>
	<view class="upload_file">
		<view class="upload_shade" @tap="chooseImage"><image :src="data_photo == '' ? '../../static/img/creame@2x.png' : '../../static/img/chenggong.png'"></image></view>
		<button hover-class="btn-hover" @tap="uploadFile">{{$t('index').upload}}</button>
	</view>
</template>

<script>
import { ApiUrl } from '../../common/common.js';
let _this = '';
export default {
	data() {
		return {
			data_photo: ''
		};
	},
	onLoad() {
		_this = this;
	},
	onShow() {
		if (uni.getStorageSync('langType') == 'en-US') {
			uni.setNavigationBarTitle({
				title: 'upload file'
			});
		} else {
			uni.setNavigationBarTitle({
				title: '资料上传'
			});
		}
	},
	methods: {
		chooseImage: e => {
			uni.chooseImage({
				count: 1,
				success: res => {
					_this.data_photo = res.tempFilePaths[0];
					uni.uploadFile({
						url: ApiUrl + 'index/photo_add',
						filePath: res.tempFilePaths[0],
						name: 'file',
						header: {
							role: 'student',
							Authorization: uni.getStorageSync('token')
						},
						success: res => {
							const info = JSON.parse(res.data);
							if (info.data === 'success') {
								_this.data_photo = info.body.photo;
							}
						}
					});
				},
				fail: err => {
					console.log('chooseImage fail', err);
				}
			});
		},
		//资料上传
		uploadFile() {
			if (!this.data_photo) {
				uni.showToast({
					title: '请选择文件',
					icon: 'none'
				});
				return;
			}
			this.ajax({
				url: 'teacherclass/teacher_data',
				data: {
					data_photo: this.data_photo
				},
				success: res => {
					if (res.data.body === 'success') {
						uni.showToast({
							title: '资料上传成功',
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
.upload_file {
	padding: 86upx 86upx 0;
	.upload_shade {
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 500upx;
		height: 844upx;
		background: rgba(246, 246, 246, 1);
		image {
			width: 80upx;
			height: 80upx;
		}
	}
	button {
		margin: 50upx 30upx 0;
		width: auto;
		line-height: 100upx;
		background: rgba(250, 212, 42, 1);
		border-radius: 12upx;
		font-size: 32upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
}
</style>
