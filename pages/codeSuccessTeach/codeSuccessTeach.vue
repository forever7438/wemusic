<template>
	<view class="code_success">
		<view class="code_content" v-if="flag">
			<image src="../../static/img/chenggong.png"></image>
			<view class="code_title">
				<text>{{ $t('index').successfulTyping }}</text>
			</view>
			<text class="code_class">{{ data.class_name }}</text>
			<view class="code_teacher">
				<text>{{ $t('index').Student }}</text>
				<text>{{ data.student_name }}</text>
			</view>
			<view class="code_time">
				<text>{{ $t('index').classTime }}</text>
				<text>
					{{ originalDate }}
					<p>{{ startTime }} ~ {{ endTime }}</p>
				</text>
			</view>
			<view class="code_message">
				<text>{{ $t('index').remarks }}</text>
				<text>正常</text>
			</view>
		</view>
	</view>
</template>

<script>
import { getDatess } from '../../common/common.js';
import commentStarClass from '../../components/comment/commentStarClass.vue';
import startclass from '../../components/starclass.vue';
export default {
	components: {
		commentStarClass,
		startclass
	},
	data() {
		return {
			flag: false,
			classId: '',
			classDetail: {},
			punch_id: '',
			star: '',
			content: '',
			startTime: '',
			endTime: '',
			originalDate: '',
			data:{}
		};
	},
	onLoad(obj) {
		this.data = obj
		console.log(obj)
		this.init(obj)
		//this.punch_id = obj.punch_id;
		//this.classId = obj.classId;
		//this.getClassDetail();
	},
	onBackPress() {  
	  return false
	},  
	onShow() {
		if (uni.getStorageSync('langType') == 'en-US') {
			uni.setNavigationBarTitle({
				title: 'code Success'
			});
		} else {
			uni.setNavigationBarTitle({
				title: '打卡成功'
			});
		}
	},
	methods: {
		init(obj){
			let start = obj.start_time * 1000;
			let end   = obj.stop_time * 1000;
			this.flag = true;
			this.date = getDatess(obj.start_time * 1000);
			this.originalDate = getDatess(start);
			this.startTime = `${
				new Date(start).getHours() > 9
					? new Date(start).getHours()
					: '0' + new Date(start).getHours()
			}:${
				new Date(start).getMinutes() > 9
					? new Date(start).getMinutes()
					: '0' + new Date(start).getMinutes()
			}`;
			this.endTime = `${
				new Date(end).getHours() > 9
					? new Date(end).getHours()
					: '0' + new Date(end).getHours()
			}:${
				new Date(end).getMinutes() > 9
					? new Date(end).getMinutes()
					: '0' + new Date(end).getMinutes()
			}`;
		},
		getVal(s) {
			this.star = s;
		},
		jumpStar() {
			uni.reLaunch({
				url: '/pages/tabbar/tabbar-2/tabbar-2'
			});
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
		width: 100%;
		background-color: #fff;
		text-align: center;
		border-radius: 12upx;
		padding-bottom: 60upx;
		margin-top: 60upx;
		image {
			width: 120upx;
			height: 120upx;
			margin: 100upx 288upx 30upx;
		}

		.code_title {
			margin: 20upx 0;
			font-size: 32upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}

		.code_class {
			font-size: 34upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}

		.code_teacher {
			margin: 20upx 0;
			display: flex;
			align-items: center;
			justify-content: space-around;
			text {
				&:nth-of-type(1) {
					width: 50%;
					font-size: 28upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(51, 51, 51, 1);
					text-align: right;
					padding-right: 15upx;
				}

				&:nth-of-type(2) {
					text-align: left;
					padding-left: 15upx;
					width: 50%;
					font-size: 28upx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
				}
			}
		}

		.code_time {
			display: flex;
			align-items: baseline;
			justify-content: space-around;
			text {
				&:nth-of-type(1) {
					width: 50%;
					font-size: 28upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(51, 51, 51, 1);
					text-align: right;
					padding-right: 15upx
				}

				&:nth-of-type(2) {
					width: 50%;
					text-align: left;
					padding-left: 15upx;
					font-size: 28upx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
					
				}
			}
		}

		.code_message {
			display: flex;
			align-items: center;
			justify-content: space-around;
			margin: 20upx 0;

			text {
				&:nth-of-type(1) {
					width: 50%;
					font-size: 28upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(0, 0, 0, 1);
					text-align: right;
					padding-right: 15upx
				}

				&:nth-of-type(2) {
					text-align: left;
					padding-left: 15upx;
					width: 50%;
					font-size: 28upx;
					font-family: PingFangSC-Regular;
					font-weight: 500;
					color: rgba(0, 0, 0, 1);
				}
			}
		}

		.code_comment {
			padding: 0 32upx;

			p {
				text-align: left;
				font-size: 32upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				margin-bottom: 20upx;
			}

			textarea {
				text-align: left;
				width: auto;
				height: 262upx;
				background: rgba(249, 249, 249, 1);
				padding: 20upx;
				font-size: 28upx;
				font-weight: 400;
				line-height: 40upx;
			}
		}

		.code_start {
			text-align: left;
			padding: 0 32upx;
		}

		.code_btn {
			display: flex;
			flex-direction: column;
			padding: 0 32upx;

			text {
				margin: 10upx 0;
				line-height: 70upx;
				background: rgba(250, 212, 42, 1);
				border-radius: 16upx;
				font-size: 28upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);

				&:nth-of-type(2) {
					background: rgba(255, 255, 255, 1);
				}
			}
		}
	}
}
</style>
