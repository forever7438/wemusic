<template>
	<view class="lesson_science">
		<text class="teacher_class">{{ title }}</text>
		<view class="lesson_image">
			<image v-if="science[0]" :src="science[0] | imgformat"></image>
			<image v-else :src="image"></image>
			<view class="">
				<image v-if="science[1]" :src="science[1] | imgformat"></image>
				<image v-else :src="image"></image>
				<image v-if="science[2]" :src="science[2] | imgformat"></image>
				<image v-else :src="image"></image>
			</view>
		</view>
		<view class="lesson_images">
			<image v-if="science[3]" :src="science[3] | imgformat"></image>
			<image v-else :src="image"></image>
			<image v-if="science[4]" :src="science[4] | imgformat"></image>
			<image v-else :src="image"></image>
			<image v-if="science[5]" :src="science[5] | imgformat"></image>
			<image v-else :src="image"></image>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		title: String,
		science: Array
	},
	data() {
		return {
			image: '../../static/img/demo.jpg'
		};
	}
};
</script>

<style lang="less">
.lesson_science {
	padding: 20upx 0;

	.teacher_class {
		margin: 40upx 30upx;
		font-size: 48upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}

	.lesson_image {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 20upx;
		padding: 0 30upx;
		image {
			width: 454upx;
			height: 452upx;
		}

		view {
			display: flex;
			align-items: center;
			flex-direction: column;

			image {
				width: 216upx;
				height: 216upx;

				&:nth-of-type(1) {
					margin-bottom: 20upx;
				}
			}
		}
	}

	.lesson_images {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 20upx 0;
		padding: 0 30upx;
		image {
			width: 216upx;
			height: 216upx;
		}
	}
}
</style>
