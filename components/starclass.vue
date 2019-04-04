<template>
	<div class="start_class">
		<p>{{ title }}</p>
		<div class="start_class_in">
			<uni-rate :size="size" :value="3" :isFill="false"></uni-rate>
			<span class="number">{{ fraction }}</span>
		</div>
	</div>
</template>

<script>
import uniRate from '@/components/uni-rate/uni-rate.vue';
export default {
	components: {
		uniRate
	},
	props: {
		title: String,
		size: String
	},
	data() {
		return {
			value: 0,
			fraction: 0
		};
	},
	methods: {
		getNumber(val) {
			this.fraction = val * 20;
		}
	}
};
</script>

<style lang="less" scoped>
.start_class {
	margin-top: 40upx;
	p {
		font-size: 32upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
	.start_class_in {
		display: flex;
		align-items: center;
		// justify-content: center;
		.number {
			margin-left: 0.3rem;
			font-size: 40upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
		}
	}
}
</style>
