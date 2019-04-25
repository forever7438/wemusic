function forMatNum(num) {
	return num < 10 ? '0' + num : num + '';
}

function initDays(year, month) {
	let totalDays = new Date(year, month, 0).getDate();
	let dates = [];
	for (let d = 1; d <= totalDays; d++) {
		dates.push(forMatNum(d));
	};
	return dates;
}

function initPicker(start, end, mode = "date", step = 1) {
	let initstartDate = new Date(start);
	let endDate = new Date(end);
	let startYear = initstartDate.getFullYear();
	let startMonth = initstartDate.getMonth();
	let endYear = endDate.getFullYear();
	let years = [],
		months = [],
		days = [],
		hours = [],
		minutes = [];
	let totalDays = new Date(startYear, startMonth, 0).getDate();
	for (let s = startYear; s <= endYear; s++) {
		years.push(s + '');
	};
	for (let m = 1; m <= 12; m++) {
		months.push(forMatNum(m));
	};
	for (let d = 1; d <= totalDays; d++) {
		days.push(forMatNum(d));
	}
	for (let h = 0; h < 24; h++) {
		hours.push(forMatNum(h));
	}
	for (let m = 0; m < 60; m += step) {
		minutes.push(forMatNum(m));
	}
	if (mode == "date") {
		return {
			years,
			months,
			days
		}
	} else if (mode == 'dates') {
		return {
			years
		}
	} else if (mode == "dateTime") {
		return {
			years,
			months,
			days,
			hours,
			minutes
		}
	} else if (mode == "time") {
		return {
			hours,
			minutes
		}
	}
}

var dateUtils = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function(milliseconds) {
		var result = '';
		var minute = 1000 * 60; //把分，时，天，周，半个月，一个月用毫秒表示
		var hour = minute * 60;
		var day = hour * 24;
		var week = day * 7;
		var halfamonth = day * 15;
		var month = day * 30;
		var now = new Date().getTime(); //获取当前时间毫秒
		var diffValue = now - milliseconds; //时间差

		if (diffValue < 0) {
			return;
		}
		var minC = diffValue / minute; //计算时间差的分，时，天，周，月
		var hourC = diffValue / hour;
		var dayC = diffValue / day;
		var weekC = diffValue / week;
		var monthC = diffValue / month;
		if (monthC >= 1 && monthC <= 3) {
			result = " " + parseInt(monthC) + "月前"
		} else if (weekC >= 1 && weekC <= 3) {
			result = " " + parseInt(weekC) + "周前"
		} else if (dayC >= 1 && dayC <= 6) {
			result = " " + parseInt(dayC) + "天前"
		} else if (hourC >= 1 && hourC <= 23) {
			result = " " + parseInt(hourC) + "小时前"
		} else if (minC >= 1 && minC <= 59) {
			result = " " + parseInt(minC) + "分钟前"
		} else if (diffValue >= 0 && diffValue <= minute) {
			result = "刚刚"
		} else {
			var datetime = new Date();
			datetime.setTime(milliseconds);
			var Nyear = datetime.getFullYear();
			var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
			var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
			var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
			var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
			var Nsecond = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
			result = Nyear + "-" + Nmonth + "-" + Ndate
		}
		return result;
	},
	format: function(date) {
		let year = new Date(date * 1000).getFullYear(),
			month = (new Date(date * 1000).getMonth() + 1) > 9 ? (new Date(date * 1000).getMonth() + 1) : '0' + (new Date(date *
				1000).getMonth() + 1), //月份是从0开始的
			day = new Date(date * 1000).getDate() > 9 ? new Date(date * 1000).getDate() : '0' + new Date(date * 1000).getDate(),
			hour = new Date(date * 1000).getHours() > 9 ? new Date(date * 1000).getHours() : '0' + new Date(date * 1000).getHours(),
			min = new Date(date * 1000).getMinutes() > 9 ? new Date(date * 1000).getMinutes() : '0' + new Date(date * 1000).getMinutes(),
			sec = new Date(date * 1000).getSeconds() > 9 ? new Date(date * 1000).getSeconds() : '0' + new Date(date * 1000).getSeconds();
		let newTime = year + '-' +
			month + '-' +
			day + ' ' +
			hour + ':' +
			min + ':' +
			sec;
		return newTime;
	},
	parse: function(str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		let a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	}
};
export {
	initDays,
	initPicker,
	dateUtils
}
