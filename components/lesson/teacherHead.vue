<template>
	<view class="lesson_contentss">
		<image class="back_photo" src="/static/img/demo.jpg"></image>
		<view class="lesson_shade">
			<text class="lesson_name">{{title}}</text>
			<view style="margin-top: 10upx;">
				<text class="lesson_names" v-if="headType==='lessonCopy'">
					Guitar
				</text>
			</view>
			<view v-if="headType==='lessonDetail'||headType==='teacherDetail'" style="margin-bottom: 34upx;">
				<startclass :star="star"></startclass>
			</view>
			<text class="lesson_time" v-if="headType==='lessonDetail'">{{$t('index').Duration_course}}：30min - 180min</text>
			<text class="lesson_type" v-if="headType==='teacherDetail'">{{$t('index').Main_course}} {{musicName}}</text>
			<view style="margin-top:274upx;"><text class="lesson_desc">{{content || $t('index').NoIntroduction}}</text></view>
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
			headType: String,
			title: String,
			content: String,
			musicName:String,
			star:Number
		},
		data() {
			return {};
		},
		onLoad() {},
		methods: {}
	};
</script>

<style lang="less">
	.lesson_contentss {
		position: relative;
		.back_photo{
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: -1
		}
		width: 100%;
		height: 728upx;
		//background: url('../../static/img/demo.jpg') no-repeat center/100%;
		background-size: 100% 100%;

		.lesson_shade {
			position: relative;
			width: 100%;
			height: 100%;
			padding: 104upx 30upx 30upx 30upx;
			box-sizing: border-box;
			background: rgba(0, 0, 0, 0.3);

			.lesson_name {
				// margin-top: 98upx;
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
				position: absolute;
				bottom: 68upx;
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
