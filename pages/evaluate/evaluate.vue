<template>
	<div class="evaluate">
		<commentStarClass msg="课程" title="吉他快速入门" content="教师 Jennifer Young" @sendData='getContent1'></commentStarClass>
		<startclass title="星级" :size="25" :disabled="false" @sendVal='getData1'></startclass>
		<commentStarClass msg="教师" title="Laura Johnson" content="从事10年钢琴教学，拥有丰富教学经验，技艺精湛，曾多次获得演奏大奖。" @sendData='getContent2'></commentStarClass>
		<startclass title="星级" :size="25" :disabled="false" @sendVal='getData2'></startclass>
		<startclass title="教师授课" :size="25" :disabled="false" @sendVal='getData3'></startclass>
		<startclass title="教师授课方式" :size="25" :disabled="false" @sendVal='getData4'></startclass>
		<startclass title="教师授课态度" :size="25" :disabled="false" @sendVal='getData5'></startclass>
	</div>
</template>

<script>
	import commentStarClass from '../../components/comment/commentStarClass.vue';
	import startclass from '../../components/starclass.vue';
	export default {
		name: 'evaluate',
		components: {
			commentStarClass,
			startclass
		},
		data() {
			return {
				order_id: '',
				class_content: '',
				class_star: '',
				teacher_content: '',
				teacher_star: '',
				teacher_teach_star: '',
				teacher_teach_mode_star: '',
				teacher_teach_bearing_star: ''
			}
		},
		onShow() {
			if (uni.getStorageSync('langType') == 'en-US') {
				uni.setNavigationBarTitle({
					title: 'evaluate'
				});
			} else {
				uni.setNavigationBarTitle({
					title: '评价'
				});
			}
		},
		onLoad(obj) {
			this.order_id = obj.musicId
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
						})
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: "none"
						})
					}
				}
			})
		},
		methods: {
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
			},
		}
	};
</script>

<style lang="less" scoped>
	.evaluate {
		padding: 0 15upx;
	}
</style>
