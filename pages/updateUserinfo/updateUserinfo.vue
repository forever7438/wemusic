<template>
	<div class="update_userinfo">
		<mpvue-city-picker
			:themeColor="themeColor"
			ref="mpvueCityPicker"
			:pickerValueDefault="cityPickerValueDefault"
			@onCancel="onCancel"
			@onConfirm="onConfirm"
		></mpvue-city-picker>
		<neil-modal :show="show" @cancel="bindBtn('cancel')" @confirm="bindBtn('confirm')" @close="show = false" title="请输入用户名">
			<input type="text" class="new_name" placeholder="请输入用户名" v-model="userName" />
		</neil-modal>
		<ul>
			<li>
				<span>头像</span>
				<view @click="updateUserImage">
					<image :src="userImage"></image>
					<s>></s>
				</view>
			</li>
			<li>
				<span>姓名</span>
				<view @click="show = true">
					<text>{{ userName }}</text>
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
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<text>{{ date }}</text>
					</picker>
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
				<view @click="showMulLinkageThreePicker">
					<text>{{ address }}</text>
					<s>></s>
				</view>
			</li>
		</ul>
	</div>
</template>

<script>
import { ApiUrl, getDate, getImgToBase64 } from '../../common/common.js';
import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue';
import neilModal from '@/components/neil-modal/neil-modal.vue';
export default {
	components: {
		mpvueCityPicker,
		neilModal
	},
	data() {
		return {
			show: false,
			userImage: '../../static/img/lf.jpg',
			array: ['男', '女'],
			arrays: ['吃饭', '睡觉', '打豆豆'],
			index: 0,
			indexs: 0,
			date: getDate({
				format: true
			}),
			startDate: getDate('start'),
			endDate: getDate('end'),
			cityPickerValueDefault: [0, 0, 1],
			themeColor: '#007AFF',

			userName: '测试人员',
			sex: 1,
			birthday: '',
			interest: '',
			address: '**省**市**县'
		};
	},
	onNavigationBarButtonTap(obj) {
		uni.uploadFile({
			url: ApiUrl + 'user/update_info',
			filePath: this.userImage,
			name: 'photo',
			header: {
				'Content-Type': 'application/json',
				role: 'student',
				Authorization: uni.getStorageSync('token')
			},
			formData: {
				name: this.userName,
				sex: this.sex,
				birthday: new Date(this.birthday).getTime(),
				interest: this.interest,
				address: this.address
			},
			success: res => {
				const info = JSON.parse(res.data);
				if (info.body === 'success') {
					uni.showToast({
						title: '个人信息修改成功',
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
	},
	methods: {
		bindPickerChangeSex: function(e) {
			this.index = e.target.value;
			e.target.value = 0 ? (this.sex = 1) : (this.sex = 2);
		},
		bindPickerChangeInterest: function(e) {
			this.indexs = e.target.value;
			this.interest = this.arrays[e.target.value];
		},
		bindDateChange: function(e) {
			this.birthday = e.target.value;
			this.date = e.target.value;
			console.log(this.birthday);
		},

		bindBtn(type) {},
		// 三级联动选择
		showMulLinkageThreePicker() {
			this.$refs.mpvueCityPicker.show();
		},
		onCancel(e) {},
		onConfirm(e) {
			this.address = e.label;
		},
		//选择头像上传
		updateUserImage() {
			uni.chooseImage({
				count: 1,
				success: res => {
					this.userImage = res.tempFilePaths[0];
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
