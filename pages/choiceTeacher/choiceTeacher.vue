<template>
	<view>
		<lessonHead headType="teacherDetail" :title="choiseTeacherInfo.music_sun.name" :content="choiseTeacherInfo.music_sun.content || '暂无课程介绍'"></lessonHead>
		<lessonList v-if="choiseTeacherInfo.list.length" :listInfo="choiseTeacherInfo.list" lessonType="lessonCopy"></lessonList>
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
			choiseTeacherInfo: {}
		};
	},
	onLoad(obj) {
		this.getChoiseTeacherInfo(obj.musicId, obj.musicSunId);
	},
	methods: {
		//获取选择老师列表
		getChoiseTeacherInfo(musicId, musicSunId) {
			this.ajax({
				url: 'user_order/teacher_list',
				data: {
					music_id: musicId,
					music_sun_id: musicSunId,
					list: 1,
					val: 5
				},
				success: res => {
					if (res.data.body === 'success') {
						this.choiseTeacherInfo = res.data.data;
						// 						uni.setNavigationBarTitle({
						// 							title: res.data.data.name
						// 						});
					}
				}
			});
		}
	}
};
</script>

<style lang="less">
view {
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
}
</style>
