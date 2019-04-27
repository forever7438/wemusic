<template>
	<div class="evaluate">
		<div class="item">
			<commentStarClass :msg="$t('index').Course_evaluation" title="吉他快速入门" content="教师 Jennifer Young"></commentStarClass>
		</div>
		<div class="item">
			<startclass :title="$t('index').star" :font_size="Number(40)" :size="Number(28)" starColor="#666666"></startclass>
		</div>
		<div style="border: 2upx solid rgba(231,232,234,1);width: 100%;margin: 36upx 0 60upx 0;"></div>
		<div class="item">
			<commentStarClass :msg="$t('index').Evaluation_Teachers" title="Laura Johnson" content="从事10年钢琴教学，拥有丰富教学经验，技艺精湛，曾多次获得演奏大奖。"></commentStarClass>
		</div>
		<div class="item">
			<startclass :title="$t('index').star" :size="Number(28)" :font_size="Number(40)" starColor="#666666"></startclass>
		</div>
		<div class="item">
			<startclass :title="$t('index').Teacher_teaching" :size="Number(28)" :font_size="Number(40)" starColor="#666666"></startclass>
		</div>
		<div class="item">
			<startclass :title="$t('index').Teaching_methods" :size="Number(28)" :font_size="Number(40)" starColor="#666666"></startclass>
		</div>
		<div class="item">
			<startclass :title="$t('index').Teaching_attitude" :size="Number(28)"  :font_size="Number(40)" starColor="#666666"></startclass>
		</div>
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
				title: 'Evaluate'
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
	padding-bottom: 200upx;
	.item{
		margin: 30upx;
	}
}
</style>
