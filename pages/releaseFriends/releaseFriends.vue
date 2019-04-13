<template>
	<view>
		<progress-bar v-if="show" :progress="progress"></progress-bar>
		<textarea placeholder="分享学习心得…" v-model="body" />
		<view v-if="video" class="choose_images"><video :src="video" controls></video></view>
		<view v-else class="choose_image" @click="chooseVideo">照片/拍摄</view>
	</view>
</template>

<script>
import { ApiUrl } from '../../common/common.js';
import progressBar from '../../components/progress.vue';
let _this = '';
export default {
	components: {
		progressBar
	},
	data() {
		return {
			video: '',
			body: '',
			show: false,
			progress: 0
		};
	},
	onLoad() {
		_this = this;
	},
	methods: {
		chooseVideo: e => {
			uni.chooseVideo({
				count: 1,
				success: res => {
					_this.video = res.tempFilePath;
				},
				fail: err => {
					console.log('chooseImage fail', err);
				}
			});
		}
	},
	onNavigationBarButtonTap(obj) {
		if (!this.video) {
			uni.showToast({
				title: '请选择视频',
				icon: 'none'
			});
			return;
		}
		if (!this.body) {
			uni.showToast({
				title: '请填写内容',
				icon: 'none'
			});
			return;
		}
		const uploadTask = uni.uploadFile({
			url: ApiUrl + 'friend/add_friend',
			filePath: this.video,
			name: 'video',
			header: {
				// 'Content-Type': 'application/json',
				role: 'student',
				Authorization: uni.getStorageSync('token')
			},
			formData: {
				body: this.body
			},
			success: res => {
				const info = JSON.parse(res.data);
				if (info.body === 'success') {
					this.show = false;
					uni.showToast({
						title: '发布成功',
						icon: 'none'
					});
				} else {
					uni.showToast({
						title: info.msg,
						icon: 'none'
					});
				}
			}
		});
		uploadTask.onProgressUpdate(res => {
			_this.show = true;
			_this.progress = res.progress;
		});
	}
};
</script>

<style lang="less">
view {
	padding: 0 15upx;
	textarea {
		width: auto;
		height: 800upx;
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
	.choose_images {
		width: 200upx;
		line-height: 200upx;
		text-align: center;
		font-size: 24upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		video {
			width: 200upx;
			height: 200upx;
		}
	}
}
</style>
