<template>
	<view class="add_teacher">
		<view>
			<text>名字</text>
			<input type="text" v-model="name" />
		</view>
		<view>
			<text>性别</text>
			<radio-group class="uni-flex" name="sex">
				<label style="margin-right: 80upx;">
					<radio value="0" />
					男
				</label>
				<label>
					<radio value="1" />
					女
				</label>
			</radio-group>
		</view>
		<view>
			<text>生日</text>
			<input type="text" v-model="birthday" />
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
					<radio value="接受" />
					接受
				</label>
				<label>
					<radio value="拒绝" />
					拒绝
				</label>
			</radio-group>
		</view>
		<view class="diffrent">
			<text style="width: 212upx;">上传简历</text>
			<view class="upload_file"><image src="../../static/img/creame@2x.png"></image></view>
		</view>
		<button>注册</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			name: '',
			sex: '',
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
			class: ''
		};
	}
};
</script>

<style lang="less">
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

		input {
			padding-left: 10upx;
			border-bottom: 2upx solid #000;
		}
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
