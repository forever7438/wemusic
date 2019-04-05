<template>
	<div class="classAdjustment">
		<div class="lesson_message">
			<image src="../../static/img/demo.jpg"></image>
			<p>
				<span>吉他快速入门</span>
				<uni-rate :value="3" :isFill="false"></uni-rate>
				<s>教师名称 一对二</s>
			</p>
		</div>
		<div class="lesson_date">
			<h3>调整日期</h3>
			<span>2019年1月9日</span>
			<p>原始日期 2019年1月6日</p>
		</div>
		<div class="lesson_time">
			<h3>调整上课时间段</h3>
			<span>13:30 ~14:30</span>
			<p>该教师当天已预约时间段 8:00 ~ 9:00 10:00 ~ 11:00</p>
		</div>
		<div class="adjustment_reason">
			<h3>调整理由</h3>
			<textarea></textarea>
		</div>
	</div>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue';
	export default {
		components: {
			uniRate
		},
		data() {
			return {
				value: 3
			};
		}
	};
</script>

<style lang="less" scoped>
	h3 {
		text-align: left;
		margin: 30upx 0;
		font-size: 48upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}

	.classAdjustment {
		padding: 0 15upx;

		.lesson_message {
			margin-top: 20upx;
			display: flex;
			align-items: center;

			image {
				width: 254upx;
				height: 160upx;
			}

			p {
				text-align: left;
				margin-left: 40upx;

				span {
					font-size: 32upx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: rgba(26, 26, 26, 1);
				}

				s {
					font-size: 24upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(153, 153, 153, 1);
				}
			}
		}

		.lesson_date {
			text-align: left;

			span {
				display: inline-block;
				padding: 20upx;
				background: rgba(51, 51, 51, 1);
				border-radius: 8upx;
				font-size: 28upx;
				font-family: PingFangSC-Regular;
				color: rgba(255, 255, 255, 1);
				font-size: 14px;
				font-weight: 400;
			}

			p {
				margin-top: 30upx;
				font-size: 32upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(102, 102, 102, 1);
			}
		}

		.lesson_time {
			text-align: left;

			span {
				display: inline-block;
				padding: 20upx;
				background: rgba(51, 51, 51, 1);
				border-radius: 8upx;
				font-size: 24upx;
				font-family: PingFangSC-Regular;
				color: rgba(255, 255, 255, 1);
			}

			p {
				margin-top: 30upx;
				font-size: 28upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(102, 102, 102, 1);
			}
		}

		.adjustment_reason {
			text-align: left;

			textarea {
				width: auto;
				height: 266upx;
				padding: 20upx;
				background: rgba(249, 249, 249, 1);
				border-radius: 12upx;
			}
		}
	}
</style>
