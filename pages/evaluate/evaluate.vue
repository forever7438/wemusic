<template>
	<div class="evaluate">
		<div class="item">
			<commentStarClass
				:msg="$t('index').Course_evaluation"
				:title="detail.class_sun.class_name"
				:content="detail.class_sun.teacher_name"
				:src="detail.class_sun.class_photo"
				@sendData="getContent1"
			></commentStarClass>
		</div>
		<div class="item">
			<startclass :title="$t('index').star" :font_size="Number(40)" :size="Number(28)" starColor="#666666" @sendVal="getData1" :disabled="false"></startclass>
		</div>
		<div style="border: 2upx solid rgba(231,232,234,1);width: 100%;margin: 36upx 0 60upx 0;"></div>
		<div class="item">
			<commentStarClass
				:msg="$t('index').Evaluation_Teachers"
				:title="detail.class_sun.teacher_name"
				content="从事10年钢琴教学，拥有丰富教学经验，技艺精湛，曾多次获得演奏大奖。"
				@sendData="getContent2"
			></commentStarClass>
		</div>
		<div class="item">
			<startclass :title="$t('index').star" :size="Number(28)" :font_size="Number(40)" starColor="#666666" @sendVal="getData2" :disabled="false"></startclass>
		</div>
		<div class="item">
			<startclass :title="$t('index').Teacher_teaching" :size="Number(28)" :font_size="Number(40)" starColor="#666666" @sendVal="getData3" :disabled="false"></startclass>
		</div>
		<div class="item">
			<startclass :title="$t('index').Teaching_methods" :size="Number(28)" :font_size="Number(40)" starColor="#666666" @sendVal="getData4" :disabled="false"></startclass>
		</div>
		<div class="item">
			<startclass :title="$t('index').Teaching_attitude" :size="Number(28)" :font_size="Number(40)" starColor="#666666" @sendVal="getData5" :disabled="false"></startclass>
		</div>
	</div>
</template>

<script>
import commentStarClass from '../../components/comment/commentStarClass.vue';
import startclass from '../../components/starclass.vue';
export default {
	components: {
		commentStarClass,
		startclass
	},
	data() {
		return {
			classId: '',
			order_id: '',
			class_content: '',
			class_star: '',
			teacher_content: '',
			teacher_star: '',
			teacher_teach_star: '',
			teacher_teach_mode_star: '',
			teacher_teach_bearing_star: '',
			detail: {}
		};
	},
	onLoad(obj) {
		this.order_id = obj.orderId;
		this.classId = obj.classId;
		this.getLessonDetail();
	},
	onShow() {
		if (uni.getStorageSync('langType') == 'en-US') {
			uni.setNavigationBarTitle({
				title: 'Evaluate'
			});
		} else {
			uni.setNavigationBarTitle({
				title: '评价'
			});
		}
	},
	onNavigationBarButtonTap(obj) {
		this.ajax({
			url: 'studentclass/user_assess',
			data: {
				order_id: this.order_id,
				class_star: this.class_star,
				class_content: this.class_content,
				teacher_star: this.teacher_star,
				teacher_content: this.teacher_content,
				teacher_teach_bearing_star: this.teacher_teach_bearing_star,
				teacher_teach_mode_star: this.teacher_teach_mode_star,
				teacher_teach_star: this.teacher_teach_star
			},
			success: res => {
				if (res.data.body === 'success') {
					uni.showToast({
						title: '评价成功',
						icon: 'none'
					});
					setTimeout(function() {
						uni.redirectTo({
							url: '/pages/lesson/lesson?type=-1'
						});
					}, 1500);
				} else {
					uni.showToast({
						title: res.data.msg,
						icon: 'none'
					});
				}
			}
		});
	},
	methods: {
		//获取课程详情
		getLessonDetail() {
			this.ajax({
				url: 'music/class_sun_class',
				data: {
					class_sun_id: this.classId
				},
				success: res => {
					this.detail = res.data.data;
				}
			});
		},
		getData1(data) {
			this.class_star = data * 2;
		},
		getData2(data) {
			this.teacher_star = data * 2;
		},
		getData3(data) {
			this.teacher_teach_star = data * 2;
		},
		getData4(data) {
			this.teacher_teach_mode_star = data * 2;
		},
		getData5(data) {
			this.teacher_teach_bearing_star = data * 2;
		},
		getContent1(data) {
			this.class_content = data;
		},
		getContent2(data) {
			this.teacher_content = data;
		}
	}
};
</script>

<style lang="less" scoped>
.evaluate {
	padding: 0 30upx 200upx 30upx;

	.item {
		margin-top: 32upx;
	}
}
</style>
