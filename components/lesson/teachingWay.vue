<template>
	<div class="lesson_content" :class="{orderShow:!orderShow}">
		<view v-if="!orderShow">
			<text class="teacher_class">{{ $t('index').Choosing_Teaching_Mode }}</text>
			<view class="way_meun">
				<text :class="request.people_num === 0 ? 'active_meun' : ''" @click="changeWay(0)">{{ $t('index').One_on_one }}</text>
				<text :class="request.people_num === 1 ? 'active_meun' : ''" @click="changeWay(1)">{{ $t('index').A_pair_of_two }}</text>
				<text :class="request.people_num === 2 ? 'active_meun' : ''" @click="changeWay(2)">{{ $t('index').A_pair_of_three }}</text>
			</view>
			<p class="message">
				<span></span>
				<span class="info">{{ $t('index').way_tip }}</span>
			</p>
			<p v-if='isVip==1' class="vipMessage">
				<span>{{ $t('index').vip_tip }}</span>
				<span>{{ $t('index').open_vip }}</span>
			</p>
			<text class="teacher_class">{{ $t('index').Duration_course }}</text>
		</view>
		<view>
			<selectTime :timeList="timeList" :flag="orderShow" :year="(new Date()).getFullYear()" :dateList="dateList"
			 @selctTime="selctTime" @confirmTime="confirmTime"></selectTime>
		</view>
		<span v-if="!orderShow" class="sign_up" @click="createOrder">{{ $t('index').next }}</span>
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
			isVip: String,
			classId: Number,
			lessonType: {
				type: String,
				default: '4'
			}, //lessonType类型判断  1为全部  2为待支付  3为待开课  4为已完成
			listInfo: Array,
			title: String,
			teacherId: String,
			request: Object,
			orderShow: Boolean,
		},
		data() {
			return {
				image: '../../static/img/demo.jpg',
				timeList: [],
				dateList: [],
				bottomTop: 0
			};
		},
		methods: {
			/**确认上课时间*/
			confirmTime(obj) {
				obj.teacher_id = this.teacherId;
				obj.music_sun_id = this.classId;
				obj.people_num = this.request.people_num
				this.addClassTime(obj);
			},
			/**添加上课时间*/
			addClassTime(request, change_index = -1) {
				if ((request.start_time + 300) < new Date().getTime() / 1000) {
					uni.showToast({
						title: this.$t('index').Start_time_should,
						icon: "none"
					})
					return
				}
				this.ajax({
					url: 'userorder/add_class',
					data: request,
					success: res => {
						if (res.data.body === 'success') {
							let timeItem = this.timeDate(res.data.data);
							if (change_index > -1) {
								Vue.set(this.dateList, change_index, newValue)
							} else {
								this.dateList.push(timeItem);
							}
							let change = {
								key: 'class_list_id',
								value: timeItem.id,
								price: timeItem.price,
								change_index: change_index
							};
							this.$emit('changeRequest', change);
						} else {
							uni.showToast({
								title: this.$t('index').The_teacher_is_busy,
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
						title: this.$t('index').Please_choose_the_teaching_time,
						icon: 'none'
					});
				} else {
					this.$emit('changeRequest', {
						key: 'orderShow',
						value: true
					});
				}
			},
			selctTime(index) {
				this.dateList[index].isActive = !this.dateList[index].isActive;
				this.$emit('changeRequest', {
					key: 'class_list_id',
					value: this.dateList[index].id
				});
			},
			changeWay(val) {
				this.$emit('changeRequest', {
					key: 'people_num',
					value: val
				});
				if (this.dateList.length > 0) {
					/**清除request class_id*/
					this.$emit('changeRequest', {
						key: 'clear_class_id'
					});
					let key;
					let change_request = {
						teacher_id: this.teacherId,
						music_sun_id: this.classId,
						people_num: this.request.people_num
					}
					for (key in this.dateList) {
						change_request.start_time = this.dateList[key].start_time
						change_request.end_time = this.dateList[key].stop_time
						this.addClassTime(change_request, key)
					}
				}
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
				let date_s = new Date(Math.round(item.start_time * 1000));
				let date_e = new Date(Math.round(item.stop_time * 1000));
				item.date = date_s.getFullYear() + this.$t('index').year + this.number_(date_s.getMonth() + 1) + this.$t('index').month +
					this.number_(date_s.getDate()) +
					this.$t('index').day;
				item.star = this.number_(date_s.getHours()) + ':' + this.number_(date_s.getMinutes());
				item.end = this.number_(date_e.getHours()) + ':' + this.number_(date_e.getMinutes());
				item.time = (item.stop_time - item.start_time) / 60;
				item.isActive = true;
				return item;
			},
			number_(num) {
				if (num < 10) {
					num = '0' + num;
				}
				return num;
			}
		},
		created() {
			this.getTimeList(this.classId);
			/**获取可视窗口*/
			uni.getSystemInfo({
				success: function(res) {
					this.bottomTop = res.windowHeight - 50
					console.log(this.bottomTop)
				}
			});
		}
	};
</script>

<style lang="less" scoped>
	.orderShow{
		padding-bottom: 120upx;
	}
	.lesson_content {
		.sign_up {
			text-align: center;
			//margin-top: 40upx;
			display: inline-block;
			width: 100%;
			line-height: 100upx;
			background: rgba(250, 212, 42, 1);
			font-size: 28upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
			position: fixed;
			bottom: 0;
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

			.active_meun {
				background: #fad42a;
				color: rgba(51, 51, 51, 1);
			}

			text {
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

			text:first-child {
				margin: 0;
			}
		}
	}
</style>
