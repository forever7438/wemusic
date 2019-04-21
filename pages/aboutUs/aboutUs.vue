<template>
	<view class="about_us">
		<image v-if="photo" :src="photo"></image>
		<text v-if="aboutContent">{{ aboutContent }}</text>
		<noContent v-else title='暂无介绍'></noContent>
	</view>
</template>

<script>
	import noContent from '../../components/noContent.vue'
	export default {
		data() {
			return {
				aboutContent: '',
				photo: ''
			};
		},
		components: {
			noContent
		},
		onLoad() {
			this.getAboutContent();
		},
		methods: {
			//获取关于我们
			getAboutContent() {
				this.ajax({
					url: 'index/about_us',
					success: res => {
						this.aboutContent = res.data.data.body;
						this.photo = res.data.data.photo;
					}
				});
			}
		}
	};
</script>

<style lang="less">
	.about_us {
		padding: 30upx 30upx 0upx 30upx;

		image {
			display: block;
			width: 100%;
			height: 210upx;
			border-radius: 12upx;
			margin-bottom: 30upx;
		}

		text {
			font-size: 30upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			line-height: 50upx;
		}

		.no_content {
			height: 600upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			image {
				width: 216upx;
				height: 244upx;
			}

			text {
				font-size: 32upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(0, 0, 0, 0.5);
			}
		}
	}
</style>
