<template>
	<view class="course_invitation">
		<view class="invitation_content">
			<text>{{ $t('index').InputInvitationCode }}</text>
			<input type="text" v-model="code" />
		</view>
		<text class="tips">{{ $t('index').codeContent }}</text>
		<button hover-class="btn-hover" @tap="toPay()">{{ $t('index').determine }}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code: ''
			};
		},
		onShow() {
			if (uni.getStorageSync('langType') == 'en-US') {
				uni.setNavigationBarTitle({
					title: 'Course Invitation'
				});
			} else {
				uni.setNavigationBarTitle({
					title: '课程邀请'
				});
			}
		},
		methods: {
			toPay() {
				if (!this.code) {
					uni.showToast({
						title: this.$t('index').invitation_code,
						icon: "none"
					})
				}else{
					this.ajax({
						url: 'userorder/add_time',
						data: {
							invite: this.code
						},
						success: res => {
							if(res.data.body == undefined){
								uni.showToast({
									title: 'Invitation code expired',
									icon: "none"
								});
								return false
							}
							if (res.data.data.is_invite === 1) {
								uni.navigateTo({
									url: '/pages/orderInfo/orderInfo?code=' + this.code
								});
							} else {
								uni.showToast({
									title: this.$t('index').Invitation_Code_Error,
									icon: "none"
								});
							}
						}
					});
				}
			}
		}
	};
</script>

<style lang="less">
	.course_invitation {
		padding: 0 30upx;

		.invitation_content {
			display: flex;
			align-items: flex-end;
			margin-top: 78upx;
			margin-bottom: 60upx;

			text {
				font-size: 32upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
			}

			input {
				width: 376upx;
				height: 88upx;
				margin-left: 30upx;
				padding-left: 10upx;
				border: 2upx solid rgba(51, 51, 51, 1);
			}
		}

		.tips {
			font-size: 24upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(102, 102, 102, 1);
			line-height: 36upx;
		}

		button {
			margin-top: 120upx;
			background: rgba(250, 212, 42, 1);
			color: rgba(51, 51, 51, 1);
			font-size: 32upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
		}
	}
</style>
