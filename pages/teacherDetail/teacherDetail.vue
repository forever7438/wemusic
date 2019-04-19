<template>
	<view>
		<teacherHead headType='teacherDetail' 
		:star="Number(info.star)"
		:musicName="info.music_name"
		:title='info.name' 
		:content='info.experience'></teacherHead>
		<view class="all_lesson">
			<text class="lesson_tips">全部课程</text>
			<lessonList lessonType="lessonCopy" 
						:listInfo="courseList"></lessonList>
		</view>
		<lessonComment  title='学生评价' 
						v-if="comment.length" 
						:comment="comment"></lessonComment>
		<lessonScience  title='教师风采' 
						v-if="science.length" 
						:science="science"></lessonScience>
	</view>
</template>

<script>
	import teacherHead from '../../components/lesson/teacherHead.vue';
	import lessonList from '../../components/item/lessonList.vue';
	import lessonComment from '../../components/lesson/lessonComment.vue';
	import lessonScience from '../../components/lesson/lessonScience.vue';
	export default {
		components: {
			teacherHead,
			lessonList,
			lessonComment,
			lessonScience
		},
		data() {
			return {
				info:{},
				courseList:[],
				comment:[],
				science:[]
			};
		},
		onLoad(obj) {
			this.getTeacherInfo(obj.teacherId)
			this.getComment(obj.teacherId)
		},
		methods:{
			getTeacherInfo(id){
				this.ajax({
					url: 'userorder/teacher_info',
					data: {
						teacher_id: id
					},
					method: 'post',
					success: (res) => {
						if (res.data.body === 'success') {
							let data = res.data.data
							this.info = data.info
							this.courseList = data.list
							this.science = data.style
						}
					}
				})
			},
			getComment(id){
				this.ajax({
					url: 'music/assess_list',
					data: {
						type:1,
						id: id,
						list:0,
						val:12
					},
					method: 'post',
					success: (res) => {
						if (res.data.body === 'success') {
							this.comment = res.data.data
						}
					}
				})
			}
		}
	}
</script>

<style lang="less">
	view {
		.all_lesson {
			padding: 0 30upx;
			margin-top: 40upx;

			.lesson_tips {
				font-size: 48upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
		}
	}
</style>
