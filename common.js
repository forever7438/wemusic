//后台服务地址
//  h5环境
// #ifdef H5
const ApiUrl = '/api/';
// #endif
//  app环境
// #ifdef APP-PLUS
const ApiUrl = 'http://wemusic.ikenweb.com/api/';
// #endif

const ajax = (opt) => {
	uni.showLoading({
		title: 'loading'
	});
	opt = opt || {};
	opt.url = opt.url || '';
	opt.data = opt.data || null;
	opt.method = opt.method || 'POST';
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
		},
		fail: function() {
			uni.showToast({
				title: '请稍后重试'
			});
		}
	})
}

export {
	ajax
}
