<template>
	<div class="lesson_content">
		<ul v-if="listInfo.length">
			<li v-for="(item, index) in listInfo" :key="index">
				<image :src="item.class_photo || image"></image>
				<div class="lesson_messgae">
					<p class="lesson_title">{{ item.class_name || item.name }}</p>
					<div class="lesson_pay">
						<span class="start_time">{{ item.start_time | timeDate }} {{ $t('index').Class_begins }}</span>
						<navigator hover-class="none" :url="'/pages/lessonCopy/lessonCopy?musicId=' + item.class_id">
							<span class="go_pay">{{ $t('index').See }}</span>
						</navigator>
					</div>
					<div class="lesson_student">
						学生
						<span v-for="(item, index) in item.student_list" :key="index">{{ item.name }}</span>
					</div>
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
	import startclass from '../starclass.vue';
	import noContent from '../noContent.vue';
	export default {
		components: {
			startclass,
			noContent
		},
		props: {
			musicId: String,
			lessonType: {
				type: String,
				default: '-1'
			}, //lessonType类型判断  -1为全部  0为待支付  1为待开课  2为已完成
			listInfo: Array,
			success: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				image: '../../static/img/demo.jpg'
			};
		},
		onLoad() {
			this.getCourseList();
		},
		filters: {
			timeDate: time => {
				return dateUtils.format(time);
			}
		},
		methods: {
			error() {
				consoel.log('ok');
			},
			getCourseList() {
				console.log('ok');
			}
		}
	};
</script>

<style lang="less" scoped>
	.lesson_content {
		// padding-top: 60upx;

		ul {
			li {
				display: flex;
				border-top: 2upx solid #ddd;
				padding: 30upx 0;
				height: 220upx;
				overflow: hidden;

				&:first-child {
					border-top: 0;
				}

				image {
					width: 254upx;
					height: 100%;
					border-radius: 6upx;
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

					.lesson_student {
						display: flex;
						align-items: center;
						font-size: 24upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(102, 102, 102, 1);

						span {
							margin-left: 10upx;
							font-size: 24upx;
							font-family: PingFangSC-Medium;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
						}
					}

					.lesson_pay {
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin: 20upx 0;

						.go_pay {
							padding: 2upx 36upx;
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
							max-width: 240upx;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							margin-top: 36upx;
							font-family: PingFangSC-Regular;
							color: rgba(153, 153, 153, 1);
						}
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
