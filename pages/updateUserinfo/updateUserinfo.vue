<template>
	<div class="update_userinfo">
		<neil-modal :show="show" @close="show = false" title="请输入用户名"><input type="text" class="new_name" placeholder="请输入用户名" v-model="userName" /></neil-modal>
		<ul>
			<li>
				<span>头像</span>
				<view @click="updateUserImage">
					<image :src="userInfo.photo"></image>
					<s>></s>
				</view>
			</li>
			<li>
				<span>姓名</span>
				<view @click="show = true">
					<text>{{ userInfo.name }}</text>
					<s>></s>
				</view>
			</li>
			<li>
				<span>性别</span>
				<view>
					<picker @change="bindPickerChangeSex" :value="index" :range="array">
						<text>{{ array[index] }}</text>
					</picker>
					<s>></s>
				</view>
			</li>
			<li>
				<span>生日</span>
				<view>
					<text @tap="toggleTabDate">{{ date }}</text>
					<w-picker mode="date" :defaultVal="[0, 1, 0]" @confirm="onConfirmDate" ref="pickerDate"></w-picker>
					<s>></s>
				</view>
			</li>
			<li>
				<span>兴趣</span>
				<view>
					<picker @change="bindPickerChangeInterest" :value="indexs" :range="arrays">
						<text>{{ arrays[indexs] }}</text>
					</picker>
					<s>></s>
				</view>
			</li>
			<li>
				<span>住址</span>
				<view>
					<text @click="toggleTabAdress">{{ address }}</text>
					<s>></s>
					<w-picker mode="region" @confirm="onConfirmAdress" ref="pickerAdress"></w-picker>
				</view>
			</li>
		</ul>
	</div>
</template>

<script>
import { ApiUrl, getDate, getImgToBase64 } from '../../common/common.js';
import wPicker from '@/components/w-picker/w-picker.vue';
import neilModal from '@/components/neil-modal/neil-modal.vue';
export default {
	components: {
		wPicker,
		neilModal
	},
	data() {
		return {
			userInfo: {},
			show: false,
			userImage: '../../static/img/lf.jpg',
			array: ['男', '女'],
			arrays: ['吃饭', '睡觉', '打豆豆'],
			index: '',
			indexs: 0,
			date: getDate(1855574459426),
			userName: '测试人员',
			sex: '',
			interest: '',
			address: '**省**市**县'
		};
	},
	onLoad() {
		this.getUserInfo();
		if (this.userInfo.sex === '2') {
			this.index = 1;
		} else {
			this.index = 0;
		}
		this.date = getDate(this.userInfo.birthday * 1000);
	},
	onNavigationBarButtonTap(obj) {
		this.ajax({
			url: 'user/update_info',
			data: {
				photo: this.userImage,
				name: this.userName,
				sex: this.sex,
				birthday: new Date(this.date).getTime() / 1000,
				interest: this.interest,
				address: this.address
			},
			success: res => {
				console.log(res);
			}
		});
	},
	methods: {
		//获取个人资料
		getUserInfo() {
			this.ajax({
				url: 'user/info',
				success: res => {
					if (res.data.body === 'success') {
						this.userInfo = res.data.data;
					} else {
						uni.showToast({
							title: res.data.msg
						});
					}
				}
			});
		},
		toggleTabDate() {
			this.$refs.pickerDate.show();
		},
		onConfirmDate(val) {
			this.date = `${val[0]}-${val[1]}-${val[2]}`;
		},
		toggleTabAdress() {
			this.$refs.pickerAdress.show();
		},
		onConfirmAdress(val) {
			this.address = `${val[0]}-${val[1]}-${val[2]}`;
		},
		bindPickerChangeSex: function(e) {
			this.index = e.target.value;
			e.target.value = 0 ? (this.sex = 1) : (this.sex = 2);
		},
		bindPickerChangeInterest: function(e) {
			this.indexs = e.target.value;
			this.interest = this.arrays[e.target.value];
		},
		//选择头像上传
		updateUserImage() {
			uni.chooseImage({
				count: 1,
				success: res => {
					this.userImage = res.tempFilePaths[0];
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
								this.userInfo.photo = info.body.photo;
							}
						}
					});
				}
			});
		}
	}
};
</script>

<style lang="less">
.update_userinfo {
	padding: 0 0 0 25upx;
	.new_name {
		margin: 0 40upx;
		padding-left: 10upx;
		line-height: 80upx;
	}
	ul {
		display: flex;
		align-items: center;
		flex-direction: column;
		padding-left: 0;

		li {
			width: 100%;
			height: 120upx;
			background: rgba(255, 255, 255, 1);
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 32upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			border-bottom: 2upx solid rgba(231, 232, 234, 1);
			padding-right: 30upx;
			view {
				display: flex;
				align-items: center;
			}
			&:nth-of-type(1) {
				view {
					image {
						width: 100upx;
						height: 100upx;
						border-radius: 50%;
					}
				}
			}
			&:last-of-type {
				border-bottom: none;
			}

			s {
				text-decoration: none;
				margin-left: 20upx;
			}
		}
	}

	.login_out {
		text-align: center;
		margin-top: 40upx;
		display: inline-block;
		width: 100%;
		line-height: 80upx;
		border-radius: 12upx;
		border: 2upx solid rgba(153, 153, 153, 1);
		font-size: 32upx;
		font-family: PingFangSC-Regular;
	}
}
</style>
