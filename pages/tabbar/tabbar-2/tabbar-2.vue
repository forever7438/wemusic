<template>
	<view class="calendar-content">
		<view class="calendar-box" @click.stop="">
			<uni-calendar
				:lunar="tags['lunar'].checked"
				:fixedHeihgt="tags['fixedHeihgt'].checked"
				:slide="slide"
				:disableBefore="tags['disableBefore'].checked"
				:start-date="startDate"
				:end-date="endDate"
				:date="date"
				@change="change"
				@to-click="toClick"
			/>
		</view>
		<view class="class_arrange">
			<h3>1月6日全部课程</h3>
			<classList></classList>
		</view>
	</view>
</template>

<script>
import uniCalendar from '@/components/uni-calendar/uni-calendar.vue';
import classList from '../../../components/item/classList.vue';
export default {
	components: {
		uniCalendar,
		classList
	},

	data() {
		/**
		 * 时间计算
		 */
		function getDate(date, AddDayCount = 0) {
			if (typeof date !== 'object') {
				date = date.replace(/-/g, '/');
			}
			let dd = new Date(date);
			dd.setMonth(dd.getMonth() + AddDayCount); // 获取AddDayCount天后的日期
			let y = dd.getFullYear();
			let m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1; // 获取当前月份的日期，不足10补0
			let d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate(); // 获取当前几号，不足10补0
			return y + '-' + m + '-' + d;
		}
		let tags = {
			lunar: {
				name: '农历',
				checked: false,
				attr: 'lunar'
			},
			fixedHeihgt: {
				name: '固定高度',
				checked: false,
				attr: 'fixedHeihgt'
			},
			vertical: {
				name: '垂直滚动',
				checked: false,
				attr: 'vertical'
			},
			horizontal: {
				name: '水平滚动',
				checked: false,
				attr: 'horizontal'
			},
			startDate: {
				name: '开始日期(' + getDate(new Date(), -1) + ')',
				checked: false,
				value: getDate(new Date(), -1),
				attr: 'startDate'
			},
			endDate: {
				name: '结束日期(' + getDate(new Date(), 2) + ')',
				value: getDate(new Date(), 2),
				checked: false,
				attr: 'endDate'
			},
			disableBefore: {
				name: '禁用今天之前的日期',
				checked: false,
				attr: 'disableBefore'
			},
			date: {
				name: '自定义当前日期(' + getDate(new Date(), 1) + ')',
				value: getDate(new Date(), 1),
				checked: false,
				attr: 'date'
			}
		};

		return {
			show: false,
			tags,
			slide: 'none',
			date: '',
			startDate: '',
			endDate: '',
			timeData: {}
		};
	},
	onLoad() {
		this.open();
	},
	methods: {
		toggle(index, item) {
			this.tags[index].checked = !item.checked;
			// item.checked = !item.checked;
			if (index === 'horizontal') {
				this.tags['vertical'].checked = false;
			}
			if (index === 'vertical') {
				this.tags['horizontal'].checked = false;
			}
			// this.attribute[item.attr] = !item.checked;
		},
		open() {
			if (this.tags['horizontal'].checked) {
				this.slide = 'horizontal';
			} else if (this.tags['vertical'].checked) {
				this.slide = 'vertical';
			} else {
				this.slide = 'none';
			}
			if (this.tags['startDate'].checked) {
				this.startDate = this.tags['startDate'].value;
			} else {
				this.startDate = '';
			}
			if (this.tags['endDate'].checked) {
				this.endDate = this.tags['endDate'].value;
			} else {
				this.endDate = '';
			}
			if (this.tags['date'].checked) {
				this.date = this.tags['date'].value;
			} else {
				this.date = '';
			}
			this.show = true;
			console.log(this.date);
		},
		change(e) {
			console.log('change 返回:', e.fulldate);
			this.timeData = e;
		},
		toClick(e) {
			console.log('点击事件', e.fulldate);
			this.timeData = e;
		},
		confirm() {
			this.show = false;
		}
	}
};
</script>

<style lang="less">
page {
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	background-color: #fff;
}

view {
	font-size: 28upx;
	line-height: inherit;
}

.example {
	padding: 0 30upx 30upx;
}

.example-title {
	font-size: 32upx;
	line-height: 32upx;
	color: #777;
	margin: 40upx 25upx;
	position: relative;
}

.example .example-title {
	margin: 40upx 0;
}

.example-body {
	padding: 0 40upx;
}

page {
	background: #fff;
}

.calendar-content {
	padding: 10upx 0;
	/* padding-bottom: 60upx; */
	font-size: 26upx;
}

.calendar-content > .calendar-title {
	line-height: 80upx;
	/* font-weight: bold; */
	color: #666;
	font-size: 32upx;
	/* border-left: 2px #0d9ebb solid; */
	/* padding-left: 20upx; */
	margin: 0 20upx;
}

.calendar-tags-group {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 0 10upx;
}

.calendar-tags {
	width: 50%;
	box-sizing: border-box;
}

.calendar-tags-item {
	padding: 10upx 20upx;
	border: 1px rgba(0, 0, 0, 0.2) solid;
	color: #333;
	border-radius: 10upx;
	text-align: center;
	margin: 10upx;
	background: #f8f8f8;
}

.calendar-tags-item:active {
	background: #f8f8f8;
}

.checked .calendar-tags-item {
	background: rgb(0, 122, 255);
	color: #fff;
	border: 1px rgba(0, 0, 0, 0.1) solid;
}

.calendar-button {
	margin: 10upx 20upx;
}

.calendar-info {
	padding: 0 20upx;
}

.calendar-mask {
	position: fixed;
	/* #ifdef H5 */
	top: 45px;
	/* #endif */
	/* #ifndef H5 */
	top: 0;
	/* #endif */
	bottom: 0;
	display: flex;
	align-items: center;
	width: 100%;
	background: rgba(0, 0, 0, 0.4);
}

.calendar-box {
	/* margin: 20upx; */
	border: 1px #f5f5f5 solid;
	/* border-radius: 10upx; */
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: #fff;
}

.calendar-button-groups {
	position: absolute;
	width: 100%;
	bottom: 0;
	display: flex;
}

.calendar-button-confirm {
	width: 50%;
	margin: 10upx;
	border: 1px #eee solid;
	font-size: 32upx;
}

.calendar-button-confirm:after {
	border: none;
}
.class_arrange {
	margin-top: 20upx;
	padding: 20upx;
	h3 {
		text-align: left;
		font-size: 48upx;
	}
}
</style>
