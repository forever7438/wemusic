<template>
	<ul class="time_list">
		<li v-for="(item, index) in 3" @click="flag && selctitem(index)" :class="{ active: item.active }" :key="index">
			<p>
				<span class="date">2019年11月11日</span>
				<span class="price">
					<span>$</span>
					11.00
				</span>
			</p>
			<p class="time">9:00 - 10:00</p>
			<p class="duration">时长1小时</p>
		</li>
		<li v-if="!flag" class="add_time" @tap="toggleTab"><img src="/static/img/tianjiashichang@2x.png" /></li>
		<w-picker mode="dateTime" :defaultVal="[0, 1, 0, 1, 0]" @confirm="onConfirm" ref="picker"></w-picker>
	</ul>
</template>

<script>
import wPicker from '@/components/w-picker/w-picker.vue';
export default {
	components: {
		wPicker
	},
	data() {
		return {};
	},
	props: {
		flag: Boolean //事件开关
	},
	methods: {
		toggleTab() {
			this.$refs.picker.show();
		},
		onConfirm(val) {
			console.log(val);
		}
	}
};
</script>

<style lang="less" scoped>
ul {
	li.active {
		border: 2upx solid #fad42a;
	}
	li.add_time {
		text-align: center;
		padding: 80upx 0;
		img {
			width: 72upx;
			height: 72upx;
		}
	}
	li {
		text-align: left;
		display: block;
		height: 232upx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0 8upx 20upx 4upx rgba(179, 188, 198, 0.2);
		border-radius: 16upx;
		margin: 30upx;
		padding: 30upx;
		.date {
			font-size: 40upx;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}
		.price {
			float: right;
			color: #fad42a;
			font-size: 60upx;
			span {
				font-size: 30upx;
			}
		}
		.time {
			font-size: 32upx;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
			margin: 12upx 0 30upx 0;
		}
		.d {
			font-size: 28upx;
		}
		.duration {
			font-size: 28upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(153, 153, 153, 1);
			line-height: 40upx;
		}
	}
}
</style>
