<template>
	<div>
		<div class="pay_success_contents">
			<img class="pay_success_img" src="../../static/img/chenggong.png" />
			<p class="pay_success_title">报名成功</p>
			<div class="pay_message">
				<img class="pay_message_img" :src="courseInfo.photo || defaultImg" />
				<div class="pay_class_ino">
					<text>{{ courseInfo.name }}</text>
					<startclass :size="16" :star="Number(courseInfo.star)" starColor="#666666"></startclass>
					<text>{{ teacherNmae }} {{ way }}</text>
				</div>
			</div>
		</div>
		<ul>
			<li v-if="invite">
				<navigator hover-class="btn-hover" :url="'/pages/myCode/myCode?code='+code">{{ $t('index').viewInvitationCode }}</navigator>
			</li>
			<li @tap="goIndex">{{ $t('index').backHome }}</li>
		</ul>
	</div>
</template>

<script>
	import startclass from '../../components/starclass.vue';
	export default {
		components: {
			startclass
		},
		data() {
			return {
				defaultImg: '../../static/img/demo.jpg',
				way: '',
				code: '',
				teacherNmae: '',
				courseInfo: {},
				invite:true
			};
		},
		onShow() {
			if (uni.getStorageSync('langType') == 'en-US') {
				uni.setNavigationBarTitle({
					title: 'Registration Success'
				});
			} else {
				uni.setNavigationBarTitle({
					title: '报名成功'
				});
			}
		},
		onLoad(obj) {
			this.getCourseInfo(obj.classId);
			this.way = obj.way;
			this.code = obj.code;
			this.teacherNmae = obj.teacherNmae;
			if(obj.wayNum == 0 
			|| obj.invite == '-1' 
			|| obj.invite == 'undefined'
			|| obj.invite == undefined){
				this.invite = false 
			}
		},
		methods: {
			goIndex() {
				uni.reLaunch({
					url: '/pages/tabbar/tabbar-1/tabbar-1'
				});
			},
			/**获取课程信息*/
			getCourseInfo(classId) {
				this.ajax({
					url: 'music/index_info',
					data: {
						music_id: classId
					},
					success: res => {
						if (res.data.body === 'success') {
							this.courseInfo = res.data.data.info;
						}
					}
				});
			}
		}
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
			margin: 60upx 0;
			font-size: 40upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(0, 0, 0, 1);
		}

		.pay_message {
			width: 580upx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.pay_message_img {
				width: 254upx;
				height: 160upx;
				border-radius: 6upx;
			}

			.pay_class_ino {
				height: 160upx;
				width: 280upx;
				display: flex;
				flex-direction: column;
				align-items: left;
				justify-content: space-around;

				text {
					&:nth-of-type(1) {
						font-size: 32upx;
						font-family: PingFangSC-Medium;
						font-weight: 500;
						color: rgba(26, 26, 26, 1);
					}

					&:nth-of-type(2) {
						font-size: 24upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(153, 153, 153, 1);
					}
				}
			}
		}
	}

	ul {
		margin-top: 100upx;
		padding: 0 86upx;

		li {
			height: 100upx;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 8upx;
			margin-bottom: 40upx;
			font-size: 32upx;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);

			&:nth-of-type(1) {
				background: rgba(250, 212, 42, 1);
			}

			&:nth-of-type(2) {
				border: 2upx solid rgba(51, 51, 51, 1);
			}
		}
	}
</style>
