<template>
	<div>
		<div class="pay_success_contents">
			<img class="pay_success_img" src="../../static/img/weixinpay@2x.png" />
			<p class="pay_success_title">报名成功</p>
			<div class="pay_message">
				<img class="pay_message_img" :src="courseInfo.photo || defaultImg" />
				<div class="pay_class_ino">
					<text>{{ courseInfo.name }}</text>
					<startclass :size="13" :star="courseInfo.star" starColor="#666666"></startclass>
					<text>{{ teacherNmae }} {{ way }}</text>
				</div>
			</div>
		</div>
		<ul>
			<li><navigator hover-class="btn-hover" url="/pages/myCode/myCode">查看邀请码</navigator></li>
			<li @tap="goIndex">返回首页</li>
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
			teacherNmae: '',
			courseInfo: {}
		};
	},
	onLoad(obj) {
		this.getCourseInfo(obj.classId);
		this.way = obj.way;
		this.teacherNmae = obj.teacherNmae;
	},
	methods: {
		goIndex() {
			uni.switchTab({
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
		width: 63%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.pay_message_img {
			width: 254upx;
			height: 160upx;
		}
		.pay_class_ino {
			height: 160upx;
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
	padding: 0 110upx;
	li {
		height: 100upx;
		display: flex;
		align-items: center;
		justify-content: center;
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
	}
}
</style>
