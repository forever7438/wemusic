<template>
	<view class="finance_list">
		<view v-if="financeList.length" class="finance_list_item" v-for="(item, index) in financeList" :key="index">
			<text class="finance_year">{{ (item.time * 1000) | getDateYear }} Year</text>
			<view class="finance_content">
				<text class="finance_time">{{ (item.start_time * 1000) | formateTime }}-{{ (item.stop_time * 1000) | formateTime }}</text>
				<view class="finance_money">
					<text>$2000.00</text>
					<text>{{ $t('index').money }}</text>
				</view>
				<text class="fun-tag"></text>
			</view>
			<view class="finance_option">
				<view class="total_class">
					<text>30</text>
					<text style="margin-right: 60upx;">Total Hours</text>
				</view>
				<view class="total_student">
					<text>5</text>
					<text>{{ $t('index').Students }}</text>
				</view>
				<button hover-class="btn-hover" @tap="addFinance(item.id)">{{ $t('index').Apply }}</button>
			</view>
		</view>
		<noContent v-else title="暂无信息"></noContent>
	</view>
</template>

<script>
import { getDates } from '../../common/common.js';
import noContent from '../noContent.vue';
export default {
	props: {
		financeList: Array
	},
	components: {
		noContent
	},
	filters: {
		formateTime: time => {
			return getDates(time);
		},
		getDateYear: time => {
			return new Date(time).getFullYear();
		}
	},
	methods: {
		//提交申请
		addFinance(financeId) {
			this.ajax({
				url: 'teacherclass/finance_update',
				data: {
					finance_id: financeId
				},
				success: res => {
					if (res.data.body === 'success') {
						uni.showToast({
							title: '您的申请已提交,请耐心等待',
							icon: 'none'
						});
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				}
			});
		}
	}
};
</script>

<style lang="less">
@import '../../common/global.less';

.finance_list {
	.finance_list_item {
		padding: 0 30upx 10upx;
		border-bottom: 2upx solid #ddd;

		.finance_year {
			display: inline-block;
			margin: 20upx 0;
			font-size: 48upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}

		.finance_content {
			position: relative;
			display: flex;
			align-items: end;
			flex-direction: column;

			.finance_time {
				font-size: 24upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
			}

			.finance_money {
				margin: 20upx 0;
				display: flex;
				align-items: center;

				text {
					&:nth-of-type(1) {
						margin-right: 30upx;
						font-size: 48upx;
						font-family: DINAlternate-Bold;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
					}

					&:nth-of-type(2) {
						font-size: 24upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(51, 51, 51, 1);
					}
				}
			}

			.fun-tag {
				position: absolute !important;
				top: -40upx;
				right: -82upx;
				.global-fun-tag(80upx, #ff4040, '未发送');
			}
		}

		.finance_option {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.total_class,
			.total_student {
				display: flex;
				align-items: center;

				text {
					&:nth-of-type(1) {
						margin-right: 30upx;
						font-size: 48upx;
						font-family: DINAlternate-Bold;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
					}

					&:nth-of-type(2) {
						font-size: 24upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(51, 51, 51, 1);
					}
				}
			}

			button {
				width: 128upx;
				line-height: 44upx;
				margin-right: 0;
				font-size: 28upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
				background: rgba(250, 212, 42, 1);
				border-radius: 6upx;
			}
		}
	}
}
</style>
