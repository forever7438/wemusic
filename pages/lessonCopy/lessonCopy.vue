<template>
	<view class="lesson_copy">
		<lessonHead v-if="flag" :title="musicInfo.info.name" headType="lessonCopy" :content="musicInfo.info.content || '暂无介绍'"></lessonHead>
		<view class="all_lesson">
			<view v-if="flag">
				<text class="lesson_tips">全部课程</text>
				<lessonList :listInfo="musicInfo.list" lessonType="lessonCopy" :musicId="musicId"></lessonList>
			</view>
		</view>
	</view>
</template>

<script>
import lessonHead from '../../components/lesson/lessonHead.vue';
import lessonList from '../../components/item/lessonList.vue';
export default {
	components: {
		lessonHead,
		lessonList
	},
	data() {
		return {
			musicId: '',
			musicInfo: {},
			flag: false
		};
	},
	onLoad(obj) {
		uni.setNavigationBarColor({
			frontColor: '#ffffff',
			backgroundColor: '#FFFDEF'
		});
		this.musicId = obj.musicId;
		this.getMusicInfo(obj.musicId);
	},
	methods: {
		//获取艺术详情
		getMusicInfo(musicId) {
			this.ajax({
				url: 'music/info',
				data: {
					music_id: musicId
				},
				method: 'post',
				success: res => {
					if (res.data.body === 'success') {
						this.flag = true;
						this.musicInfo = res.data.data;
						//设置tabbar标题
						uni.setNavigationBarTitle({
							title: res.data.data.info.name
						});
					}
				}
			});
		}
	}
};
</script>

<style lang="less">
.lesson_copy {
	.all_lesson {
		padding: 0 30upx;
		margin-top: 40upx;

		.lesson_tips {
			font-size: 48upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}

		.lesson_nothing {
			font-size: 40upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}
	}
}
</style>
