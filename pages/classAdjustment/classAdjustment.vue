<template>
	<div class="classAdjustment">
		<div>
			<div class="lesson_message" v-if='flag'>
				<image :src="classDetail.class_sun.class_photo || defaultImg"></image>
				<p>
					<span>{{classDetail.class_sun.class_name}}</span>
					<startclass :star="Number(classDetail.class_sun.star)" :size="13" starColor="#666666"></startclass>
					<s>{{classDetail.class_sun.teacher_name}}</s>
				</p>
			</div>
			<div class="lesson_date">
				<h3>{{ $t('index').adjustDate }}</h3>
				<span @tap="toggleTab('date')">{{ date }}</span>
				<w-picker mode="date" title="选择日期" :defaultVal="nowDate" :startYear="nowYear" @confirm="onConfirmDate" ref="pickerDate"></w-picker>
				<p>原始日期 {{ originalDate }}</p>
			</div>
			<div class="lesson_time">
				<h3>{{ $t('index').adjustClassTime }}</h3>
				<span @tap="toggleTab('startTime')">{{ startTime }}</span>
				~
				<span @tap="toggleTab('startTime')">{{ endTime }}</span>
				<w-picker mode="time" :title="title" :defaultVal="[0, 0, 0]" startYear="2019" @confirm="onConfirmTime" ref="pickerTime"></w-picker>
				<!-- <p>该教师当天已预约时间段 8:00 ~ 9:00 10:00 ~ 11:00</p> -->
			</div>
			<div class="adjustment_reason">
				<h3>{{ $t('index').reasonsForAdjustment }}</h3>
				<textarea v-model="body"></textarea>
			</div>
		</div>
		<span class="sign_up" @tap="adjustment">{{ $t('index').adjustmentClass }}</span>
	</div>
</template>

<script>
	import {
		getDatess
	} from '../../common/common.js';
	import startclass from '../../components/starclass.vue';
	import wPicker from '@/components/w-picker/w-picker.vue';
	export default {
		components: {
			startclass,
			wPicker
		},
		data() {
			return {
				flag: false,
				defaultImg: '../../static/img/demo.jpg',
				classDetail: {},
				classId: '',
				title: '开始时间',
				date: '',
				dates: '',
				originalDate: '',
				startTime: '',
				endTime: '',
				body: '',
				nowDate: [],
				nowYear: '2019',
				time: '',
				is_change: false,
				init: {}
			};
		},
		onLoad(obj) {
			let myDate = new Date();
			this.nowDate = [0, myDate.getMonth(), myDate.getDate()];
			this.nowYear = (myDate.getFullYear()).toString();
			this.classId = obj.classId;
			this.getClassDetail();
		},
		onShow() {
			if (uni.getStorageSync('langType') == 'en-US') {
				uni.setNavigationBarTitle({
					title: 'class Adjustment'
				});
			} else {
				uni.setNavigationBarTitle({
					title: '调课'
				});
			}
		},
		filters: {
			classTime: time => {
				return `${new Date(time).getHours() > 9 ? new Date(time).getHours() : '0' + new Date(time).getHours()}:${
				new Date(time).getMinutes() > 9 ? new Date(time).getMinutes() : '0' + new Date(time).getMinutes()
			}`;
			}
		},
		methods: {
			//获取课程详情
			getClassDetail() {
				this.ajax({
					url: 'music/class_sun_class',
					data: {
						class_sun_id: this.classId
					},
					success: res => {
						this.flag = true;
						this.classDetail = res.data.data;
						let start = this.classDetail.class_sun.start_time * 1000
						let end = this.classDetail.class_sun.stop_time * 1000
						this.date = getDatess(start);
						this.originalDate = getDatess(start);
						/**课程时长*/
						this.time = (end - start) / 60000
						this.dates =
							`${new Date(start).getFullYear()}-${this.forMatNum(new Date(start).getMonth() + 1)}-${this.forMatNum(new Date(start).getDate())}`;
						this.startTime =
							`${
								new Date(start).getHours() > 9
									? new Date(start).getHours()
									: '0' + new Date(start).getHours()
							}:${
								new Date(start).getMinutes() > 9
									? new Date(start).getMinutes()
									: '0' + new Date(start).getMinutes()
							}`;
						this.endTime =
							`${
								new Date(end).getHours() > 9
									? new Date(end).getHours()
									: '0' + new Date(end).getHours()
							}:${
								new Date(end).getMinutes() > 9
									? new Date(end).getMinutes()
									: '0' + new Date(end).getMinutes()
							}`;

						this.init.dates = this.dates
						this.init.startTime = this.startTime
						// console.log(this.init)
					}
				});
			},
			toggleTab(type) {
				switch (type) {
					case 'date':
						this.$refs.pickerDate.show();
						break;
					case 'startTime':
						this.title = '开始时间';
						this.$refs.pickerTime.show();
						break;
					default:
						this.title = '结束时间';
						this.$refs.pickerTime.show();
				}
			},
			onConfirmDate(val) {
				this.date = `${val[0]}年${val[1]}月${val[2]}日`;
				this.dates = `${val[0]}-${val[1]}-${val[2]}`;
				this.changeStatus();
			},
			onConfirmTime(val) {
				switch (this.title) {
					case '开始时间':
						this.startTime = `${val[0]}:${val[1]}`;

						let hour = 0;
						let min = 0;
						if (this.time > 60) {
							hour = this.time / 60;
							min = this.time - (hour * 60)
						} else {
							min = this.time
						}
						hour = Number(val[0]) + hour;
						min = Number(val[1]) + min;
						if (min > 60) {
							hour += 1;
							min -= 60;
						}
						this.endTime = `${hour}:${min}`;
						this.changeStatus();
						break;
					default:
						this.endTime = `${val[0]}:${val[1]}`;
				}
			},
			forMatNum(num) {
				return num < 10 ? '0' + num : num + '';
			},
			changeStatus() {
				if (this.dates != this.init.dates ||
					this.startTime != this.init.startTime) {
					this.is_change = true
				} else {
					this.is_change = false
				}
			},
			adjustment() {
				if (!this.is_change) {
					uni.showToast({
						title: '未作任何更改',
						icon: 'none'
					});
					return;
				}
				if (!this.dates) {
					uni.showToast({
						title: '请调整日期',
						icon: 'none'
					});
					return;
				}
				if (!this.startTime || !this.endTime) {
					uni.showToast({
						title: '请调整上课时间段',
						icon: 'none'
					});
					return;
				}
				if (!this.body) {
					uni.showToast({
						title: '请填写调整理由',
						icon: 'none'
					});
					return;
				}
				let data = {
					class_id: this.classId,
					start_time: new Date(`${this.dates.replace(/-/g,'/')} ${this.startTime}`).getTime() / 1000,
					end_time: new Date(`${this.dates.replace(/-/g,'/')} ${this.endTime}`).getTime() / 1000,
					body: this.body
				}
				this.ajax({
					url: 'studentclass/revision_class',
					data: data,
					success: res => {
						if (res.data.body === 'success') {
							uni.showToast({
								title: '申请已提交,请耐心等待',
								icon: 'none'
							});
							setTimeout(() => {
								uni.redirectTo({
									url: '/pages/tabbar/tabbar-2/tabbar-2'
								});
							}, 1500)
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
		div {
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

		.sign_up {
			position: absolute;
			bottom: 0;
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
	}
</style>
