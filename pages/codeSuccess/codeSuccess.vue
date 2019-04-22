<template>
	<view class="code_success">
		<view class="code_content">
			<image src="../../static/img/chenggong.png"></image>
			<view class="code_title"><text>打卡成功</text></view>
			<text class="code_class">钢琴兴趣班12期</text>
			<view class="code_teacher">
				<text>老师</text>
				<text>Edward</text>
			</view>
			<view class="code_time">
				<text>上课时间</text>
				<text>2019年11月11日 8:30 ~ 9:30</text>
			</view>
			<view class="code_message">
				<text>备注</text>
				<text>正常</text>
			</view>
			<view class="code_comment">
				<p>评语</p>
				<textarea placeholder="输入对课程的评价" v-model="content"></textarea>
			</view>
			<view class="code_start"><startclass title="星级" :size="16" :disabled="false" @sendVal="getVal"></startclass></view>
			<view class="code_btn">
				<text @tap="addStar">提交</text>
				<text>跳过</text>
			</view>
		</view>
	</view>
</template>

<script>
import commentStarClass from '../../components/comment/commentStarClass.vue';
import startclass from '../../components/starclass.vue';
export default {
	components: {
		commentStarClass,
		startclass
	},
	data() {
		return {
			punch_id: '5',
			star: '',
			content: ''
		};
	},
	methods: {
		getVal(s) {
			this.star = s;
		},
		addStar() {
			if (!this.star) {
				uni.showToast({
					title: '请填写星级',
					icon: 'none'
				});
				return;
			}
			if (!this.content) {
				uni.showToast({
					title: '请填写评价内容',
					icon: 'none'
				});
				return;
			}
			this.ajax({
				url: 'studentclass/assess',
				data: {
					punch_id: this.punch_id,
					star: this.star,
					content: this.content
				},
				success: res => {
					if (res.data.body === 'success') {
						uni.showToast({
							title: '评价成功',
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

<style lang="less">
.code_success {
	padding: 64upx 30upx 40upx 30upx;
	background-color: #333;

	.code_content {
		width: 100%;
		background-color: #fff;
		text-align: center;
		border-radius: 12upx;

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
			margin: 20upx 220upx;
			display: flex;
			align-items: center;
			justify-content: space-around;

			text {
				&:nth-of-type(1) {
					font-size: 28upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(51, 51, 51, 1);
				}

				&:nth-of-type(2) {
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
			margin: 0 150upx;

			text {
				&:nth-of-type(1) {
					width: 112upx;
					font-size: 28upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(51, 51, 51, 1);
				}

				&:nth-of-type(2) {
					width: 240upx;
					text-align: left;
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
			margin: 20upx 260upx;

			text {
				&:nth-of-type(1) {
					font-size: 28upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(0, 0, 0, 1);
				}

				&:nth-of-type(2) {
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
