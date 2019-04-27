<template>
	<view>
		<progress-bar v-if="show" :progress="progress"></progress-bar>
		<textarea placeholder="分享学习心得…" v-model="notes_content" />
		<view v-if="notes_photo" class="choose_images"><image :src="notes_photo"></image></view>
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
			notes_photo: '',
			notes_content: '',
			show: false,
			progress: 0
		};
	},
	onLoad() {
		_this = this;
	},
	onShow() {
		if (uni.getStorageSync('langType') == 'en-US') {
			uni.setNavigationBarTitle({
				title: 'add task'
			});
		} else {
			uni.setNavigationBarTitle({
				title: '提交作业'
			});
		}
	},
	methods: {
		chooseImage: e => {
			uni.chooseImage({
				count: 1,
				success: res => {
					_this.notes_photo = res.tempFilePaths[0];
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
								_this.notes_photo = info.body.photo;
							}
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
		if (!this.notes_photo) {
			uni.showToast({
				title: '请选择图片',
				icon: 'none'
			});
			return;
		}
		if (!this.notes_content) {
			uni.showToast({
				title: '请填写内容',
				icon: 'none'
			});
			return;
		}
		this.ajax({
			url: 'studentclass/student_notes',
			data: {
				class_id: this.class_id,
				notes_photo: this.notes_photo,
				notes_content: this.notes_content,
				notes_video: ''
			},
			success: res => {
				if (res.data.body === 'success') {
					uni.showToast({
						title: '提交成功',
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
		image {
			width: 200upx;
			height: 200upx;
		}
	}
}
</style>
