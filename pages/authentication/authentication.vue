<template>
	<view class="authentication">
		<view class="">
			<text>{{$t('index').dataUpload }}</text>
			<image v-if="approve_photo1" :src="approve_photo1" class="shade_image"></image>
			<view v-else class="shade_image" @tap="chooseImage('approve_photo1')">
				<image src="../../static/img/creame@2x.png"></image>
			</view>
		</view>
		<view class="">
			<text>{{$t('index').dataUpload }}</text>
			<image v-if="approve_photo2" :src="approve_photo2" class="shade_image"></image>
			<view v-else class="shade_image" @tap="chooseImage('approve_photo2')">
				<image src="../../static/img/creame@2x.png"></image>
			</view>
		</view>
		<button hover-class="btn-hover" @tap="addApprove">{{$t('index').submitCertification }}</button>
	</view>
</template>

<script>
	let _this = '';
	import {
		ApiUrl
	} from '../../common/common.js';
	export default {
		data() {
			return {
				approve_photo1: '',
				approve_photo2: ''
			};
		},
		onLoad() {
			_this = this;
		},
		onShow() {
			if (uni.getStorageSync('langType') == 'en-US') {
				uni.setNavigationBarTitle({
					title: 'authentication'
				});
			} else {
				uni.setNavigationBarTitle({
					title: '认证中心'
				});
			}
		},
		methods: {
			chooseImage(str) {
				uni.chooseImage({
					count: 1,
					success: (res) => {
						switch (str) {
							case 'approve_photo1':
								_this.approve_photo1 = res.tempFilePaths[0];
								break;
							default:
								_this.approve_photo2 = res.tempFilePaths[0];
						}

						uni.uploadFile({
							url: ApiUrl + 'index/photo_add',
							filePath: res.tempFilePaths[0],
							name: 'file',
							header: {
								role: 'teacher',
								Authorization: uni.getStorageSync('token')
							},
							success: res => {
								const info = JSON.parse(res.data);
								if (info.data === 'success') {
									switch (str) {
										case 'approve_photo1':
											_this.approve_photo1 = info.body.photo;
											break;
										default:
											_this.approve_photo2 = info.body.photo;
									}

								}
							}
						});
					}
				});
			},
			//提交认证资料
			addApprove() {
				if (!this.approve_photo1 || !this.approve_photo2) {
					uni.showToast({
						title: "请上传认证资料",
						icon: "none"
					})
					return
				}
				this.ajax({
					url: 'teacherclass/teacher_approve',
					data: {
						approve_photo1: this.approve_photo1,
						approve_photo2: this.approve_photo2
					},
					success: res => {
						if (res.data.body === 'success') {
							uni.showToast({
								title: "资料上传成功,请等待后台审核",
								icon: "none"
							})
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: "none"
							})
						}
					}
				})
			}
		}
	};
</script>

<style lang="less">
	.authentication {
		padding: 40upx 15upx 0;

		view {
			text {
				font-size: 32upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}

			.shade_image {
				display: flex;
				align-items: center;
				justify-content: center;
				margin: 40upx auto;
				width: 500upx;
				height: 288upx;
				background: rgba(246, 246, 246, 1);

				image {
					width: 80upx;
					height: 80upx;
				}
			}
		}

		button {
			margin: 0 80upx;
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
