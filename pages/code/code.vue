<template>
	<view class="code_success">
		<view class="code_content">
			<text class="code_title">{{ $t('index').code }}</text>
			<text class="code_tips">{{ $t('index').showCode }}</text>
			<!-- <image src="../../static/img/demo.jpg"></image> -->
			<view class="qrcode"><qrcode :val="classId" :size="qrsize" ref="qrcode"></qrcode></view>
		</view>
	</view>
</template>

<script>
import qrcode from '../../components/qrcode/qrcode.vue';
export default {
	components: {
		qrcode
	},
	data() {
		return {
			classId: '',
			qrsize: 174,
			flag: true
		};
	},
	onLoad(obj) {
		console.log(obj);
		this.classId = obj.classId;
		let _this = this;
		setTimeout(function() {
			_this.searchStatus(_this.classId);
		}, 2000);
	},
	onReady() {
		this.$refs.qrcode.creatQrcode();
	},
	onBackPress() {
		this.flag = false;
	},
	onShow() {
		if (uni.getStorageSync('langType') == 'en-US') {
			uni.setNavigationBarTitle({
				title: 'code'
			});
		} else {
			uni.setNavigationBarTitle({
				title: '打卡'
			});
		}
	},
	methods: {
		searchStatus(classId) {
			let _this = this;
			let timer = setInterval(function() {
				if (!_this.flag) {
					clearInterval(timer);
				}
				_this.ajax({
					tip: false,
					url: 'teacherclass/puch_type',
					data: {
						class_id: classId
					},
					success: res => {
						if (res.data.body === 'success' && res.data.data != '') {
							let url = '/pages/codeSuccessTeach/codeSuccessTeach?classId=' + _this.classId;
							for (let k in res.data.data) {
								let value = res.data.data[k] != undefined ? res.data.data[k] : '';
								url += `&${k}=${encodeURIComponent(value)}`;
							}
							clearInterval(timer);
							uni.navigateTo({
								url: url
							});
						}
					}
				});
			}, 1200);
		}
	}
};
</script>

<style lang="less">
.code_success {
	padding: 64upx 30upx 40upx 30upx;
	background-color: #333;
	height: 100vh;

	.code_content {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;
		background-color: #fff;
		border-radius: 12upx;

		text {
			&:nth-of-type(1) {
				margin: 60upx auto 14upx;
				font-size: 48upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}

			&:nth-of-type(2) {
				margin-bottom: 80upx;
				font-size: 30upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(144, 144, 144, 1);
			}
		}

		.qrcode {
			width: 348upx;
			height: 348upx;
			margin-bottom: 164upx;
		}
	}
}
</style>
