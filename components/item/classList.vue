<template>
	<div class="class">
		<ul v-if="classList.length">
			<li v-for="(item, index) in 6" :key="index">
				<div class="class_title">
					<h3>吉他快速入门</h3>
					<p>9:00 - 10:00</p>
					<s>学生 姓名</s>
				</div>
				<div class="class_operation">
					<span v-if="isTeacher" @click="showCard(1)">二维码</span>
					<span v-else @click="sendCard">打卡</span>
					<span><navigator hover-class="none" url="/pages/addTask/addTask?classId=1">作业</navigator></span>
				</div>
				<navigator hover-class="none" url="/pages/classAdjustment/classAdjustment?classId=1"><div class="class_adjustment">调课</div></navigator>
			</li>
		</ul>
		<noContent v-else title="暂无课程"></noContent>
	</div>
</template>

<script>
let _this = '';
import noContent from '../noContent.vue';
export default {
	props: {
		classList: Array,
		isTeacher: Boolean
	},
	components: {
		noContent
	},
	onLoad() {
		_this = this;
	},
	methods: {
		//开启扫码功能
		sendCard() {
			uni.scanCode({
				success: function(res) {
					console.log('条码类型：' + res.scanType);
					console.log('条码内容：' + res.result);
					_this.ajax({
						url: 'studentclass/punch',
						data: {
							class_id: res.result
						},
						success: res => {
							if (res.data.body == 'success') {
								uni.navigateTo({
									url: '/pages/codeSuccess/codeSuccess'
								});
							}
						}
					});
				}
			});
		},
		//展示二维码
		showCard(classId) {
			uni.navigateTo({
				url: '/pages/code/code?classId=' + classId,
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		}
	}
};
</script>

<style lang="less" scoped>
.class {
	ul {
		li {
			display: flex;
			justify-content: space-around;
			margin-top: 30upx;
			margin-left: 15upx;
			margin-right: 15upx;
			padding: 30upx 0;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0upx 8upx 20upx 4upx rgba(179, 188, 198, 0.2);
			border-radius: 16upx;

			&:last-child {
				margin-bottom: 80upx;
			}

			.class_title {
				padding-left: 20upx;
				padding-right: 80upx;

				h3 {
					text-align: left;
					font-size: 40upx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
				}

				p {
					margin: 20upx 0 36upx 0;
					font-size: 32upx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
				}

				s {
					font-size: 28upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(153, 153, 153, 1);
				}
			}

			.class_operation {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding-left: 30upx;

				span {
					font-size: 28upx;
					padding: 20upx 40upx;
					border-radius: 8upx;
					border: 2upx solid rgba(153, 153, 153, 1);
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(51, 51, 51, 1);
					text-align: center;
					&:nth-of-type(1) {
						margin-bottom: 18upx;
					}

					&:nth-of-type(2) {
						margin-top: 18upx;
					}
				}
			}

			.class_adjustment {
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				background: rgba(250, 212, 42, 1);
				border-radius: 8upx;
				padding: 0 20upx;
				font-size: 28upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
				margin-right: 20upx;
				margin-left: 10upx;
			}
		}
	}

	.no_content {
		height: 380upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		image {
			width: 216upx;
			height: 244upx;
		}

		text {
			font-size: 32upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(0, 0, 0, 0.5);
		}
	}
}
</style>
