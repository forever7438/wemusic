<template>
	<div class="classAdjustment">
		<div>
			<div class="lesson_message">
				<image src="../../static/img/demo.jpg"></image>
				<p>
					<span>吉他快速入门</span>
					<startclass :star="Number(3.5)" :size="13" starColor="#666666"></startclass>
					<s>教师名称 一对二</s>
				</p>
			</div>
			<div class="lesson_date">
				<h3>{{$t('index').adjustDate }}</h3>
				<span @tap="toggleTab('date')">{{ date }}</span>
				<w-picker mode="date" title="选择日期" :defaultVal="[0, 0, 0]" startYear="2014" @confirm="onConfirmDate" ref="pickerDate"></w-picker>
				<p>原始日期 2019年1月6日</p>
			</div>
			<div class="lesson_time">
				<h3>{{$t('index').adjustClassTime }}</h3>
				<span @tap="toggleTab('startTime')">{{ startTime }}</span>
				~
				<span @tap="toggleTab('endTime')">{{ endTime }}</span>
				<w-picker mode="time" :title="title" :defaultVal="[0, 0, 0]" startYear="2014" @confirm="onConfirmTime" ref="pickerTime"></w-picker>
				<p>该教师当天已预约时间段 8:00 ~ 9:00 10:00 ~ 11:00</p>
			</div>
			<div class="adjustment_reason">
				<h3>{{$t('index').reasonsForAdjustment }}</h3>
				<textarea v-model="body"></textarea>
			</div>
		</div>
		<span class="sign_up" @tap="adjustment">{{$t('index').adjustmentClass }}</span>
	</div>
</template>

<script>
	import startclass from '../../components/starclass.vue';
	import wPicker from '@/components/w-picker/w-picker.vue';
	export default {
		components: {
			startclass,
			wPicker
		},
		data() {
			return {
				classId: '',
				title: '开始时间',
				date: '2019年01月09日',
				dates: '',
				startTime: '8:00',
				endTime: '9:00',
				body: ''
			};
		},
		onLoad(obj) {
			this.classId = obj.classId;
		},
		methods: {
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
			},
			onConfirmTime(val) {
				switch (this.title) {
					case '开始时间':
						this.startTime = `${val[0]}:${val[1]}`;
						break;
					default:
						this.endTime = `${val[0]}:${val[1]}`;
				}
			},
			adjustment() {
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
				this.ajax({
					url: 'studentclass/revision_class',
					data: {
						class_id: this.classId,
						start_time: new Date(`${this.dates} ${this.startTime}`).getTime(),
						end_time: new Date(`${this.dates} ${this.endTime}`).getTime(),
						body: this.body
					},
					success: res => {
						if (res.data.body === 'success') {
							uni.showToast({
								title: '申请已提交,请耐心等待',
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
