<template>
	<view>
		<neil-modal :show="show" @close="show = false" @confirm="bindBtn()" title="是否切换语言"></neil-modal>
		<view v-if="!isTeacher" class="content_student">
			<view v-if="userInfo.is_vip==2" class="messgae">
				<view class="user_info">
					<image :src="userInfo.photo || userImage"></image>
					<view>
						<view class="view_name">
							<navigator hover-class="none" url="/pages/updateUserinfo/updateUserinfo">
								<text class="user_name">{{ userInfo.name || 'null' }}</text>
							</navigator>
							<uni-icon type="forward" size="18" style="vertical-align: initial;color: #ffe6be;"></uni-icon>
						</view>
						<text class="user_type">WeMusic会员</text>
					</view>
				</view>
				<view class="user_money">
					<view class="money_info">
						<text>{{ $t('index').accountBbalance }}</text>
						<view class="money_word">
							<text>￥</text>
							<text>{{ userInfo.money }}</text>
						</view>
					</view>
					<navigator hover-class="none" url="/pages/vipCenter/vipCenter">
						<text class="pay_btn">{{ $t('index').recharge }}</text>
					</navigator>
				</view>
			</view>
			<view v-else class="default_message">
				<view class="user_info">
					<image :src="userInfo.photo || userImage"></image>
					<view>
						<view class="view_name">
							<navigator hover-class="none" url="/pages/updateUserinfo/updateUserinfo">
								<text class="user_name">{{ userInfo.name || 'null' }}</text>
							</navigator>
							<uni-icon type="forward" size="18" style="vertical-align: initial;color: #ffe6be;"></uni-icon>
						</view>
						<text class="user_type">普通用户</text>
					</view>
				</view>
				<view class="add_vip">
					<image src="/static/img/zhuanshi@2x.png"></image>
					<text>加入WeMusic会员，让音乐照亮生活。</text>
					<text>点击开通</text>
					<uni-icon type="forward" size="18" style="vertical-align: initial;color: #ffe6be;"></uni-icon>
				</view>
			</view>
			<view class="class_list">
				<navigator hover-class="none" url="/pages/lesson/lesson?type=-1">
					<view>
						<image src="../../../static/img/group(3).png"></image>
						<text>{{ $t('index').allCourses }}</text>
					</view>
				</navigator>
				<navigator hover-class="none" url="/pages/lesson/lesson?type=0">
					<view>
						<image src="../../../static/img/fenzu7@2x.png"></image>
						<text>{{ $t('index').ToBePaid }}</text>
					</view>
				</navigator>
				<navigator hover-class="none" url="/pages/lesson/lesson?type=1">
					<view>
						<image src="../../../static/img/group(1).png"></image>
						<text>{{ $t('index').waitingForClass }}</text>
					</view>
				</navigator>
				<navigator hover-class="none" url="/pages/lesson/lesson?type=3">
					<view>
						<image src="../../../static/img/group(2).png"></image>
						<text>{{ $t('index').completed }}</text>
					</view>
				</navigator>
			</view>
			<view class="user_meun">
				<navigator hover-class="none" url="/pages/circleFriends/circleFriends">
					<view>
						<text>{{ $t('index').CircleOfFriends }}</text>
						<image src="../../../static/img/moment@2x.png"></image>
					</view>
				</navigator>
				<view @click="show = true">
					<text>语言/Language</text>
					<text>{{ language }}</text>
				</view>
				<navigator hover-class="none" url="/pages/myCoupon/myCoupon?type=0">
					<view>
						<text>{{ $t('index').MyCoupon }}</text>
						<image src="../../../static/img/coupon@2x.png"></image>
					</view>
				</navigator>
				<navigator hover-class="none" url="/pages/myEvaluate/myEvaluate?type=2">
					<view>
						<text>{{ $t('index').MyEvaluation }}</text>
						<image src="../../../static/img/evaluate@2x.png"></image>
					</view>
				</navigator>
				<navigator hover-class="none" url="/pages/feedback/feedback">
					<view>
						<text>{{ $t('index').feedback }}</text>
						<image src="../../../static/img/opinion@2x.png"></image>
					</view>
				</navigator>
				<navigator hover-class="none" url="/pages/aboutUs/aboutUs">
					<view>
						<text>{{ $t('index').aboutUs }}</text>
						<image src="../../../static/img/team@2x.png"></image>
					</view>
				</navigator>
				<navigator hover-class="none" url="/pages/courseInvitation/courseInvitation">
					<view>
						<text>{{ $t('index').courseInvitation }}</text>
						<image src="../../../static/img/invite@2x.png"></image>
					</view>
				</navigator>
			</view>
		</view>
		<view v-else class="content_teacher">
			<view class="teacher-message">
				<image :src="userInfo.photo || userImage"></image>
				<navigator hover-class="none" url="/pages/updateUserinfo/updateUserinfo">
					<text class="user_name">{{ userInfo.name || 'null' }}</text>
					<uni-icon type="forward" size="18" style="vertical-align: initial;"></uni-icon>
				</navigator>
			</view>
			<view class="user_meun">
				<navigator hover-class="none" url="/pages/lesson/lesson?type=1">
					<view>
						<text>{{ $t('index').myCourse }}</text>
						<image src="../../../static/img/class@2x.png"></image>
					</view>
				</navigator>
				<navigator hover-class="none" url="/pages/circleFriends/circleFriends">
					<view>
						<text>{{ $t('index').CircleOfFriends }}</text>
						<image src="../../../static/img/moment@2x.png"></image>
					</view>
				</navigator>
				<navigator hover-class="none" url="/pages/finance/finance">
					<view>
						<text>{{ $t('index').financialManagement }}</text>
						<image src="../../../static/img/money@2x.png"></image>
					</view>
				</navigator>
				<navigator hover-class="none" url="/pages/uploadFile/uploadFile">
					<view>
						<text>{{ $t('index').dataUpload }}</text>
						<image src="../../../static/img/coupons@2x.png"></image>
					</view>
				</navigator>
				<navigator hover-class="none" url="/pages/authentication/authentication">
					<view>
						<text>{{ $t('index').myCertification }}</text>
						<image src="../../../static/img/certification@2x.png"></image>
					</view>
				</navigator>
			</view>
		</view>
		<view class="meun_list">
			<view v-if="isStudent" @tap="goPath('/pages/tabbar/tabbar-1/tabbar-1', 'home')">
				<image :src="pathType == 'home' ? '/static/img/tabbar/homeactive.png' : '/static/img/tabbar/home.png'"></image>
			</view>
			<view @tap="goPath('/pages/tabbar/tabbar-2/tabbar-2', 'class')">
				<image :src="pathType == 'class' ? '/static/img/tabbar/classactive.png' : '/static/img/tabbar/class.png'"></image>
			</view>
			<view @tap="goPath('/pages/tabbar/tabbar-5/tabbar-5', 'me')">
				<image :src="pathType == 'me' ? '/static/img/tabbar/meactive.png' : '/static/img/tabbar/me.png'"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icon/uni-icon.vue';
	import neilModal from '@/components/neil-modal/neil-modal.vue';
	export default {
		components: {
			uniIcon,
			neilModal
		},
		data() {
			return {
				pathType: 'me',
				userImage: '../../../static/img/icon_touxiang02.png',
				isStudent: true,
				isTeacher: false,
				userInfo: {},
				show: false,
				language: '中文'
			};
		},
		onLoad(obj) {
			this.pathType = obj.type;
			this.getUserInfo();
			uni.getStorageSync('type') == 1 ? (this.isTeacher = false) : (this.isTeacher = true);
			if (uni.getStorageSync('type')) {
				uni.getStorageSync('type') == 1 ? (this.isStudent = true) : (this.isStudent = false);
			} else {
				this.isStudent = true;
			}
			uni.getStorageSync('langType') == 'en-US' ? (this.language = 'English') : (this.language = '中文');
			if (uni.getStorageSync('type') == 2) {
				uni.setNavigationBarColor({
					frontColor: '#000000',
					backgroundColor: '#fad42a'
				});
			}
		},
		onPullDownRefresh() {
			this.getUserInfo();
			uni.getStorageSync('type') == 1 ? (this.isTeacher = false) : (this.isTeacher = true);
		},
		methods: {
			goPath(path, type) {
				uni.redirectTo({
					url: `${path}?type=${type}`
				});
			},
			//获取个人资料
			getUserInfo() {
				this.ajax({
					url: uni.getStorageSync('type') == 1 ? 'user/info' : 'teacherclass/info',
					success: res => {
						uni.stopPullDownRefresh();
						if (res.data.body === 'success') {
							this.userInfo = res.data.data;
						} else {
							uni.showToast({
								title: res.data.msg
							});
						}
					}
				});
			},

			//切换语言
			bindBtn() {
				if (uni.getStorageSync('langType') == 'en-US') {
					this._i18n.locale = 'zh-CN';
					this.language = '中文';
					uni.setStorage({
						key: 'langType',
						data: 'zh-CN'
					});
				} else {
					this._i18n.locale = 'en-US';
					this.language = 'English';
					uni.setStorage({
						key: 'langType',
						data: 'en-US'
					});
				}
			}
		},
		onNavigationBarButtonTap(obj) {
			if (obj.index === 1) {
				uni.navigateTo({
					url: '/pages/setting/setting'
				});
			}
			else {
				
				uni.navigateTo({
					url: '/pages/message/message'
				});
			}
		}
	};
</script>

<style lang="less">
	//老师
	.content_teacher {
		.teacher-message {
			height: 400upx;
			display: flex;
			align-items: center;
			flex-direction: column;
			background: rgba(250, 212, 42, 1);

			image {
				margin: 100upx 0 50upx;
				width: 152upx;
				height: 152upx;
				border-radius: 50%;
				border: 4upx solid rgba(255, 255, 255, 1);
			}

			text {
				font-size: 40upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
		}

		.user_meun {
			padding: 40upx 15upx 0 15upx;
			margin-bottom: 96upx;

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

	//学生
	.content_student {
		text-align: center;
		// height: 445upx;
		padding: 30upx 30upx 0 30upx;
		margin-bottom: 96upx;

		.messgae {
			height: 285upx;
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
					margin-left: 18upx;

					.view_name {
						display: flex;
						flex-direction: row;
						align-items: baseline;
					}

					.user_name {
						font-size: 36upx;
						font-family: PingFangSC-Medium;
						font-weight: 500;
						color: rgba(255, 230, 190, 1);
						display: inline-block;
						padding-bottom: 22upx;
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
							width: 120upx;
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
							padding-left: 8upx;
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

		.default_message {
			height: 120upx;
			margin-bottom: 110upx;
			border-radius: 16upx;
			padding-top: 0upx;

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
					margin-left: 18upx;

					.view_name {
						display: flex;
						flex-direction: row;
						align-items: baseline;
					}

					.user_name {
						font-size: 36upx;
						font-family: PingFangSC-Medium;
						font-weight: 500;
						color: rgba(0, 0, 0, 1);
						display: inline-block;
						padding-bottom: 22upx;
					}

					.user_type {
						font-size: 20upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(102, 102, 102, 1);
					}
				}
			}

			.add_vip {
				display: flex;
				align-items: center;
				justify-content: space-around;
				height: 100upx;
				margin-top: 10upx;
				background: linear-gradient(135deg, rgba(217, 179, 121, 1) 0%, rgba(162, 127, 74, 1) 100%);
				border-radius: 16upx;

				image {
					width: 32upx;
					height: 30upx;
				}

				text {
					font-size: 24upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;

					&:nth-of-type(1) {
						color: rgba(77, 55, 22, 1);
					}

					&:nth-of-type(2) {
						margin-right: -40upx;
						color: rgba(245, 212, 164, 1);
					}
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
			padding: 10upx 15upx 0 15upx;

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

	.meun_list {
		position: fixed;
		bottom: 0;
		width: 100%;
		display: flex;
		height: 98upx;
		background-color: #fff;
		align-items: center;
		justify-content: space-around;
		border-top: 2upx solid #ddd;

		view {
			flex: 1;
			text-align: center;

			image {
				width: 48upx;
				height: 48upx;
			}
		}
	}
</style>
