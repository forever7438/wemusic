<template>
	<div class="update_userinfo">
		<neil-modal :show="show" @close="show = false" title="请输入用户名"><input type="text" class="new_name" placeholder="请输入用户名" v-model="userName" /></neil-modal>
		<ul>
			<li>
				<span>头像</span>
				<view class="choose_date" @click="updateUserImage">
					<image :src="userImage"></image>
					<uni-icon type="forward" size="20"></uni-icon>
				</view>
			</li>
			<li>
				<span>姓名</span>
				<view class="choose_date" @click="show = true">
					<text>{{ userName }}</text>
					<uni-icon type="forward" size="20"></uni-icon>
				</view>
			</li>
			<li>
				<span>性别</span>
				<view class="choose_date">
					<text @tap="toggleTabSex">{{ sex }}</text>
					<w-picker mode="selector" :defaultVal="[sex]" @confirm="onConfirmSex" ref="pickerSex" :selectList="array"></w-picker>
					<uni-icon type="forward" size="20"></uni-icon>
				</view>
			</li>
			<li>
				<span>生日</span>
				<view class="choose_date">
					<text @tap="toggleTabDate">{{ date }}</text>
					<w-picker mode="date" title="选择日期" :defaultVal="[0, 1, 0]" @confirm="onConfirmDate" ref="pickerDate"></w-picker>
					<uni-icon type="forward" size="20"></uni-icon>
				</view>
			</li>
			<li>
				<span>兴趣</span>
				<view class="choose_date">
					<text @tap="toggleTabInterest">{{ interest }}</text>
					<w-picker mode="selector" :defaultVal="[interest]" @confirm="onConfirmInterest" ref="pickerInterest" :selectList="arrays"></w-picker>
					<uni-icon type="forward" size="20"></uni-icon>
				</view>
			</li>
			<li>
				<span>住址</span>
				<view class="choose_date">
					<text @click="toggleTabAdress">{{ address }}</text>
					<w-picker mode="region" title="选择住址" @confirm="onConfirmAdress" ref="pickerAdress"></w-picker>
					<uni-icon type="forward" size="20"></uni-icon>
				</view>
			</li>
		</ul>
	</div>
</template>

<script>
import { ApiUrl, getDate, getImgToBase64 } from '../../common/common.js';
import wPicker from '@/components/w-picker/w-picker.vue';
import neilModal from '@/components/neil-modal/neil-modal.vue';
import uniIcon from '../../components/uni-icon/uni-icon.vue';
export default {
	components: {
		wPicker,
		neilModal,
		uniIcon
	},
	data() {
		return {
			userInfo: {},
			show: false,
			userImage: '',
			array: [{ label: '男', value: 0 }, { label: '女', value: 1 }],
			arrays: [{ label: '吃饭', value: 1 }, { label: '睡觉', value: 2 }, { label: '斗地主', value: 3 }, { label: '打豆豆', value: 4 }],
			date: '',
			userName: '',
			sex: [0],
			interest: [1],
			address: ''
		};
	},
	onShow() {
		if (uni.getStorageSync('langType') == 'en-US') {
			uni.setNavigationBarTitle({
				title: 'Revision of personal data'
			});
		} else {
			uni.setNavigationBarTitle({
				title: '修改个人资料'
			});
		}
	},
	onLoad() {
		this.getInstertList();
		this.getUserInfo();
	},
	onNavigationBarButtonTap(obj) {
		if (!this.userImage || !this.userName || !this.sex || !this.date || !this.interest || !this.address) {
			uni.showToast({
				title: '请填写必填选项!',
				icon: 'none'
			});
			// return;
		}
		this.ajax({
			url: uni.getStorageSync('type') == 1 ? 'user/update_info' : 'teacherclass/update_info',
			data: {
				photo: this.userImage,
				name: this.userName,
				sex: this.sex,
				birthday: new Date(this.date).getTime() / 1000,
				interest: this.interest,
				address: this.address
			},
			success: res => {
				if (res.data.body === 'success') {
					uni.showToast({
						title: '个人信息修改成功',
						icon: 'none'
					});
					setTimeout(() => {
						uni.reLaunch({
							url: '/pages/tabbar/tabbar-5/tabbar-5?type=me'
						});
					}, 1500);
				} else {
					uni.showToast({
						title: res.data.msg,
						icon: 'none'
					});
				}
			}
		});
	},
	methods: {
		//获取兴趣列表
		getInstertList() {
			this.ajax({
				url: '/index/savor',
				method: 'get',
				success: res => {
					res.data.data.map(item => {
						this.arrays.push(item.name);
					});
				}
			});
		},
		//获取个人资料
		getUserInfo() {
			this.ajax({
				url: uni.getStorageSync('type') == 1 ? 'user/info' : 'teacherclass/info',
				success: res => {
					if (res.data.body === 'success') {
						this.userInfo = res.data.data;
						this.sex = this.userInfo.sex;
						this.interest = this.userInfo.interest;
						this.userName = this.userInfo.name;
						this.userImage = this.userInfo.photo || this.userInfo.j_photo;
						this.date = getDate(this.userInfo.birthday * 1000);
						this.address = this.userInfo.address;
					} else {
						uni.showToast({
							title: res.data.msg
						});
					}
				}
			});
		},

		toggleTabSex() {
			this.$refs.pickerSex.show();
		},
		onConfirmSex(val) {
			this.sex = val.result;
		},
		toggleTabInterest() {
			this.$refs.pickerInterest.show();
		},
		onConfirmInterest(val) {
			this.interest = val.result;
		},
		toggleTabDate() {
			this.$refs.pickerDate.show();
		},
		onConfirmDate(val) {
			this.date = val.result;
		},
		toggleTabAdress() {
			this.$refs.pickerAdress.show();
		},
		onConfirmAdress(val) {
			this.address = `${val.checkArr[0]}-${val.checkArr[1]}-${val.checkArr[2]}`;
		},
		bindPickerChangeInterest: function(e) {
			this.indexs = e.target.value;
			this.interest = this.indexs;
		},
		//选择头像上传
		updateUserImage() {
			uni.chooseImage({
				count: 1,
				success: res => {
					// this.userImage = res.tempFilePaths[0];
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
								this.userImage = info.body.photo;
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

			.choose_date {
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
