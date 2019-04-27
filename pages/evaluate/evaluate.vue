<template>
	<div class="evaluate">
		<commentStarClass :msg="$t('index').course" title="吉他快速入门" content="教师 Jennifer Young"></commentStarClass>
		<view class="item">
			<startclass :title="$t('index').star" size=28></startclass>
		</view>
		<commentStarClass :msg="$t('index').Teacher" title="Laura Johnson" content="从事10年钢琴教学，拥有丰富教学经验，技艺精湛，曾多次获得演奏大奖。"></commentStarClass>
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
	padding: 0 30upx 200upx 30upx;
	.item{
		margin-top: 32upx;
	}
}
</style>
