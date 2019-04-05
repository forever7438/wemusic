<template>
	<view class="content">
		<view class="messgae">
			<view class="user_info">
				<image src="../../../static/img/lf.jpg"></image>
				<view>
					<text class="user_name">Anna Davis</text>
					<text class="user_type">WeMusic会员</text>
				</view>
			</view>
			<view class="user_money">
				<view class="money_info">
					<text>账户余额</text>
					<text>￥ 2369</text>
				</view>
				<navigator url="/pages/vipCenter/vipCenter"><text class="pay_btn">充值</text></navigator>
			</view>
		</view>
		<view class="class_list">
			<navigator url="/pages/lesson/lesson?type=1">
				<view>
					<image src="../../../static/img/group(1).png"></image>
					<text>全部课程</text>
				</view>
			</navigator>
			<navigator url="/pages/lesson/lesson?type=2">
				<view>
					<image src="../../../static/img/fenzu7@2x.png"></image>
					<text>待支付</text>
				</view>
			</navigator>
			<navigator url="/pages/lesson/lesson?type=3">
				<view>
					<image src="../../../static/img/group(1).png"></image>
					<text>待开课</text>
				</view>
			</navigator>
			<navigator url="/pages/lesson/lesson?type=4">
				<view>
					<image src="../../../static/img/group(2).png"></image>
					<text>已完成</text>
				</view>
			</navigator>
		</view>
		<view class="user_meun">
			<navigator url="/pages/circleFriends/circleFriends">
				<view>
					<text>朋友圈</text>
					<image src="../../../static/img/moment@2x.png"></image>
				</view>
			</navigator>
			<view>
				<text>语言/Language</text>
				<text>中文</text>
			</view>
			<navigator url="/pages/myCoupon/myCoupon">
				<view>
					<text>我的优惠券</text>
					<image src="../../../static/img/coupon@2x.png"></image>
				</view>
			</navigator>
			<navigator url="/pages/myEvaluate/myEvaluate">
				<view>
					<text>我的评价</text>
					<image src="../../../static/img/evaluate@2x.png"></image>
				</view>
			</navigator>
			<navigator url="/pages/feedback/feedback">
				<view>
					<text>意见反馈</text>
					<image src="../../../static/img/opinion@2x.png"></image>
				</view>
			</navigator>
			<navigator url="/pages/aboutUs/aboutUs">
				<view>
					<text>关于我们</text>
					<image src="../../../static/img/team@2x.png"></image>
				</view>
			</navigator>
			<navigator url="/pages/courseInvitation/courseInvitation">
				<view>
					<text>课程邀请</text>
					<image src="../../../static/img/invite@2x.png"></image>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello'
		};
	},
	onLoad() {},
	methods: {},
	onNavigationBarButtonTap(obj) {
		if (obj.index === 1) {
			uni.navigateTo({
				url: '/pages/setting/setting'
			});
		} else {
			uni.navigateTo({
				url: '/pages/message/message'
			});
		}
	}
};
</script>

<style lang="less">
.content {
	text-align: center;
	height: 400upx;
	padding: 0 15upx;

	.messgae {
		height: 270upx;
		padding: 30upx;
		background: linear-gradient(135deg, rgba(217, 179, 121, 1) 0%, rgba(162, 127, 74, 1) 100%);
		border-radius: 16upx;

		.user_info {
			display: flex;
			align-items: center;

			image {
				width: 92upx;
				height: 92upx;
				border: 4upx solid #fff;
				border-radius: 50%;
			}

			view {
				display: flex;
				flex-direction: column;
				text-align: left;
				margin-left: 10upx;

				.user_name {
					font-size: 36upx;
					font-family: PingFangSC-Medium;
					font-weight: 600;
					color: rgba(255, 230, 190, 1);

					::after {
						display: inline-block;
						width: 10upx;
						height: 10upx;
						content: '>';
						margin-left: 20upx;
					}
				}

				.user_type {
					font-size: 20upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(255, 230, 190, 1);
				}
			}
		}

		.user_money {
			display: flex;
			align-items: flex-end;
			justify-content: space-between;

			.money_info {
				display: flex;
				flex-direction: column;
				text-align: left;
				margin-top: 40upx;

				text {
					&:nth-of-type(1) {
						width: 100upx;
						line-height: 28upx;
						font-size: 20upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(255, 230, 190, 1);
					}

					&:nth-of-type(2) {
						width: 200upx;
						font-size: 46upx;
						font-family: DINAlternate-Bold;
						font-weight: bold;
						color: rgba(255, 255, 255, 1);
						line-height: 54upx;
					}
				}
			}

			.pay_btn {
				display: inline-block;
				width: 116upx;
				line-height: 46upx;
				background: rgba(255, 255, 255, 1);
				border-radius: 24upx;
				font-size: 28upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(173, 137, 83, 1);
				cursor: pointer;
			}
		}
	}

	.class_list {
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin-top: 20upx;

		view {
			display: flex;
			flex-direction: column;
			align-items: center;

			image {
				width: 68upx;
				height: 68upx;
				border-radius: 4upx;
			}

			text {
				margin-top: 20upx;
				font-size: 28upx;
				font-family: PingFangSC-Medium;
				font-weight: 600;
				color: rgba(26, 26, 26, 1);
				line-height: 28upx;
			}
		}
	}

	.user_meun {
		padding: 0 15upx;

		view {
			display: flex;
			align-items: center;
			justify-content: space-between;
			line-height: 104upx;
			border-bottom: 2upx solid #ddd;

			:last-child {
				border-bottom: 0;
			}

			text {
				font-size: 32upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
			}

			image {
				width: 44upx;
				height: 44upx;
			}
		}
	}
}
</style>
