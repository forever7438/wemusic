<template>
	<view>
		<lessonHead headType="lessonDetail" 
					:title="choiseTeacherInfo.music_sun.name" 
					:content="choiseTeacherInfo.music_sun.content || '暂无课程介绍'"></lessonHead>
	</view>
</template>

<script>
	import lessonHead from '../../components/lesson/lessonHead.vue';
	export default {
		components:{
			lessonHead
		},
		data() {
			return {
				choiseTeacherInfo: {}
			};
		},
		onLoad(obj) {
			this.getChoiseTeacherInfo(obj.musicId, obj.musicSunId);
		},
	}
</script>

<style>

</style>
