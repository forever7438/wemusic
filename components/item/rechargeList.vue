<template>
	<div class="recharge_content">
		<ul v-if="moneyList.length">
			<li v-for="(item, index) in moneyList" :key="index">
				<div class="recharge_message">
					<p class="recharge_title">{{ type == 'consumption' ? '购买' : '消费' }}</p>
					<p class="recharge_time">{{ item.time || item.ok_time | timeDate }}</p>
				</div>
				<div class="recharge_money">
					<p>{{ type == 'consumption' ? '-' : '+' }}￥{{ item.money }}</p>
				</div>
			</li>
		</ul>
		<noContent v-else :title="$t('index').No_data"></noContent>
	</div>
</template>

<script>
	import {
		dateUtils
	} from '../../common/util.js';
	import noContent from '../noContent.vue';
	export default {
		props: {
			moneyList: Array,
			type: String
		},
		components: {
			noContent
		},
		filters: {
			timeDate: time => {
				return dateUtils.format(time);
			}
		}
	};
</script>

<style lang="less" scoped>
	.recharge_content {
		margin-top: 20upx;

		ul {
			width: 100%;

			li {
				height: 100upx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				text-align: left;
				font-weight: 500;
				border-bottom: 2upx solid #ddd;
				margin-top: 40upx;

				&:first-of-type {
					margin-top: 0;
				}

				.recharge_message {
					.recharge_title {
						font-size: 32upx;
						font-family: PingFangSC-Regular;
						color: rgba(51, 51, 51, 1);
						font-weight: 400;
					}

					.recharge_time {
						font-size: 24upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(153, 153, 153, 1);
					}
				}

				.recharge_money {
					p {
						font-size: 32upx;
						font-family: PingFangSC-Medium;
						font-weight: 500;
						color: rgba(250, 212, 42, 1);
					}
				}
			}
		}

		.no_content {
			height: 600upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			image {
				width: 216upx;
				height: 244upx;
			}

			text {
				font-size: 32upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(0, 0, 0, 0.5);
			}
		}
	}
</style>
