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
			qrsize: 174
		};
	},
	onLoad(obj) {
		this.classId = obj.classId;
	},
	onReady() {
		this.$refs.qrcode.creatQrcode();
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
	methods: {}
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
