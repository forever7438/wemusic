<template>
	<view>
		<lessonHead
			headType="lessonDetail"
			:star="Number(musicIndexInfo.star)"
			:title="musicIndexInfo.name"
			:maxTime="musicIndexInfo.max_time_type"
			:mixTime="musicIndexInfo.mix_time_type"
			:content="musicIndexInfo.content || '暂无课程介绍'"
		></lessonHead>
		<lessonTeacher :teacherList="teacherList"></lessonTeacher>
		<lessonDesc title="课程介绍" :content="musicIndexInfo.content || '暂无课程介绍'"></lessonDesc>
		<lessonComment title="课程评价" :comment="comment"></lessonComment>
		<lessonScience title="教学环境" :science="scienceImg"></lessonScience>
		<span class="sign_up">报名</span>
	</view>
</template>

<script>
import lessonHead from '../../components/lesson/lessonHead.vue';
import lessonTeacher from '../../components/lesson/lessonTeacher.vue';
import lessonDesc from '../../components/lesson/lessonDesc.vue';
import lessonComment from '../../components/lesson/lessonComment.vue';
import lessonScience from '../../components/lesson/lessonScience.vue';
export default {
	components: {
		lessonHead,
		lessonTeacher,
		lessonDesc,
		lessonComment,
		lessonScience
	},
	data() {
		return {
			musicIndexInfo: {},
			scienceImg: [],
			teacherList: [],
			comment: [],
			lessonId:''
		};
	},
	onLoad(obj) {
		uni.setNavigationBarColor({
			frontColor: '#ffffff',
			backgroundColor: '#ffffff'
		});
		this.lessonId = obj.lessonId
		this.getMusicIndexInfo(obj.lessonId);
		this.getTeacher(obj.lessonId);
		this.getComment(obj.lessonId);
	},
	onPullDownRefresh() {
		this.getMusicIndexInfo(this.lessonId);
		this.getTeacher(this.lessonId);
		this.getComment(this.lessonId);
	},
	methods: {
		//获取课程详情
		getMusicIndexInfo(lessonId) {
			this.ajax({
				url: 'music/index_info',
				data: {
					music_id: lessonId
				},
				method: 'post',
				success: res => {
					if (res.data.body === 'success') {
						this.musicIndexInfo = res.data.data.info;
						this.scienceImg = res.data.data.style;
						// 							uni.setNavigationBarTitle({
						// 								title: res.data.data.name
						// 							})
					}
				}
			});
		},

		/**获取老师列表*/
		getTeacher(musicSunId) {
			this.ajax({
				url: 'music/teacher_list',
				data: {
					music_id: musicSunId,
					list: 0,
					val: 12
				},
				success: res => {
					if (res.data.body === 'success') {
						this.teacherList = res.data.data.list;
					}
				}
			});
		},
		getComment(id) {
			this.ajax({
				url: 'music/assess_list',
				data: {
					type: 0,
					id: id,
					list: 0,
					val: 12
				},
				method: 'post',
				success: res => {
					uni.stopPullDownRefresh();
					if (res.data.body === 'success') {
						this.comment = res.data.data;
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
		margin-top: 166upx;
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
