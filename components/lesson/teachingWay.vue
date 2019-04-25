<template>
	<div class="lesson_content">
		<view v-if="!orderShow">
			<text class="teacher_class">选择授课方式</text>
			<ul class="way_meun">
				<li :class="{ active: request.people_num === 0 }" @click="changeWay(0)">一对一</li>
				<li :class="{ active: request.people_num === 1 }" @click="changeWay(1)">一对二</li>
				<li :class="{ active: request.people_num === 2 }" @click="changeWay(2)">一对三</li>
			</ul>
			<p class="message">
				<span></span>
				<span class="info">一对二、一对三的课程，您可以邀请朋友一同上课，更加优惠。</span>
			</p>
			<p class="vipMessage">
				<span>您还不是WeMusic会员，可享受一节预约课，如果想要上更多课程，请前往开通会员。</span>
				<span>开通会员</span>
			</p>
			<text class="teacher_class">选择时长</text>
		</view>
		<selectTime :timeList="timeList" :flag="orderShow" :dateList="dateList" @selctTime="selctTime" @confirmTime="confirmTime"></selectTime>
		<span v-if="!orderShow" class="sign_up" @click="createOrder">下一步</span>
	</div>
</template>

<script>
import startclass from '../starclass.vue';
import selectTime from '../item/selectTime.vue';
export default {
	components: {
		startclass,
		selectTime
	},
	props: {
		classId: String,
		lessonType: {
			type: String,
			default: '4'
		}, //lessonType类型判断  1为全部  2为待支付  3为待开课  4为已完成
		listInfo: Array,
		title: String,
		teacherId: String,
		request: Object,
		orderShow: Boolean
	},
	data() {
		return {
			image: '../../static/img/demo.jpg',
			timeList: [],
			dateList: []
		};
	},
	methods: {
		/**确认上课时间*/
		confirmTime(obj) {
			obj.teacher_id = this.teacherId;
			obj.music_sun_id = this.classId;
			this.addClassTime(obj);
		},
		/**添加上课时间*/
		addClassTime(request) {
			this.ajax({
				url: 'userorder/add_class',
				data: request,
				success: res => {
					if (res.data.body === 'success') {
						let timeItem = this.timeDate(res.data.data);
						this.dateList.push(timeItem);
						let change = {
							key: 'class_list_id',
							value: timeItem.id,
							price: timeItem.price
						};
						this.$emit('changeRequest', change);
					} else {
						uni.showToast({
							title: 'The teacher is busy during this time',
							icon: 'none'
						});
					}
				}
			});
		},
		createOrder() {
			/**是否选择时间*/
			if (this.request.class_list_id == '' || this.request.class_list_id == 'underfid') {
				uni.showToast({
					title: '请选择授课时间',
					icon: 'none'
				});
			} else {
				this.$emit('changeRequest', { key: 'orderShow', value: true });
			}
		},
		selctTime(index) {
			this.dateList[index].isActive = !this.dateList[index].isActive;
			this.$emit('changeRequest', { key: 'class_list_id', value: this.dateList[index].id });
		},
		changeWay(val) {
			this.$emit('changeRequest', { key: 'people_num', value: val });
		},
		/**获取时长*/
		getTimeList(classId) {
			this.ajax({
				url: 'userorder/time_list',
				data: {
					class_id: classId
				},
				success: res => {
					if (res.data.body === 'success') {
						this.timeList = res.data.data;
					}
				}
			});
		},
		timeDate(item) {
			let date_s = new Date(item.start_time * 1000);
			let date_e = new Date(item.stop_time * 1000);
			date_s = date_s
				.toJSON()
				.substr(0, 19)
				.replace('T', ' ');
			date_e = date_e
				.toJSON()
				.substr(0, 19)
				.replace('T', ' ');
			item.date = date_s.substr(0, 4) + '年' + date_s.substr(5, 2) + '月' + date_s.substr(8, 2) + '日';
			item.star = date_s.substr(11, 5);
			item.end = date_e.substr(11, 5);
			item.time = (item.stop_time - item.start_time) / 60;
			item.isActive = true;
			return item;
		}
	},
	created() {
		this.getTimeList(this.classId);
	}
};
</script>

<style lang="less" scoped>
.lesson_content {
	.sign_up {
		text-align: center;
		margin-top: 40upx;
		display: inline-block;
		width: 100%;
		line-height: 100upx;
		background: rgba(250, 212, 42, 1);
		font-size: 28upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
	.teacher_class {
		font-size: 48upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		margin: 0 30upx;
	}
	.vipMessage {
		background: linear-gradient(135deg, rgba(255, 234, 188, 1) 0%, rgba(234, 192, 100, 1) 100%);
		border-radius: 16upx;
		padding: 30upx;
		overflow: hidden;
		margin: 0 30upx 60upx 30upx;
		span:first-child {
			width: 480upx;
			display: inline-block;
			font-size: 24upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(128, 99, 36, 1);
			line-height: 40upx;
			padding: 0;
		}
		span:nth-child(2) {
			background: rgba(255, 255, 255, 1);
			border-radius: 20upx;
			padding: 4upx 12upx;
			font-size: 24upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(128, 99, 36, 1);
			float: right;
			margin: 20upx 0;
		}
	}
	.message {
		overflow: hidden;
		position: relative;
		margin: 34upx 30upx 60upx 30upx;
		font-size: 24upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		span:first-child {
			background: url('/static/img/提示.png');
			background-size: 100% 100%;
			display: inline-block;
			width: 44upx;
			height: 44upx;
			float: left;
			position: absolute;
			top: 0;
			left: 0;
		}
		span:nth-child(2) {
			display: inline-block;
			margin-left: 64upx;
		}
	}
	.way_meun {
		margin: 0 30upx;
		padding-top: 40upx;
		.active {
			background: #fad42a;
			color: rgba(51, 51, 51, 1);
		}
		li {
			display: inline;
			background: rgba(229, 228, 228, 1);
			border-radius: 40upx;
			padding: 4upx 40upx;
			color: rgba(153, 153, 153, 1);
			margin-left: 30upx;
			font-size: 28upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
		}
		li:first-child {
			margin: 0;
		}
	}
}
</style>
