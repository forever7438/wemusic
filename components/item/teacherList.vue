<template>
	<div class="lesson_content" :class="{ select: selectFlag }">
		<text class="teacher_class" v-if="!selectFlag">{{ title }}</text>
		<ul>
			<li v-for="(item, index) in listInfo" :key="index" :class="{ select: selectFlag }">
				<navigator hover-class="none" :url="'/pages/teacherDetail/teacherDetail?teacherId=' + item.id"><image :src="item.photo | imgformat"></image></navigator>
				<div class="lesson_messgae">
					<p class="lesson_title">
						{{ item.name }}
						<span class="go_pay" @click="selectTeacherFunc(item)">{{ $t('index').Choose }}</span>
					</p>
					<startclass :star="Number(item.star)" :size="13" starColor="#666666"></startclass>
					<!-- <p v-else class="lesson_winer">教师 Jennifer Young</p> -->
					<div class="lesson_pay">
						<span class="teacher_number">{{ item.content || $t('index').NoIntroduction }}</span>
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
		selectFlag: Boolean,
		musicId: String,
		lessonType: {
			type: String,
			default: '4'
		}, //lessonType类型判断  1为全部  2为待支付  3为待开课  4为已完成
		listInfo: Array,
		title: String
	},
	data() {
		return {
			image: '../../static/img/icon_touxiang02.png'
		};
	},
	methods: {
		getCourseList() {
			// console.log('ok');
		},
		selectTeacherFunc(item) {
			this.$emit('selectFunction', item);
		}
	},
	onLoad() {
		// console.log(this.musicId);
		this.getCourseList();
	}
};
</script>

<style lang="less" scoped>
.lesson_content.select {
	padding-bottom: 0;
}
.lesson_content {
	padding: 60upx 30upx;
	.teacher_class {
		font-size: 48upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
	ul {
		li.select {
			padding: 0;
			.go_pay {
				color: rgba(153, 153, 153, 1);
				background: rgba(229, 229, 229, 1);
			}
		}
		li {
			position: relative;
			overflow: hidden;
			display: flex;
			border-top: 2upx solid #ddd;
			padding: 30upx 0;
			// height: 240upx;
			&:first-child {
				border-top: 0;
			}
			.go_pay {
				padding: 2upx 36upx;
				background: rgba(250, 212, 42, 1);
				border-radius: 8upx;
				font-size: 28upx;
				position: absolute;
				top: 30upx;
				right: 0;
				color: rgba(51, 51, 51, 1);
				font-weight: 400;
			}
			image {
				width: 180upx;
				height: 180upx;
				border-radius: 6upx;
			}

			.lesson_messgae {
				width: 100%;
				font-weight: 500;
				text-align: left;
				margin-left: 20upx;
				height: 180upx;
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
					.start_time {
						font-size: 24upx;
						font-family: PingFangSC-Regular;
						color: rgba(138, 213, 25, 1);
					}

					.teacher_number {
						font-size: 24upx;
						margin-top: 20upx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
						font-family: PingFangSC-Regular;
						color: rgba(153, 153, 153, 1);
					}
				}
			}
		}
	}
}
</style>
