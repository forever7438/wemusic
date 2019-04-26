<template>
	<div class="evaluate">
		<commentStarClass msg="课程" title="吉他快速入门" content="教师 Jennifer Young"></commentStarClass>
		<startclass title="星级"></startclass>
		<commentStarClass msg="教师" title="Laura Johnson" content="从事10年钢琴教学，拥有丰富教学经验，技艺精湛，曾多次获得演奏大奖。"></commentStarClass>
		<startclass title="星级"></startclass>
		<startclass title="教师授课"></startclass>
		<startclass title="教师授课方式"></startclass>
		<startclass title="教师授课态度"></startclass>
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
};
</script>

<style lang="less" scoped>
.evaluate {
	padding: 0 15upx;
}
</style>
