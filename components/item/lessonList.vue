<template>
	<div class="lesson_content">
		<ul>
			<li v-for="(item, index) in listInfo" :key="index">
				<navigator v-if="lessonType==='lessonCopy'" :url="'/pages/lessonDetail/lessonDetail?lessonId='+item.id">
					<image :src="item.photo || image">
					</image>
				</navigator>
				<image v-else :src="item.photo || image">
				</image>
				<div class="lesson_messgae">
					<p class="lesson_title">{{item.name}}</p>
					<startclass :star='item.star' v-if="lessonType==='lessonCopy' || lessonType==='teacherDetail'" size='14'></startclass>
					<p v-else class="lesson_winer">教师 Jennifer Young</p>
					<div class="lesson_pay">
						<span v-if="lessonType==='lessonCopy' 
							  || lessonType==='teacherDetail'" 
							  class="teacher_number">
							  {{item.teacher_count > 0 ? '共 '+item.teacher_count+' 名教师' : '暂无教师'}}</span>
						<span v-else class="start_time">2019年3月15日开课</span>
						<navigator url="/pages/evaluate/evaluate" v-if="lessonType === '1'"><span class="go_pay">去评价</span></navigator>
						<navigator url="/pages/evaluate/evaluate" v-if="lessonType === '2'"><span class="go_pay">去支付</span></navigator>
						<navigator url="/pages/evaluate/evaluate" v-if="lessonType === '3'"><span class="go_pay">查看</span></navigator>
						<navigator url="/pages/evaluate/evaluate" v-if="lessonType === '4'"><span class="go_pay">去评价</span></navigator>
						<navigator url="/pages/evaluate/evaluate" v-if="lessonType==='lessonCopy' || lessonType==='teacherDetail'"><span
							 class="go_pay">报名</span></navigator>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import startclass from '../starclass.vue';
	export default {
		components: {
			startclass
		},
		props: {
			lessonType: {
				type: String,
				default: '4'
			}, //lessonType类型判断  1为全部  2为待支付  3为待开课  4为已完成
			listInfo: Array
		},
		data() {
			return {
				image: '../../static/img/demo.jpg'
			}
		},
	};
</script>

<style lang="less" scoped>
	.lesson_content {
		ul {
			li {
				display: flex;
				border-top: 2upx solid #ddd;
				padding: 30upx 0;

				&:first-child {
					border-top: 0;
				}

				image {
					width: 254upx;
					height: 100%;
					border-radius:6upx;
				}

				.lesson_messgae {
					width: 100%;
					font-weight: 500;
					text-align: left;
					margin-left: 20upx;

					p {
						margin-bottom: 10upx;
					}

					.lesson_title {
						font-size: 32upx;
						font-family: PingFangSC-Medium;
						color: rgba(26, 26, 26, 1);
						font-weight: 600;
					}

					.lesson_winer {
						font-size: 28upx;
						font-family: PingFangSC-Regular;
						color: rgba(102, 102, 102, 1);
					}

					.lesson_pay {
						display: flex;
						align-items: center;
						justify-content: space-between;

						.go_pay {
							padding: 2upx 15upx;
							background: rgba(250, 212, 42, 1);
							border-radius: 8upx;
							font-size: 30upx;
						}

						.start_time {
							font-size: 24upx;
							font-family: PingFangSC-Regular;
							color: rgba(138, 213, 25, 1);
						}

						.teacher_number {
							font-size: 24upx;
							font-family: PingFangSC-Regular;
							color: rgba(153, 153, 153, 1);
						}
					}
				}
			}
		}
	}
</style>
