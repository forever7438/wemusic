<template>
	<view class="lesson_content">
		<view class="lesson_shade">
			<text class="lesson_name">{{title}}</text>
			<view style="margin-top: 50upx;">
				<text class="lesson_names" v-if="headType==='lessonCopy'">
					Guitar
				</text>
			</view>
			<startclass v-if="headType==='lessonDetail'||headType==='teacherDetail'"></startclass>
			<text class="lesson_time" v-if="headType==='lessonDetail'">课程时长：30min - 180min</text>
			<text class="lesson_type" v-if="headType==='teacherDetail'">主授课程 吉他</text>
			<view class=""><text class="lesson_desc">{{content}}</text></view>
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
			content: String
		},
		data() {
			return {};
		},
		onLoad() {},
		methods: {}
	};
</script>

<style lang="less">
	.lesson_content {
		width: 100%;
		height: 500upx;
		background: url('../../static/img/demo.jpg') no-repeat center/100%;

		.lesson_shade {
			width: 100%;
			height: 500upx;
			padding: 100upx 30upx;
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
			}
		}
	}
</style>
