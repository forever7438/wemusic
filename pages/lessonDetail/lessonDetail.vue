<template>
	<view>
		<view style="margin-bottom: 116px;">
			<lessonHead
				headType="lessonDetail"
				:star="Number(musicIndexInfo.star)"
				:title="musicIndexInfo.name"
				:photo="musicIndexInfo.photo"
				:maxTime="musicIndexInfo.max_time_type"
				:mixTime="musicIndexInfo.mix_time_type"
				:content="musicIndexInfo.content || $t('index').NoIntroduction"
			></lessonHead>
			<lessonTeacher :teacherList="teacherList"></lessonTeacher>
			<lessonDesc :title="$t('index').courseIntroduction" :content="musicIndexInfo.content || $t('index').NoIntroduction"></lessonDesc>
			<lessonComment :title="$t('index').Curr_evaluation" :comment="comment"></lessonComment>
			<lessonScience :title="$t('index').Teaching_environment" :science="scienceImg"></lessonScience>
		</view>
		<span class="sign_up">{{ $t('index').sign_up }}</span>
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
			lessonId: ''
		};
	},
	onShow() {
		if (uni.getStorageSync('langType') == 'en-US') {
			uni.setNavigationBarTitle({
				title: 'Lesson Detail'
			});
		} else {
			uni.setNavigationBarTitle({
				title: '课程详情'
			});
		}
	},
	onLoad(obj) {
		uni.setNavigationBarColor({
			frontColor: '#ffffff',
			backgroundColor: '#ffffff'
		});
		this.lessonId = obj.lessonId;
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
					class_id: lessonId
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
					class_id: musicSunId,
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
					class_id: id,
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
		display: inline-block;
		width: 100%;
		line-height: 100upx;
		background: rgba(250, 212, 42, 1);
		font-size: 28upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		position: fixed;
		bottom: 0;
	}
}
</style>
