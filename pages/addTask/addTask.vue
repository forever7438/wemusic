<template>
	<view>
		<progress-bar v-if="show" :progress="progress"></progress-bar>
		<textarea placeholder="分享学习心得…" v-model="notes_content" />
		<view v-if="notes_photos.length" class="choose_images"><image :src="item" v-for="(item, index) in notes_photos" :key="index"></image></view>
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
			classId:'',
			notes_photo: [],
			notes_photos:[],
			notes_content: '',
			show: false,
			progress: 0
		};
	},
	onLoad(obj) {
		this.classId = obj.classId;
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
			_this.notes_photos =[];
			uni.chooseImage({
				count: 9,
				success: res => {
					_this.notes_photos = res.tempFilePaths;
					res.tempFilePaths.map((item, index) => {
						_this.uploadFile(item, index);
					});
					
				},
				fail: err => {
					console.log('chooseImage fail', err);
				}
			});
		},
		uploadFile(file){
			_this.notes_photo=[];
			uni.uploadFile({
				url: ApiUrl + 'index/photo_add',
				filePath: file,
				name: 'file',
				header: {
					role: 'student',
					Authorization: uni.getStorageSync('token')
				},
				success: res => {
					const info = JSON.parse(res.data);
					if (info.data === 'success') {
						_this.notes_photo.push(info.body.photo);
					}
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
				class_id: this.classId,
				notes_photo: this.notes_photo.toString(),
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
