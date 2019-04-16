<template>
	<div class="lesson_content">
		<text class="teacher_class">选择授课方式</text>
		<ul>
			<li :class="{ active: info.people_num === 0 }" @click="info.people_num = 0">一对一</li>
			<li :class="{ active: info.people_num === 1 }" @click="info.people_num = 1">一对二</li>
			<li :class="{ active: info.people_num === 2 }" @click="info.people_num = 2">一对三</li>
		</ul>
		<p class="message">
			<span></span>
			<span class="info">一对二、一对三的课程，您可以邀请朋友一同上课，更加优惠。</span>
		</p>
		<p class="vipMessage">
			<span>您还不是WeMusic会员，可享受一节预约课，如果想要上更多课程，请前往开通会员。</span>
			<span>开通会员</span>
		</p>
		<text class="teacher_class">选择时长</text>
		<selectTime :time_checked="time_checked"></selectTime>
		<span class="sign_up">下一步</span>
	</div>
</template>

<script>
import startclass from '../starclass.vue';
import selectTime from '../item/selectTime.vue';
export default {
	components: {
		startclass,
		selectTime
	},
	props: {
		musicId: String,
		lessonType: {
			type: String,
			default: '4'
		}, //lessonType类型判断  1为全部  2为待支付  3为待开课  4为已完成
		listInfo: Array,
		title: String
	},
	data() {
		return {
			image: '../../static/img/demo.jpg',
			info: {
				people_num: 0,
				time_checked: 0
			}
		};
	},
	methods: {
		getCourseList() {
			console.log('ok');
		}
	},
	created() {
		console.log(this.musicId);
		this.getCourseList();
	}
};
</script>

<style lang="less" scoped>
.lesson_content {
	.sign_up {
		text-align: center;
		margin-top: 40upx;
		display: inline-block;
		width: 100%;
		line-height: 100upx;
		background: rgba(250, 212, 42, 1);
		font-size: 28upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
	.teacher_class {
		font-size: 48upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		margin: 0 30upx;
	}
	.vipMessage {
		background: linear-gradient(135deg, rgba(255, 234, 188, 1) 0%, rgba(234, 192, 100, 1) 100%);
		border-radius: 16upx;
		padding: 30upx;
		overflow: hidden;
		margin: 0 30upx 60upx 30upx;
		span:first-child {
			width: 480upx;
			display: inline-block;
			font-size: 24upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(128, 99, 36, 1);
			line-height: 40upx;
			padding: 0;
		}
		span:nth-child(2) {
			background: rgba(255, 255, 255, 1);
			border-radius: 20upx;
			padding: 4upx 12upx;
			font-size: 24upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(128, 99, 36, 1);
			float: right;
			margin: 20upx 0;
		}
	}
	.message {
		overflow: hidden;
		position: relative;
		margin: 34upx 30upx 60upx 30upx;
		font-size: 24upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		span:first-child {
			background: url('/static/img/提示.png');
			background-size: 100% 100%;
			display: inline-block;
			width: 44upx;
			height: 44upx;
			float: left;
			position: absolute;
			top: 0;
			left: 0;
		}
		span:nth-child(2) {
			display: inline-block;
			margin-left: 64upx;
		}
	}
	ul {
		margin: 0 30upx;
		padding-top: 40upx;
		.active {
			background: #fad42a;
			color: rgba(51, 51, 51, 1);
		}
		li {
			display: inline;
			background: rgba(229, 228, 228, 1);
			border-radius: 40upx;
			padding: 4upx 40upx;
			color: rgba(153, 153, 153, 1);
			margin-left: 30upx;
			font-size: 28upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
		}
		li:first-child {
			margin: 0;
		}
	}
}
</style>
