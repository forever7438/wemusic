<template>
	<view>
		<progress-bar v-if="show" :progress="progress"></progress-bar>
		<textarea placeholder="分享学习心得…" v-model="body" />
		<view v-if="videos.length" class="choose_images"><image :src="item" v-for="(item, index) in videos" :key="index"></image></view>
		<view v-else class="choose_image" @tap="chooseImage">照片/拍摄</view>
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
			videos: [],
			body: '',
			show: false,
			progress: 0
		};
	},
	onShow() {
		if (uni.getStorageSync('langType') == 'en-US') {
			uni.setNavigationBarTitle({
				title: 'Circle Friends'
			});
		} else {
			uni.setNavigationBarTitle({
				title: '发布朋友圈'
			});
		}
	},
	onLoad() {
		_this = this;
	},
	methods: {
		chooseImage: e => {
			_this.videos = [];
			uni.chooseImage({
				count: 9,
				success: res => {
					_this.videos = res.tempFilePaths;
					res.tempFilePaths.map((item, index) => {
						_this.uploadFile(item, index);
					});
				},
				fail: err => {
					console.log('chooseImage fail', err);
				}
			});
		},
		uploadFile(file, index) {
			_this.video = [];
			uni.uploadFile({
				url: ApiUrl + 'index/photo_add',
				filePath: file,
				name: `file`,
				header: {
					role: 'student',
					Authorization: uni.getStorageSync('token')
				},
				success: res => {
					const info = JSON.parse(res.data);
					if (info.data === 'success') {
						_this.video.push(info.body.photo);
					}
				}
			});
		}
	},
	onNavigationBarButtonTap(obj) {
		if (!this.video) {
			uni.showToast({
				title: '请选择图片',
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
		this.ajax({
			url: 'friend/add_friend',
			data: {
				body: this.body,
				video: this.video.toString()
			},
			success: res => {
				if (res.data.body === 'success') {
					uni.showToast({
						title: '发布成功',
						icon: 'none'
					});
					uni.navigateBack({
						delta: 1
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
		// width: 200upx;
		// line-height: 200upx;
		text-align: left;
		font-size: 24upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		image {
			width: 160upx;
			height: 160upx;
			margin-right: 10upx;
			margin-bottom: 10upx;
		}
	}
}
</style>
