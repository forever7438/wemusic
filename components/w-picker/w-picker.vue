<template>
	<view class="w-picker">
		<div class="mask" :class="{ show: showPicker }" @tap="maskTap" catchtouchmove="true"></div>
		<view class="w-picker-cnt" :class="{ show: showPicker }">
			<view class="w-picker-hd" catchtouchmove="true">
				<view class="w-picker-btn" @tap="pickerCancel">取消</view>
				<view class="title_info">选择日期、时间</view>
				<view class="w-picker-btn" :style="{ color: themeColor }" @tap="pickerConfirm">确定</view>
			</view>
			<view class="w-picker-view" v-if="mode == 'dates'">
				<picker-view indicator-style="height: 40px;" :value="pickVal" @change="bindChange">
					<picker-view-column>
						<view class="item" v-for="(item, index) in data.years" :key="index">{{ item }}年</view>
					</picker-view-column>
				</picker-view>
			</view>
			<view class="w-picker-view" v-if="mode == 'date' || mode == 'dateTime'">
				<picker-view indicator-style="height: 40px;" :value="pickVal" @change="bindChange">
					<picker-view-column>
						<view class="item" v-for="(item, index) in data.years" :key="index">{{ item }}年</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item, index) in data.months" :key="index">{{ item }}月</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item, index) in data.days" :key="index">{{ item }}日</view>
					</picker-view-column>
					<picker-view-column v-if="mode == 'dateTime'">
						<view class="item" v-for="(item, index) in data.hours" :key="index">{{ item }}时</view>
					</picker-view-column>
					<picker-view-column v-if="mode == 'dateTime'">
						<view class="item" v-for="(item, index) in data.minutes" :key="index">{{ item }}分</view>
					</picker-view-column>
				</picker-view>
			</view>
			<view class="w-picker-view" v-if="mode == 'time'">
				<picker-view indicator-style="height: 40px;" :value="pickVal" @change="bindChange">
					<picker-view-column>
						<view class="item" v-for="(item, index) in data.hours" :key="index">{{ item }}</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item, index) in data.minutes" :key="index">{{ item }}</view>
					</picker-view-column>
				</picker-view>
			</view>
			<view class="w-picker-view" v-if="mode == 'region'">
				<picker-view indicator-style="height: 40px;" :value="pickVal" @change="bindChange">
					<picker-view-column>
						<view class="item" v-for="(item, index) in data.provinces" :key="index">{{ item.label }}</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item, index) in data.citys" :key="index">{{ item.label }}</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item, index) in data.areas" :key="index">{{ item.label }}</view>
					</picker-view-column>
				</picker-view>
			</view>
		</view>
	</view>
</template>

<script>
import { initPicker, initDays } from '@/common/util.js';
import provinces from './city-data/province.js';
import citys from './city-data/city.js';
import areas from './city-data/area.js';
export default {
	data() {
		return {
			result: [],
			data: {},
			checkArr: [],
			pickVal: [],
			showPicker: false
		};
	},
	computed: {},
	props: {
		mode: {
			type: String,
			default() {
				return 'date';
			}
		},
		themeColor: {
			type: String,
			default() {
				return '#f00';
			}
		},
		startYear: {
			type: String,
			default() {
				return '1970';
			}
		},
		endYear: {
			type: String,
			default() {
				return new Date().getFullYear() + '';
			}
		},
		defaultVal: {
			type: Array,
			default() {
				return [0, 0, 0, 0, 0];
			}
		}
	},
	watch: {
		mode() {
			this.initData();
		}
	},
	methods: {
		maskTap() {
			this.showPicker = false;
		},
		show() {
			this.showPicker = true;
		},
		hide() {
			this.showPicker = false;
		},
		pickerCancel() {
			this.$emit('cancel', this.checkArr);
			this.showPicker = false;
		},
		pickerConfirm(e) {
			this.$emit('confirm', this.checkArr);
			this.showPicker = false;
		},
		bindChange(val) {
			let arr = val.detail.value;
			let year = '',
				month = '',
				day = '',
				hour = '',
				minute = '',
				province,
				city,
				area;
			let checkArr = this.checkArr;
			let days = [];
			let mode = this.mode;
			switch (mode) {
				case 'date':
					year = this.data.years[arr[0]];
					month = this.data.months[arr[1]];
					day = this.data.days[arr[2]];
					if (year != checkArr[0]) {
						days = initDays(year, month);
						this.data.days = days;
					}
					if (month != checkArr[1]) {
						days = initDays(year, month);
						this.data.days = days;
					}
					this.checkArr = [year, month, day];
					break;
				case 'dates':
					year = this.data.years[arr[0]];
					if (year != checkArr[0]) {
						days = initDays(year, month);
						this.data.days = days;
					}
					this.checkArr = [year];
					break;
				case 'dateTime':
					year = this.data.years[arr[0]];
					month = this.data.months[arr[1]];
					day = this.data.days[arr[2]];
					hour = this.data.hours[arr[3]];
					minute = this.data.minutes[arr[4]];
					if (year != checkArr[0]) {
						days = initDays(year, month);
						this.data.days = days;
					}
					if (month != checkArr[1]) {
						days = initDays(year, month);
						this.data.days = days;
					}
					this.checkArr = [year, month, day, hour, minute];
					break;
				case 'time':
					hour = this.data.hours[arr[0]];
					minute = this.data.minutes[arr[1]];
					this.checkArr = [hour, minute];
					break;
				case 'region':
					province = this.data.provinces[arr[0]].label;
					city = this.data.citys[arr[1]].label;
					area = this.data.areas[arr[2]].label;
					if (province != checkArr[0]) {
						this.data.citys = citys[arr[0]];
						this.data.areas = areas[arr[0]][0];
						arr[1] = 0;
						arr[2] = 0;
						city = this.data.citys[arr[1]].label;
						area = this.data.areas[arr[2]].label;
					}
					if (city != checkArr[1]) {
						this.data.areas = areas[arr[0]][arr[1]];
						arr[2] = 0;
						area = this.data.areas[arr[2]].label;
					}
					this.checkArr = [province, city, area];
					break;
			}
			this.pickVal = arr;
		},
		initData() {
			let data = {};
			let mode = this.mode;
			let year, month, day, hour, minute, province, city, area;
			if (mode != 'region') {
				data = initPicker(this.startYear, this.endYear, this.mode);
			} else {
				data = {
					provinces: provinces,
					citys: citys[this.defaultVal[0]],
					areas: areas[this.defaultVal[0]][this.defaultVal[1]]
				};
			}
			this.data = data;
			this.pickVal = this.defaultVal;
			switch (mode) {
				case 'date':
					year = data.years[this.defaultVal[0]];
					month = data.months[this.defaultVal[1]];
					day = data.days[this.defaultVal[2]];
					this.checkArr = [year, month, day];
					break;
				case 'dates':
					year = data.years[this.defaultVal[0]];
					this.checkArr = [year];
					break;
				case 'dateTime':
					year = data.years[this.defaultVal[0]];
					month = data.months[this.defaultVal[1]];
					day = data.days[this.defaultVal[2]];
					hour = data.hours[this.defaultVal[3]];
					minute = data.minutes[this.defaultVal[4]];
					this.checkArr = [year, month, day, hour, minute];
					break;
				case 'time':
					hour = data.hours[this.defaultVal[0]];
					minute = data.minutes[this.defaultVal[1]];
					this.checkArr = [hour, minute];
					break;
				case 'region':
					province = data.provinces[this.defaultVal[0]].label;
					city = data.citys[this.defaultVal[1]].label;
					area = data.areas[this.defaultVal[2]].label;
					this.checkArr = [province, city, area];
					break;
			}
		}
	},
	mounted() {
		this.initData();
	}
};
</script>

<style lang="scss">
.w-picker {
	.mask {
		position: fixed;
		z-index: 1000;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.6);
		visibility: hidden;
		opacity: 0;
		transition: all 0.3s ease;
	}
	.mask.show {
		visibility: visible;
		opacity: 1;
	}
	.w-picker-cnt {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		transition: all 0.3s ease;
		transform: translateY(100%);
		z-index: 3000;
	}
	.w-picker-cnt.show {
		transform: translateY(0);
	}
	.w-picker-hd {
		display: flex;
		padding: 9px 15px;
		background-color: #fff;
		position: relative;
		text-align: center;
		font-size: 17px;
		justify-content: space-between;
		.title_info{
			line-height: 20px;
			font-size:20px;
			font-family:PingFangSC-Regular;
			font-weight:400;
			color:rgba(51,51,51,1);
		}
	}
	.w-picker-hd:after {
		content: ' ';
		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
		height: 1px;
		border-bottom: 1px solid #e5e5e5;
		color: #e5e5e5;
		transform-origin: 0 100%;
		transform: scaleY(0.5);
	}
	.item {
		text-align: center;
		line-height: 40px;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 16px;
	}
	.w-picker-view {
		width: 100%;
		height: 238px;
		overflow: hidden;
		background-color: rgba(255, 255, 255, 1);
		z-index: 666;
	}
	picker-view {
		height: 100%;
	}
}
</style>
