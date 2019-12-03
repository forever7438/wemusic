<template>
	<ul class="time_list">
		<li v-for="(item, index) in dateList" @click="flag && selctitem(index)" :class="{ active: item.id == timeChecked }" :key="index">
			<p>
				<span class="date">{{ item.date }}</span>
				<span class="price">
					<span>$</span>
					{{ item.price }}
				</span>
			</p>
			<p class="time">{{ item.star + ' - ' + item.end }}</p>
			<p class="duration">{{ $t('index').Duration_course }} {{ item.time }} min</p>
		</li>
		<li v-if="!flag && addshow" class="add_time" @tap="toggleTab"><img src="/static/img/tianjiashichang@2x.png" /></li>
		<w-picker mode="dateTime" :defaultVal="date" :startYear="new Date().getFullYear().toString()" themeColor="#007AFF" @confirm="DateConfirm" ref="picker"></w-picker>
		<mpvue-picker
			themeColor="#007AFF"
			ref="mpvuePicker"
			mode="selector"
			:titleInfo="$t('index').Duration_course"
			:deepLength="1"
			:pickerValueDefault="[0]"
			@onConfirm="TimeConfirm"
			@onCancel="onCancel"
			:pickerValueArray="timeList"
		></mpvue-picker>
	</ul>
</template>

<script>
import wPicker from '@/components/w-picker/w-picker.vue';
import mpvuePicker from '@/components/mpvue-picker/mpvuePicker.vue';
export default {
	components: {
		wPicker,
		mpvuePicker
	},
	data() {
		return {
			date: [],
			timeChecked: {
				start_time: '',
				end_time: ''
			}
		};
	},
	created() {
		let myDate = new Date();
		let container = [myDate.getFullYear(), myDate.getMonth() + 1, myDate.getDate(), myDate.getHours(), myDate.getMinutes()];
		this.date = container;
		console.log(this.date);
	},
	props: {
		isVip: String,
		flag: Boolean, //事件开关
		timeList: Array,
		dateList: Array,
		addshow: {
			type: Boolean,
			default: true
		}
	},
	methods: {
		/**选中时间*/
		selctitem(index) {
			this.$emit();
		},
		onCancel() {},
		timeDate(time) {
			var date = new Date(time); // 增加8小时
			return date
				.toJSON()
				.substr(0, 19)
				.replace('T', ' ');
		},
		toggleTab() {
			if (this.isVip == '1' && this.dateList.length > 0) {
				uni.showToast({
					title: this.$t('index').Non_vip_only_one_class,
					icon: 'none'
				});
				return;
			}
			this.$refs.picker.show();
		},
		DateConfirm(val) {
			let timeVal = new Date(val.result).getTime() / 1000;
			this.timeChecked.start_time = timeVal;
			/**选择时长*/
			this.timePicker();
		},
		TimeConfirm(val) {
			let index = val.index[0];
			let time = this.timeList[index];
			this.timeChecked.end_time = this.timeChecked.start_time + time * 60;
			this.$emit('confirmTime', this.timeChecked);
		},
		/**选择时长*/
		timePicker() {
			this.$refs.mpvuePicker.show();
		}
	}
};
</script>

<style lang="less" scoped>
ul {
	li.active {
		border: 2upx solid #fad42a;
	}

	li.add_time {
		text-align: center;
		padding: 80upx 0;

		img {
			width: 72upx;
			height: 72upx;
		}
	}

	li {
		text-align: left;
		display: block;
		height: 232upx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0 8upx 20upx 4upx rgba(179, 188, 198, 0.2);
		border-radius: 16upx;
		margin: 30upx;
		padding: 30upx;

		.date {
			font-size: 40upx;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}

		.price {
			float: right;
			color: #fad42a;
			font-size: 60upx;

			span {
				font-size: 30upx;
			}
		}

		.time {
			font-size: 32upx;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
			margin: 12upx 0 30upx 0;
		}

		.d {
			font-size: 28upx;
		}

		.duration {
			font-size: 28upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(153, 153, 153, 1);
			line-height: 40upx;
		}
	}
}
</style>
