<template>
	<view>
		<lessonHead 
			headType="lessonDetail" 
			:title="choiseTeacherInfo.music_sun.name" 
			:content="choiseTeacherInfo.music_sun.content || '暂无课程介绍'"></lessonHead>
		<teacherList
			v-if="!choiseTeacherInfo.list.length"
			:listInfo="selectFlag ? selectItem : listInfo"
			:selectFlag="selectFlag"
			title="选择教师"
			@selectFunction="select"
			lessonType="lessonCopy"
		></teacherList>
		<teachingWay v-if="selectFlag"></teachingWay>
	</view>
</template>

<script>
import lessonHead from '../../components/lesson/lessonHead.vue';
import teacherList from '../../components/item/teacherList.vue';
import teachingWay from '../../components/lesson/teachingWay.vue'; //授课方式
export default {
	components: {
		lessonHead,
		teacherList,
		teachingWay
	},
	data() {
		return {
			selectFlag: false,
			selectItem: [],
			listInfo: [{ id: 1, name: 'test-1' }, { id: 2, name: 'test-2' }, { id: 3, name: 'test-3' }, { id: 4, name: 'test-4' }, { id: 5, name: 'test-5' }],
			choiseTeacherInfo: {}
		};
	},
	onLoad(obj) {
		this.getChoiseTeacherInfo(obj.musicId, obj.musicSunId);
	},
	onBackPress(obj){
		console.log('test')
	},
	methods: {
		select(item) {
			console.log(item);
			this.selectItem = [];
			this.selectItem.push(item);
			console.log(this.selectItem);
			this.selectFlag = true;
		},
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
