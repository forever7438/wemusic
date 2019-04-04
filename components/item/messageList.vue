<template>
	<div class="message_list_content">
		<ul>
			<li v-for="(item, index) in 5" :key="index">
				<p>
					<span>系统通知</span>
					<s>2019年1月12日</s>
				</p>
				<span class="message_content">课程《吉他入门12期》报名成功</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {};
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
			padding: 20upx 0;
			border-bottom: 2upx solid #ddd;
			font-weight: 500;
			p {
				display: flex;
				justify-content: space-between;
				margin-bottom: 0;
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
