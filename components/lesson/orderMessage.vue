<template>
	<div>
		<div class="container">
			<h4 class="text_l">订单信息</h4>
			<ul class="order_mess">
				<li>
					<span>课程</span>
					<span>{{ request.courseLen }}节</span>
				</li>
				<li @click="coupomPicker">
					<span>优惠券</span>
					<span>{{ request.coupomTitle }}</span>
				</li>
				<li>
					<span>授课方式</span>
					<span>{{ way[request.people_num] }}</span>
				</li>
			</ul>

			<h4 class="text_l">备注</h4>
			<textarea class="mui-input-clear remark" maxlength="500" placeholder="请输入备注信息…"></textarea>
		</div>
		<p class="pay_content">
			<span>
				合计
				<span class="total">${{ request.price }}</span>
			</span>
			<span type="button" class="pay-btn" @click="pay(classId)">支付</span>
		</p>
		<mpvue-picker
			themeColor="#007AFF"
			ref="mpvuePicker"
			mode="selector"
			titleInfo="选择优惠券"
			:deepLength="1"
			:pickerValueDefault="[0]"
			@onConfirm="onConfirm"
			@onCancel="onCancel"
			:coupomfalg="true"
			:pickerValueArray="coupomList"
		></mpvue-picker>
	</div>
</template>

<script>
import mpvuePicker from '../mpvue-picker/mpvuePicker.vue';
export default {
	components: {
		mpvuePicker
	},
	props: {
		request: Object,
		coupomList: Array,
		coupomTitle: String,
		classId: Number
	},
	data() {
		return {
			way: ['一对一', '一对二', '一对三']
		};
	},
	methods: {
		onConfirm(val) {
			let index = val.index[0];
			let change = {
				key: 'coupomTitle',
				value: this.coupomList[index].name
			};
			this.$emit('changeRequest', change);
			let coupon_id = this.coupomList[index].id;
			this.getPrice(coupon_id);
		},
		getPrice(coupon_id) {
			this.ajax({
				url: 'studentclass/coupom_list',
				data: {
					class_list_id: this.request.class_list_id,
					coupon_id: coupon_id
				},
				success: res => {
					if (res.data.body === 'success') {
						let change = {
							key: 'coupon_id',
							value: coupon_id,
							price: res.data.data.real_price
						};
						this.$emit('changeRequest', change);
					}
				}
			});
		},
		onCancel() {},
		/**选择时长*/
		coupomPicker() {
			console.log(this.coupomList);
			this.$refs.mpvuePicker.show();
		},
		pay(classId) {
			uni.redirectTo({
				url: '/pages/registrationSuccess/registrationSuccess?way=' + this.way[this.request.people_num] + '&classId=' + classId + '&teacherNmae=' + '教师名称'
			});
			return;
			this.ajax({
				url: 'userorder/add_order',
				data: this.request,
				success: res => {
					if (res.data.body === 'success') {
						uni.showToast({
							title: '支付完成',
							icon: 'none'
						});
						uni.redirectTo({
							url: '/pages/lesson/lesson?type=1'
						});
					}
				}
			});
		}
	}
};
</script>

<style lang="less" scoped>
.container {
	padding: 0 30upx;
	font-size: 32upx;
	font-family: PingFangSC-Regular;
	font-weight: 400;
	color: rgba(51, 51, 51, 1);
	.text_l {
		font-size: 48upx;
		font-weight: 500;
	}
	.remark {
		margin-top: 40upx;
	}
	.order_mess {
		margin-bottom: 60upx;
		li {
			border-bottom: 2upx solid rgba(231, 232, 234, 1);
			height: 104upx;
			line-height: 104upx;
			span {
				float: left;
			}
			span:last-child {
				float: right;
				color: rgba(102, 102, 102, 1);
				font-size: 28upx;
			}
			span:last-child:after {
				content: '';
				background: url('/static/img/arrow_left.png');
				display: inline-block;
				width: 12upx;
				height: 22upx;
				margin-left: 30upx;
			}
		}
	}
}
.pay_content {
	width: 100%;
	height: 100upx;
	overflow: hidden;
	text-align: left;
	border-top: 2upx solid rgba(231, 232, 234, 1);
	margin: 0;
	span {
		font-size: 28upx;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 100upx;
		margin-left: 30upx;
	}
	.total {
		color: rgba(250, 212, 42, 1);
	}
	.pay-btn {
		background: rgba(250, 212, 42, 1);
		height: 100%;
		text-align: center;
		width: 240upx;
		float: right;
		border: none;
	}
}
</style>
