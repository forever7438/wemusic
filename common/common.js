//后台服务地址
//  h5环境
// #ifdef H5
const ApiUrl = '/api/';
// #endif
//  app环境
// #ifdef APP-PLUS
const ApiUrl = 'http://wemusic.ikenweb.com/api/';
// #endif
const errorImg01 = 'this.src="/static/img/wemusic.jpg"';

//封装网络请求
const ajax = (opt) => {
	uni.showLoading({
		title: ''
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
			"Role": uni.getStorageSync('type') == 1 ? 'student' : 'teacher',
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
			if (['Token invalid', 'Token expired'].includes(res.data.msg)) {
				uni.showToast({
					title: "token过期,请重新登录!",
					icon: "none"
				})
				setTimeout(() => {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}, 1500)
			}
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
	const date = new Date(type);
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
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
export {
	ApiUrl,
	ajax,
	errorImg01,
	getDate,
	getImgToBase64
}
