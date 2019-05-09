<template>
	<div class="comment_list">
		<h3>
			{{ $t('index').comment }}
			<span>({{ message }})</span>
		</h3>
		<ul v-if="message != 0">
			<li v-for="(item, index) in list" :key="index">
				<div class="comment_title">
					<image :src="item.people_photo || img"></image>
					<span>
						<p class="comment_name">{{ item.people_name }}</p>
						<p class="comment_time">{{ item.time | formatDate }}</p>
					</span>
				</div>
				<div class="comment_content">{{ item.body }}</div>
			</li>
		</ul>
		<view class="no_content" v-else>
			<image src="../../static/img/nothing.png"></image>
			<text>{{ $t('index').No_data }}</text>
		</view>
	</div>
</template>

<script>
import { dateUtils } from '../../common/util.js';
export default {
	props: {
		message: Number,
		list: Array
	},
	data() {
		return {
			img: '../../static/img/icon_touxiang02.png'
		};
	},
	filters: {
		formatDate: time => {
			return dateUtils.format(time);
		}
	}
};
</script>

<style lang="less">
.comment_list {
	// padding: 0 0.2rem;
	margin-bottom: 70upx;

	h3 {
		text-align: left;
		font-size: 48upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(34, 34, 34, 1);
		margin: 10upx 0;

		span {
			font-size: 32upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(149, 149, 149, 1);
		}
	}

	ul {
		padding-left: 0;

		li {
			display: flex;
			align-items: center;
			flex-direction: column;
			margin-bottom: 20upx;

			.comment_title {
				display: flex;
				width: calc(100vw - 60upx);

				image {
					width: 80upx;
					height: 80upx;
					border-radius: 50%;
					margin-right: 10upx;
				}

				span {
					.comment_name {
						font-size: 28upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(102, 102, 102, 1);
					}

					.comment_time {
						font-size: 24upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(153, 153, 153, 1);
					}
				}
			}

			.comment_content {
				width: calc(100vw - 60upx);
				margin-left: 180upx;
				text-align: left;
				font-size: 32upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
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
