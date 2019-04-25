<template>
	<view class="lesson_teacher">
		<text class="teacher_class">{{$t('index').teacher}}</text>
		<swiper class="swiper" 
				:indicator-dots="indicatorDots" 
				display-multiple-items="2"
				next-margin="90px"
				:autoplay="autoplay" 
				:interval="interval">
			<swiper-item v-for="(item, index) in teacherList" 
						 :key="index">
				<view class="teacher-item">
					<navigator hover-class="none" :url="'/pages/teacherDetail/teacherDetail?teacherId='+item.id" style="height: 120upx;">
						<image :src="item.photo || image"></image>
					</navigator>
					<text class="teacher_name">{{item.name}}</text>
					<startclass :star="Number(item.star)" starColor="#666666"></startclass>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import startclass from '../starclass.vue';
export default {
	components: {
		startclass
	},
	props:{
		teacherList:Array
	},
	data() {
		return {
			image: '../../static/img/demo.jpg',
			indicatorDots: false,
			autoplay: false,
			interval: 2000,
			duration: 500
		};
	},
	methods: {}
};
</script>

<style lang="less">
.lesson_teacher {
	padding: 30upx 30upx 0 30upx;

	.teacher_class {
		margin: 40upx 0;
		font-size: 48upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}

	.swiper {
		margin-top: 30upx;
		height: 360upx;
		swiper-item{
			.teacher-item {
				display: flex;
				flex-direction: column;
				align-items: center;
				height: 92.78%;
				width: 92%;
				padding: 42upx 0 34upx 0;
				background: rgba(255, 255, 255, 1);
				box-shadow: 0upx 12upx 16upx 0upx rgba(143, 152, 188, 0.2);
				border-radius: 8upx;
				margin-right: 30upx;
				margin-left: 10upx;
				image {
					width: 120upx;
					height: 120upx;
					border-radius: 50%;
					border: 2upx solid #d9b379;
				}
			
				.teacher_name {
					text-align: center;
					margin-top: 60upx;
					width: 100%;
					font-size: 28upx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
					overflow:hidden;
					text-overflow:ellipsis;
					white-space:nowrap;
				}
			}
		}
	}
}
</style>
