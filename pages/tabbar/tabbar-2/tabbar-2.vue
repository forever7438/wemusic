<template>
	<view class="calendar-content">
		<view class="">
			<mx-date-picker :show="showPicker" :type="type" format="yyyy/mm/dd hh:ii:ss" :value="value" color="#FAD42A"
			 :show-tips="true" :show-seconds="true" @confirm="onSelected" @cancel="onSelected" @selectTime="getTime" />
		</view>
		<view class="class_arrange">
			<h3>{{ title }}全部课程</h3>
			<classList :classList="classList" :isTeacher="isTeacher"></classList>
		</view>
		<view class="meun_list">
			<view v-if="!isTeacher" @tap="goPath('/pages/tabbar/tabbar-1/tabbar-1', 'home')">
				<image :src="pathType == 'home' ? '/static/img/tabbar/homeactive.png' : '/static/img/tabbar/home.png'"></image>
			</view>
			<view @tap="goPath('/pages/tabbar/tabbar-2/tabbar-2', 'class')">
				<image :src="pathType == 'class' ? '/static/img/tabbar/classactive.png' : '/static/img/tabbar/class.png'"></image>
			</view>
			<view @tap="goPath('/pages/tabbar/tabbar-5/tabbar-5', 'me')">
				<image :src="pathType == 'me' ? '/static/img/tabbar/meactive.png' : '/static/img/tabbar/me.png'"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import MxDatePicker from '@/components/mx-datepicker/mx-datepicker.vue';
	import classList from '../../../components/item/classList.vue';
	export default {
		components: {
			classList,
			MxDatePicker
		},

		data() {
			return {
				title: '',
				time: '',
				pathType: 'class',
				showPicker: false,
				type: 'date',
				value: '',
				start_time: '',
				end_time: '',
				classList: [],
				isTeacher: false
			};
		},
		onReady() {
			this.onShowDatePicker('date');
			uni.getStorageSync('type') == 1 ? (this.isTeacher = false) : (this.isTeacher = true);
		},
		onLoad(obj) {
			this.pathType = obj.type;
			this.time = new Date().getTime();
			this.title = `${new Date().getMonth() + 1}月${new Date().getDate()}日`;
			this.getLessonList();
		},
		onShow() {
			if (uni.getStorageSync('langType') == 'en-US') {
				uni.setNavigationBarTitle({
					title: 'Class Schedule Card'
				});
			} else {
				uni.setNavigationBarTitle({
					title: '课程表'
				});
			}
		},
		onNavigationBarButtonTap(obj) {
			uni.navigateTo({
				url: '/pages/classNotice/classNotice'
			});
		},
		methods: {
			getTime(data) {
				this.title = `${new Date(data).getMonth() + 1}月${new Date(data).getDate()}日`;
				this.time = new Date(data.toLocaleDateString()).getTime();
				this.getLessonList();
			},
			goPath(path, type) {
				uni.redirectTo({
					url: `${path}?type=${type}`
				});
			},
			onShowDatePicker(type) {
				//显示
				this.type = type;
				this.showPicker = true;
				this.value = this[type];
			},
			onSelected(e) {
				//选择
				if (e) {
					this[this.type] = e.value;
					this.start_time = new Date(e.date[0]).getTime();
					this.end_time = new Date(e.date[1]).getTime();
					this.getLessonList();
				}
			},

			//获取课程列表
			getLessonList() {
				this.ajax({
					url: uni.getStorageSync('type') == 1 ? 'studentclass/class_list' : 'teacherclass/class_list_time',
					data: {
						time: Math.round(this.time / 1000)
					},
					success: res => {
						if (res.data.body === 'success') {
							this.classList = res.data.data;
						}
					}
				});
			}
		}
	};
</script>

<style lang="less">
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff;
		background: #fff;
	}

	view {
		font-size: 28upx;
		line-height: inherit;
	}

	.class_arrange {
		margin-top: 580upx;
		padding: 20upx;

		h3 {
			text-align: left;
			font-size: 48upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
			padding-left: 20upx;
		}
	}

	.meun_list {
		position: fixed;
		bottom: 0;
		width: 100%;
		display: flex;
		height: 98upx;
		background-color: #fff;
		align-items: center;
		justify-content: space-around;
		border-top: 2upx solid #ddd;

		view {
			flex: 1;
			text-align: center;

			image {
				width: 48upx;
				height: 48upx;
			}
		}
	}
</style>
