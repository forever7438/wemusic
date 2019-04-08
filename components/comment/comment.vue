<template>
	<div class="comment_list">
		<h3>
			评论
			<span>({{ message }})</span>
		</h3>
		<ul>
			<li v-for="(item, index) in 5" :key="index">
				<div class="comment_title">
					<image src="../../static/img/lf.jpg"></image>
					<span>
						<p class="comment_name">George Davis</p>
						<p class="comment_time">2018/11/12 10:55</p>
					</span>
				</div>
				<div class="comment_content">你真棒！加油</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		message: Number,
		list: Array
	}
};
</script>

<style lang="less">
.comment_list {
	// padding: 0 0.2rem;
	h3 {
		text-align: left;
		font-size: 48upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(34, 34, 34, 1);
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
				width: 100%;
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
				width: 100%;
				margin-left: 180upx;
				text-align: left;
				font-size: 32upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
			}
		}
	}
}
</style>
