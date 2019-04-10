<template>
	<view class="about_us">
		<image src="../../static/img/demo.jpg"></image>
		<text>
			JZ Centre Stage is an Australian music company which specialises in music education, music production and music
			performance. JZ Centre Stage’s mission is to provide
			artists from both Australia and abroad the creative platform which connects eastern and western music genre,
			developing artists from all levels to appreciate, apply and
			enjoy what modern music has to offer. No matter if you are just starting to learn music as a beginner or have played
			music for a long time at a more advanced level, JZ
			Centre Stage will continue to introduce new music influences to challenge and develop you as an artist. JZ Centre
			Stage believe that music is the universal language
			which connects people from all over the world and that music can bring joy, love, compassion and cultural diversity
			into our lives each dayz
		</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		}
	};
</script>

<style lang="less">
	.about_us {
		padding: 30upx 30upx 0upx 30upx;

		image {			display: block;
			width: 100%;
			height: 210upx;
			border-radius: 12upx;			margin-bottom: 30upx;
		}

		text {
			font-size: 30upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			line-height: 50upx;		}
	}
</style>
