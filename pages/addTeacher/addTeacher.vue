<template>
	<view class="add_teacher">
		<w-picker mode="date" title="选择日期" startYear="1980" @confirm="onConfirmDate" ref="pickerDate"></w-picker>
		<w-picker mode="date" :title="title" startYear="2014" @confirm="onConfirmDates" ref="pickerDates"></w-picker>
		<view class="teacher_meun">
			<text>名字</text>
			<input type="text" maxlength="10" v-model="name" />
		</view>
		<view class="teacher_meun">
			<text>性别</text>
			<radio-group class="uni-flex" name="sex">
				<label style="margin-right: 80upx;">
					<radio value="0" checked="true" color="#fad42a" />
					男
				</label>
				<label>
					<radio value="1" color="#fad42a" />
					女
				</label>
			</radio-group>
		</view>
		<view class="teacher_meun">
			<text>生日</text>
			<input @tap="toggleTabDate" type="text" v-model="birthday" />
		</view>
		<view class="teacher_meun">
			<text>住址</text>
			<input type="text" v-model="address" />
		</view>
		<view class="teacher_meun">
			<text>电话</text>
			<input type="text" v-model="phone" />
		</view>
		<view class="teacher_meun">
			<text>邮箱</text>
			<input type="text" v-model="emial" />
		</view>
		<view class="teacher_meun">
			<text>ABN</text>
			<input type="text" v-model="ABN" />
		</view>
		<view class="teacher_meun">
			<text style="width: 220upx;">文化程度</text>
			<input type="text" v-model="culture" />
		</view>
		<view class="teacher_meun">
			<text style="width: 142upx;">身份证</text>
			<input type="text" v-model="card" />
		</view>
		<view class="teacher_meun">
			<text>乐器</text>
			<input type="text" />
		</view>
		<view class="teacher_meun">
			<text style="width:300upx">开始日期</text>
			<input @tap="toggleTabDates('startTime')" type="text" v-model="gz_s_time" />
		</view>
		<view class="teacher_meun">
			<text style="width:300upx">结束日期</text>
			<input @tap="toggleTabDates('endTime')" type="text" v-model="gz_d_time" />
		</view>
		<!-- <view>
			<text style="width: 140upx;">多人授课</text>
			<radio-group class="uni-flex" name="type">
				<label>
					<radio value="接受" checked="true" color="#fad42a" />
					接受
				</label>
				<label>
					<radio value="拒绝" color="#fad42a" />
					拒绝
				</label>
			</radio-group>
		</view> -->
		<view class="diffrent">
			<text style="width: 212upx;">上传简历</text>
			<image class="j_photo" v-if="j_photo" :src="j_photo"></image>
			<view v-else class="upload_file" @click="chooseImage"><image src="../../static/img/creame@2x.png"></image></view>
		</view>
		<button hover-class="btn-hover" @click="addTeacherInfo">注册</button>
	</view>
</template>

<script>
let _this = '';
import wPicker from '@/components/w-picker/w-picker.vue';
import { ApiUrl } from '../../common/common.js';
export default {
	components: {
		wPicker
	},
	onLoad() {
		_this = this;
	},
	data() {
		return {
			title: '可工作开始时间',
			name: '',
			sex: '0',
			birthday: '',
			address: '',
			phone: '',
			emial: '',
			ABN: '',
			culture: '',
			card: '',
			gz_s_time: '',
			gz_d_time: '',
			j_photo: '',
			class: '1=2'
		};
	},
	methods: {
		toggleTabDate() {
			this.$refs.pickerDate.show();
		},
		onConfirmDate(val) {
			this.birthday = `${val[0]}-${val[1]}-${val[2]}`;
		},
		toggleTabDates(type) {
			switch (type) {
				case 'startTime':
					this.title = '开始日期';
					this.$refs.pickerDates.show();
					break;
				default:
					this.title = '结束日期';
					this.$refs.pickerDates.show();
			}
		},
		onConfirmDates(val) {
			switch (this.title) {
				case '开始日期':
					this.gz_s_time = `${val[0]}-${val[1]}-${val[2]}`;
					break;
				default:
					this.gz_d_time = `${val[0]}-${val[1]}-${val[2]}`;
			}
		},
		//选择文件
		chooseImage: e => {
			uni.chooseImage({
				count: 1,
				success: res => {
					_this.j_photo = res.tempFilePaths[0];
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
								_this.j_photo = info.body.photo;
							}
						}
					});
				},
				fail: err => {
					console.log('chooseImage fail', err);
				}
			});
		},
		//教师入驻
		addTeacherInfo() {
			this.ajax({
				url: 'index/teacher_registered',
				header: {
					role: 'teacher'
				},
				data: {
					name: this.name,
					sex: this.sex,
					birthday: new Date(this.birthday).getTime() / 1000,
					address: this.address,
					phone: this.phone,
					email: this.email,
					ABN: this.ABN,
					culture: this.culture,
					card: this.card,
					gz_s_time: new Date(this.gz_s_time).getTime() / 1000,
					gz_d_time: new Date(this.gz_d_time).getTime() / 1000,
					j_photo: this.j_photo,
					class: this.class
				},
				success: res => {
					if (res.data.data === 'success') {
						uni.showToast({
							title: '您已成功入驻,快联系管理员登录吧!',
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

<style lang="less" scoped>
input {
	padding-left: 10upx;
	font-size: 24upx;
	width: 100%;
	border-bottom: 2upx solid rgba(185, 185, 185, 1);
}

.add_teacher {
	padding: 0 24upx;

	label {
		font-size: 32upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
	}

	.teacher_meun {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 30upx 150upx;

		text {
			width: 100upx;
			height: 44upx;
			font-size: 32upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
		}

		// 		input {
		// 			padding-left: 10upx;
		// 			border-bottom: 2upx solid #000;
		// 		}
	}

	.diffrent {
		display: flex;
		align-items: baseline;
		flex-direction: column;
		margin: 30upx 150upx;

		.j_photo {
			margin: 20upx auto;
			width: 100%;
			height: 180upx;
		}

		text {
			width: 100upx;
			height: 44upx;
			font-size: 32upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
		}

		.upload_file {
			margin: 20upx auto;
			padding: 60upx 170upx;
			text-align: center;
			background: rgba(246, 246, 246, 1);
			border-radius: 16upx;

			image {
				width: 60upx;
				height: 60upx;
			}
		}
	}

	button {
		width: auto;
		line-height: 88upx;
		margin: 0 110upx 20upx;
		background: rgba(250, 212, 42, 1);
		border-radius: 12upx;
		font-size: 32upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
}
</style>
