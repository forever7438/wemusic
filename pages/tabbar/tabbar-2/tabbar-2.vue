<template>
	<view class="calendar-content">
		<view class="">
			<mx-date-picker
				:show="showPicker"
				:type="type"
				format="yyyy/mm/dd hh:ii:ss"
				:value="value"
				color="#FAD42A"
				:show-tips="true"
				:begin-text="'开始'"
				:end-text="'结束'"
				:show-seconds="true"
				@confirm="onSelected"
				@cancel="onSelected"
			/>
		</view>
		<view class="class_arrange">
			<h3>全部课程</h3>
			<classList :classList="classList"></classList>
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
			showPicker: false,
			type: 'rangetime',
			value: '',
			start_time: '',
			end_time: '',
			classList: []
		};
	},
	onReady() {
		this.onShowDatePicker('rangetime');
	},
	onNavigationBarButtonTap(obj) {
		uni.navigateTo({
			url: '/pages/classNotice/classNotice'
		});
	},
	methods: {
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
				url: 'studentclass/class_list',
				data: {
					start_time: this.start_time,
					end_time: this.end_time
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
	margin-top: 650upx;
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
</style>
