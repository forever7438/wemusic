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
			<h3>1月6日全部课程</h3>
			<classList></classList>
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
			value: ''
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
			// this.showPicker = false;
			if (e) {
				this[this.type] = e.value;
				console.log(e);
			}
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
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		padding-left: 20upx;
	}
}
</style>
