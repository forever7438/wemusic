<template>
	<view class="add_teacher">
		<w-picker mode="date" @confirm="onConfirmDate" ref="pickerDate"></w-picker>
		<view>
			<text>名字</text>
			<input type="text" maxlength="10" v-model="name" />
		</view>
		<view>
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
		<view>
			<text>生日</text>
			<input @tap="toggleTabDate" type="text" v-model="birthday" />
		</view>
		<view>
			<text>住址</text>
			<input type="text" v-model="address" />
		</view>
		<view>
			<text>电话</text>
			<input type="text" v-model="phone" />
		</view>
		<view>
			<text>邮箱</text>
			<input type="text" v-model="emial" />
		</view>
		<view>
			<text>ABN</text>
			<input type="text" v-model="ABN" />
		</view>
		<view>
			<text style="width: 220upx;">文化程度</text>
			<input type="text" v-model="culture" />
		</view>
		<view>
			<text style="width: 142upx;">身份证</text>
			<input type="text" v-model="card" />
		</view>
		<view>
			<text>乐器</text>
			<input type="text" />
		</view>
		<view>
			<text style="width:300upx">可工作日期</text>
			<input type="text" />
		</view>
		<view>
			<text style="width:300upx">可工作时间</text>
			<input type="text" />
		</view>
		<view>
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
		</view>
		<view class="diffrent">
			<text style="width: 212upx;">上传简历</text>
			<view class="upload_file" @click="chooseVideo"><image src="../../static/img/creame@2x.png"></image></view>
		</view>
		<button @click="addTeacherInfo">注册</button>
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
			name: '',
			sex: '0',
			birthday: '',
			address: '',
			phone: '',
			emial: '',
			ABN: '',
			culture: '',
			card: '',
			gz_s_time: '2019-04-24',
			gz_d_time: '2019-12-23',
			j_photo: '',
			class: '1=>2'
		};
	},
	methods: {
		toggleTabDate() {
			this.$refs.pickerDate.show();
		},
		onConfirmDate(val) {
			this.birthday = `${val[0]}-${val[1]}-${val[2]}`;
		},
		//选择文件
		chooseVideo: e => {
			uni.chooseVideo({
				count: 1,
				success: res => {
					_this.j_photo = res.tempFilePath;
				},
				fail: err => {
					console.log('chooseImage fail', err);
				}
			});
		},
		//教师入驻
		addTeacherInfo() {
			const uploadTask = uni.uploadFile({
				url: ApiUrl + 'index/teacher_registered',
				filePath: this.j_photo,
				name: 'j_photo',
				header: {
					// 'Content-Type': 'application/json',
					role: 'student',
					Authorization: uni.getStorageSync('token')
				},
				formData: {
					name: this.name,
					sex: this.sex,
					birthday: this.birthday,
					address: this.address,
					phone: this.phone,
					email: this.email,
					ABN: this.ABN,
					culture: this.culture,
					card: this.card,
					gz_s_time: this.gz_s_time,
					gz_d_time: this.gz_d_time,
					class: this.class
				},
				success: res => {
					const info = JSON.parse(res.data);
					if (info.body === 'success') {
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
				console.log(res);
			});
		}
	}
};
</script>

<style lang="less">
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

	view {
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

		text {
			width: 100upx;
			height: 44upx;
			font-size: 32upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
		}

		.upload_file {
			margin: 10px auto;
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
