<template>
	<div class="class">
		<ul v-if="classList.length">
			<li v-for="(item, index) in classList" :key="index">
				<div class="class_title">
					<h3>{{ item.class_name }}</h3>
					<p>{{ (item.start_time * 1000) | classTime }} - {{ (item.stop_time * 1000) | classTime }}</p>
					<s>{{ item.name }}</s>
				</div>
				<div class="class_operation">
					<span v-if="!isStudent" @click="showCard(item.class_id)">{{ $t('index').QR_code }}</span>
					<span v-else @click="sendCard(item.class_id)">{{ $t('index').clock_in }}</span>
					<span>
						<navigator hover-class="none" :url="'/pages/addTask/addTask?classId=' + item.class_id">{{ $t('index').task }}</navigator>
					</span>
				</div>
				<navigator hover-class="none" :url="'/pages/classAdjustment/classAdjustment?classId=' + item.class_id">
					<div class="class_adjustment">{{ $t('index').changing_course }}</div>
				</navigator>
			</li>
		</ul>
		<noContent v-else :title="$t('index').No_data"></noContent>
	</div>
</template>

<script>
let _this = '';
import noContent from '../noContent.vue';
export default {
	props: {
		classList: Array,
		isStudent: Boolean
	},
	components: {
		noContent
	},
	onLoad() {
		_this = this;
	},
	filters: {
		classTime: time => {
			return `${new Date(time).getHours() > 9 ? new Date(time).getHours() : '0' + new Date(time).getHours()}:${
				new Date(time).getMinutes() > 9 ? new Date(time).getMinutes() : '0' + new Date(time).getMinutes()
			}`;
		}
	},
	methods: {
		//开启扫码功能
		sendCard(classId) {
			uni.scanCode({
				success: res => {
					this.ajax({
						url: 'studentclass/punch',
						data: {
							class_id: res.result
						},
						success: res => {
							if (res.data.body == 'success') {
								uni.navigateTo({
									url: '/pages/codeSuccess/codeSuccess?classId=' + classId + '&punch_id=' + res.data.data.punch_id
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
