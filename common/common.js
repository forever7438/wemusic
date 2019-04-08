//后台服务地址
//  h5环境
// #ifdef H5
const ApiUrl = '/api/';
// #endif
//  app环境
// #ifdef APP-PLUS
const ApiUrl = 'http://wemusic.ikenweb.com/api/';
// #endif

//封装网络请求
const ajax = (opt) => {
	uni.showLoading({
		title: 'loading'
	});
	opt = opt || {};
	opt.url = opt.url || '';
	opt.data = opt.data || null;
	opt.method = opt.method || 'POST';
	opt.processData = false;
	opt.contentType = false;
	opt.async = false;
	if (uni.getStorageSync('token')) {
		opt.header = opt.header || {
			"Content-Type": "application/json",
			"role": "student",
			"Authorization": uni.getStorageSync('token')
		};
	}
	opt.success = opt.success || function() {};

	uni.request({
		url: ApiUrl + opt.url,
		data: opt.data,
		method: opt.method,
		header: opt.header,
		dataType: 'json',
		success: function(res) {
			uni.hideLoading();
			opt.success(res);
			console.log(res)
		},
		fail: function() {
			uni.showToast({
				title: '请稍后重试'
			});
		}
	})
}

//时间格式化处理
function getDate(type) {
	const date = new Date();

	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();

	if (type === 'start') {
		year = year - 60;
	} else if (type === 'end') {
		year = year + 2;
	}
	month = month > 9 ? month : '0' + month;
	day = day > 9 ? day : '0' + day;

	return `${year}-${month}-${day}`;
}

function getImgToBase64(url, callback) { //将图片转换为Base64
	var canvas = document.createElement('canvas'),
		ctx = canvas.getContext('2d'),
		img = new Image;
	img.crossOrigin = 'Anonymous';
	img.onload = function() {
		canvas.height = img.height;
		canvas.width = img.width;
		ctx.drawImage(img, 0, 0);
		var dataURL = canvas.toDataURL('image/png');
		callback(dataURL);
		canvas = null;
	};
	img.src = url;
}

//时间格式化处理2
function sysTime(str) {

	var myDate = new Date(str);

	var year = myDate.getFullYear();

	var month = myDate.getMonth() + 1;

	var date = myDate.getDate();

	var h = myDate.getHours();

	var m = myDate.getMinutes();

	var s = myDate.getSeconds();

	var now = year + '-' + getMakeZero(month) + "-" + getMakeZero(date) + " " + getMakeZero(h) + ':' + getMakeZero(m) +
		":" + getMakeZero(s);
	return now;
}
export {
	ApiUrl,
	ajax,
	getDate,
	getImgToBase64,
	sysTime
}
