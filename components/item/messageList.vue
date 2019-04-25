<template>
	<div class="message_list_content">
		<ul v-if="messageList.length">
			<navigator hover-class="none" v-for="(item, index) in 5" :key="index" :url="'/pages/adjustmentDetail/adjustmentDetail?messageId=' + index">
				<li>
					<p>
						<span>{{$t('index').System_notification}}</span>
						<s>2019-1-12日</s>
					</p>
					<span class="message_content">课程《吉他入门12期》报名成功</span>
				</li>
			</navigator>
		</ul>
		<noContent v-else :title="$t('index').No_data"></noContent>
	</div>
</template>

<script>
import noContent from '../noContent.vue';
export default {
	components: {
		noContent
	},
	props: {
		messageList: Array
	}
};
</script>

<style lang="less" scoped>
.message_list_content {
	ul {
		width: 100%;
		padding-left: 0;
		display: flex;
		text-align: left;
		flex-direction: column;

		li {
			width: 100%;
			display: flex;
			flex-direction: column;
			padding: 30upx 25upx;
			border-bottom: 2upx solid rgba(231, 232, 234, 1);
			font-weight: 500;

			p {
				display: flex;
				justify-content: space-between;
				margin-bottom: 20upx;

				span {
					font-weight: 600;
					font-size: 32upx;
					font-family: PingFangSC-Medium;
					color: rgba(51, 51, 51, 1);
					margin-bottom: 10upx;
				}

				s {
					text-decoration: none;
					font-size: 24upx;
					font-family: PingFangSC-Regular;
					color: rgba(102, 102, 102, 1);
				}
			}

			.message_content {
				font-size: 28upx;
				font-family: PingFangSC-Regular;
				color: rgba(153, 153, 153, 1);
			}
		}
	}
}
</style>
