<template>
	<div class="start_class">
		<p>{{ title }}</p>
		<div class="start_class_in" style="margin-left:0;">
			<uni-rate :size="size" :value="star" :isFill="isFill" :disabled="disabled" @change="getVal"></uni-rate>
			<span class="number" :style="{ color: starColor }">{{ star }}</span>
		</div>
	</div>
	<!-- <div class="start_class" v-else>
		<span style="font-size: 24upx;">暂无评分</span>
	</div> -->
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue';
	export default {
		components: {
			uniRate
		},
		props: {
			title: String,
			size: {
				type: Number,
				default: 13
			},
			star: {
				type: Number,
				default: 0
			},
			starColor: {
				type: String,
				default: '#FFFFFF'
			},
			isFill: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				value: 0
			};
		},
		methods: {
			getVal(val) {
				this.$emit('sendVal', val.value);
			}
		}
	};
</script>

<style lang="less" scoped>
	.start_class {
		margin-top: 10upx;

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
				margin-left: 10upx;
				font-size: 24upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
			}
		}
	}
</style>
