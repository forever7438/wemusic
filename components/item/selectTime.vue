<template>
	<ul class="time_list">
		<li v-for="(item, index) in 3" @click="flag && selctitem(index)" :class="{ active: item.active }" :key="index">
			<p>
				<span class="date">2019年11月11日</span>
				<span class="price">
					<span>$</span>
					11.00
				</span>
			</p>
			<p class="time">9:00 - 10:00</p>
			<p class="duration">时长1小时</p>
		</li>
		<li v-if="!flag" class="add_time" @tap="toggleTab"><img src="/static/img/tianjiashichang@2x.png" /></li>
		<w-picker mode="dateTime" 
				  :defaultVal="date" 
				  themeColor="#007AFF"
				  @confirm="DateConfirm" 
				  ref="picker"></w-picker>
		<mpvue-picker themeColor="#007AFF"
					  ref="mpvuePicker" 
					  mode="selector" 
					  titleInfo="选择时长"
					  :deepLength="1" 
					  :pickerValueDefault="[0]"
					  @onConfirm="TimeConfirm" 
					  @onCancel="onCancel" 
					  :pickerValueArray="timeList"></mpvue-picker>
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
			date:[],
			time_checked:{},
			timeList:[]
		};
	},
	created() {
		let myDate = new Date();
		let container = [
			myDate.getFullYear(),
			myDate.getMonth(),
			myDate.getDate(),
			myDate.getHours(),
			myDate.getMinutes()
		]
		this.date = container;
	},
	props: {
		flag: Boolean //事件开关
	},
	methods: {
		onCancel(){
			console.log('cancel')
		},
		toggleTab() {
			this.$refs.picker.show();
		},
		DateConfirm(val) {
				console.log(val)
				let dateVal = val[0]+'-'+val[1]+'-'+val[2]+' '+val[3]+':'+val[4]+':00'
				let timeVal = (new Date(dateVal).getTime())/1000
				this.time_checked.start_time = timeVal;
				/**选择时长*/
				this.timeList = [{
						label: '中国',
						value: 1
					},
					{
						label: '俄罗斯',
						value: 2
					},
					{
						label: '美国',
						value: 3
					},
					{
						label: '日本',
						value: 4
					}
				]
				console.log(this.timeList)
				this.timePicker()
		},
		TimeConfirm(val){
			this.time_checked.end_time = this.time_checked.start_time + (60 * 60);
		},
		/**选择时长*/
		timePicker() {
			this.$refs.mpvuePicker.show()
		},
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
