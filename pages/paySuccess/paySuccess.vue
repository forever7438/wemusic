<template>
	<div>
		<div class="pay_success_contents">
			<img class="pay_success_img" src="../../static/img/chenggong.png" />
			<p class="pay_success_title">充值成功</p>
			<p class="pay_success_content">成功充值 ￥ 100</p>
			<p class="pay_success_time">2019年1月10日 9:30</p>
		</div>
		<ul>
			<li><span>查看会员</span></li>
			<li><span>返回首页</span></li>
		</ul>
	</div>
</template>

<script>
export default {
	onShow() {
		if (uni.getStorageSync('langType') == 'en-US') {
			uni.setNavigationBarTitle({
				title: 'Recharge Success'
			});
		} else {
			uni.setNavigationBarTitle({
				title: '充值成功'
			});
		}
	},
	components: {}
};
</script>

<style lang="less" scoped>
.pay_success_contents {
	margin-top: 50upx;
	display: flex;
	align-items: center;
	flex-direction: column;
	font-weight: 600;
	.pay_success_img {
		width: 120upx;
		height: 120upx;
	}
	.pay_success_title {
		margin: 20upx 0;
		font-size: 40upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(0, 0, 0, 1);
	}
	.pay_success_content {
		font-size: 32upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
	.pay_success_time {
		margin: 20upx 0;
		font-size: 28upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
	}
}
ul {
	margin-top: 40upx;
	padding: 0 20upx;
	li {
		height: 100upx;
		display: flex;
		align-items: center;
		border-radius: 8upx;
		margin-bottom: 10upx;
		font-size: 32upx;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		&:nth-of-type(1) {
			background: rgba(250, 212, 42, 1);
		}
		&:nth-of-type(2) {
			margin-top: 20upx;
			border: 2upx solid rgba(51, 51, 51, 1);
		}
		span {
			margin: 0 auto;
		}
	}
}
</style>
