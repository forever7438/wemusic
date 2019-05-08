<template>
	<view class="adjustment_detail">
		<view v-for="(item, index) in messageDetail" :key="index" class="adjustment_content">
			<image :src="item.photo || defaultImg"></image>
			<text class="adjustment_title">{{ item.student_name }}</text>
			<view v-if="isTeacher" class="adjustment_event">
				<text class="class_title">{{ item.class_name }}</text>
				<view class="event_adjust">
					<text>{{ $t('index').adjustment }}</text>
					<text>{{ (item.start_time * 1000) | yearTime }} {{ (item.start_time * 1000) | classTime }}-{{ (item.end_time * 1000) | classTime }}</text>
				</view>
				<view class="event_res">
					<text>{{ $t('index').reason }}</text>
					<text>{{ item.body }}</text>
				</view>
				<view v-if="item.type == 0" class="event_btn">
					<text @tap="editAdjustment('2', item.id)">{{ $t('index').no }}</text>
					<text @tap="editAdjustment('1', item.id)">{{ $t('index').yes }}</text>
				</view>
				<textarea v-if="item.type == 0" class="class_res" v-model="data" placeholder="请填写理由"></textarea>
				<text v-else class="class_res">{{ item.data }}</text>
			</view>
			<view v-else class="adjustment_reason">
				<text class="class_title">钢琴兴趣班12期第10课时</text>
				<view class="event_adjust">
					<text>{{ $t('index').adjustment }}</text>
					<text>{{ (item.start_time * 1000) | yearTime }} {{ (item.start_time * 1000) | classTime }}-{{ (item.end_time * 1000) | classTime }}</text>
				</view>
				<view class="event_res">
					<text>{{ $t('index').reason }}</text>
					<text>{{ item.body }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			data: '',
			defaultImg: '../../static/img/lesson1.jpg',
			isTeacher: false,
			messageId: '',
			messageDetail: []
		};
	},
	onShow() {
		if (uni.getStorageSync('langType') == 'en-US') {
			uni.setNavigationBarTitle({
				title: 'adjustment Detail'
			});
		} else {
			uni.setNavigationBarTitle({
				title: '调整详情'
			});
		}
	},
	onLoad(obj) {
		this.messageId = obj.messageId;
		uni.getStorageSync('type') == 1 ? (this.isTeacher = false) : (this.isTeacher = true);
		this.getMesageDeatil();
	},
	filters: {
		classTime: time => {
			return `${new Date(time).getHours() > 9 ? new Date(time).getHours() : '0' + new Date(time).getHours()}:${
				new Date(time).getMinutes() > 9 ? new Date(time).getMinutes() : '0' + new Date(time).getMinutes()
			}`;
		},
		yearTime: time => {
			return `${new Date(time).getFullYear()}年${new Date(time).getMonth() + 1}月${new Date(time).getDate()}日`;
		}
	},
	methods: {
		//获取调整详情
		getMesageDeatil() {
			this.ajax({
				url: uni.getStorageSync('type') == 1 ? 'studentclass/message_info' : 'teacherclass/message_info',
				data: {
					message_id: this.messageId
				},
				success: res => {
					this.messageDetail = res.data.data;
				}
			});
		},
		//处理调课申请
		editAdjustment(type, revision_id) {
			this.ajax({
				url: 'teacherclass/revision_update',
				data: {
					message_id: this.messageId,
					revision_id: revision_id,
					data: this.data,
					type: type
				},
				success: res => {
					if (res.data.body === 'success') {
						uni.showToast({
							title: '处理成功',
							icon: 'none'
						});
						setTimeout(() => {
							uni.redirectTo({
								url: '/pages/tabbar/tabbar-2/tabbar-2'
							});
						}, 1500);
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
.adjustment_detail {
	padding: 20upx 30upx 0;
	display: flex;

	.adjustment_content {
		image {
			width: 90upx;
			height: 90upx;
			border-radius: 50%;
			margin-right: 30upx;
		}

		.adjustment_title {
			font-size: 32upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}

		.adjustment_event {
			margin-bottom: 20upx;
			margin-left: 120upx;

			.class_res {
				padding: 24upx;
				display: inline-block;
				width: 420upx;
				height: 130upx;
				background: rgba(237, 239, 242, 1);
				font-size: 28upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
			}
		}

		.adjustment_event,
		.adjustment_reason {
			padding: 36upx 30upx;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0upx 8upx 18upx 0upx rgba(163, 165, 168, 0.17);
			border-radius: 16upx;
			margin-left: 120upx;
			.class_title {
				display: inline-block;
				font-size: 32upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				margin-bottom: 20upx;
			}

			.event_adjust,
			.event_res {
				display: flex;
				align-items: center;
				margin-bottom: 20upx;

				text {
					&:nth-of-type(1) {
						font-size: 30upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(153, 153, 153, 1);
						margin-right: 20upx;
					}

					&:nth-of-type(2) {
						font-size: 28upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(51, 51, 51, 1);
					}
				}
			}

			.event_btn {
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 28upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(255, 255, 255, 1);

				text {
					text-align: center;
					width: 126upx;
					line-height: 44upx;
					border-radius: 8upx;

					&:nth-of-type(1) {
						background: rgba(205, 76, 56, 1);
					}

					&:nth-of-type(2) {
						background: rgba(79, 205, 56, 1);
					}
				}
			}
		}
	}
}
</style>
