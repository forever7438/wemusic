<template>
	<view class="lesson_contentss" :style="bgStyle">
		<view class="lesson_shade">
			<text class="lesson_name">{{ title }}</text>
			<view style="margin-top: 10upx;"><text class="lesson_names" v-if="headType === 'lessonCopy'">Guitar</text></view>
			<startclass :size="13" :star="star" :isFill="false" starColor="#FFFFFF" v-if="headType === 'lessonDetail' || headType === 'teacherDetail'"></startclass>
			<view style="margin-top: 34upx;">
				<text class="lesson_time" v-if="headType === 'lessonDetail'">{{ $t('index').Duration_course }}：{{ mixTime }}min - {{ maxTime }}min</text>
			</view>
			<text class="lesson_type" v-if="headType === 'teacherDetail'">{{ $t('index').Main_course }} 吉他</text>
			<view style="margin-top:60upx;">
				<text class="lesson_desc">{{ content }}</text>
			</view>
		</view>
	</view>
</template>

<script>
import startclass from '../starclass.vue';
export default {
	components: {
		startclass
	},
	props: {
		star: Number,
		headType: String,
		title: String,
		photo: String,
		content: String,
		maxTime: String,
		mixTime: String
	},
	data() {
		return {};
	},
	computed: {
		bgStyle() {
			return `background-image:url(http://wemusic.ikenweb.com${this.photo})`;
		}
	},
	onLoad() {},
	methods: {}
};
</script>

<style lang="less">
.lesson_contentss {
	width: 100%;
	height: 500upx;
	background: no-repeat center/cover;

	.lesson_shade {
		width: 100%;
		height: 100%;
		padding: 100upx 30upx;
		box-sizing: border-box;
		background: rgba(0, 0, 0, 0.3);

		.lesson_name {
			margin-top: 160upx;
			font-size: 60upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
		}

		.lesson_names {
			font-size: 34upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(255, 255, 255, 1);
		}

		.lesson_time {
			margin: 100upx 0;
			font-size: 28upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(255, 255, 255, 1);
			letter-spacing: 2upx;
		}

		.lesson_type {
			margin: 100upx 0;
			font-size: 32upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(255, 255, 255, 1);
		}

		.lesson_desc {
			font-size: 26upx;
			font-family: PingFangSC-Light;
			font-weight: 300;
			color: rgba(255, 255, 255, 1);
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 3;
			overflow: hidden;
		}
	}
}
</style>
