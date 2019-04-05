<template>
	<div class="my_evaluate_content">
		<ul>
			<li :class="{ isActive: isActive }" @click="(lessonType = '4'), (isActive = true), (isActives = false)">待评价</li>
			<li :class="{ isActive: isActives }" @click="(lessonType = '3'), (isActive = false), (isActives = true)">已评价</li>
		</ul>
		<lesson-list :lessonType="lessonType"></lesson-list>
	</div>
</template>

<script>
	import lessonList from '../../components/item/lessonList.vue';
	export default {
		components: {
			lessonList
		},
		data() {
			return {
				lessonType: '',
				isActive: true,
				isActives: false
			};
		},
		onLoad(obj) {
			this.lessonType = obj.type;
		}
	};
</script>

<style lang="less" scoped>
	.my_evaluate_content {
		padding: 0 15upx;

		ul {
			display: flex;
			align-items: center;
			justify-content: space-around;
			font-size: 36upx;
			font-family: PingFangSC-Regular;
			font-weight: 600;
			color: rgba(51, 51, 51, 1);
			height: 90upx;

			li {
				display: flex;
				align-items: center;
			}

			.isActive {
				color: #fad42a;
			}
		}
	}
</style>
