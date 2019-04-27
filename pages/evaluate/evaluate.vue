<template>
	<div class="evaluate">
		<commentStarClasss :msg="$t('index').course" title="吉他快速入门" content="教师 Jennifer Young"></commentStarClasss>
		<view class="item">
			<startclass :title="$t('index').star" size=28></startclass>
		</view>
		<commentStarClasss :msg="$t('index').Teacher" title="Laura Johnson" content="从事10年钢琴教学，拥有丰富教学经验，技艺精湛，曾多次获得演奏大奖。"></commentStarClasss>
		<view class="item">
			<startclass :title="$t('index').star" size=28></startclass>
		</view>
		<view class="item">
			<startclass :title="$t('index').Teacher_teaching" size=28></startclass>
		</view>
		<view class="item">
			<startclass :title="$t('index').Teaching_methods" size=28></startclass>
		</view>
		<view class="item">
			<startclass :title="$t('index').Teaching_attitude" size=28></startclass>
		</view>
	</div>
</template>

<script>
	import commentStarClasss from '../../components/comment/commentStarClasss.vue';
	import startclass from '../../components/starclass.vue';
	export default {
		name: 'evaluate',
		components: {
			commentStarClasss,
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
<<<<<<< .mine
	.evaluate {
		padding: 0 15upx;
	}



=======
.evaluate {
	padding: 0 30upx 200upx 30upx;
	.item{
		margin-top: 32upx;
	}
}
>>>>>>> .theirs
</style>
