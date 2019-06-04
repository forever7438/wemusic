<template>
	<div>
		<div class="container">
			<h4 class="text_l">{{ $t('index').Order_information }}</h4>
			<ul class="order_mess">
				<li>
					<span>{{ $t('index').course }}</span>
					<span>{{ request.courseLen }}{{ $t('index').section }}</span>
				</li>
				<li @click="coupomPicker && coupomList.length">
					<span>{{ $t('index').Coupon }}</span>
					<span>{{ coupomTitle }}</span>
				</li>
				<li>
					<span>{{ $t('index').Teaching_methods }}</span>
					<span>{{ resultway }}</span>
				</li>
			</ul>

			<h4 class="text_l">{{ $t('index').remarks }}</h4>
			<textarea class="mui-input-clear remark" maxlength="500" :placeholder="$t('index').Please_enter_notes"></textarea>
		</div>
		<p class="pay_content">
			<span>
				{{ $t('index').total }}
				<span class="total">${{ request.price }}</span>
			</span>
			<span type="button" class="pay-btn" @click="pay(classId)">支付</span>
		</p>
		<mpvue-picker themeColor="#007AFF" ref="mpvuePicker" mode="selector" titleInfo="选择优惠券" :deepLength="1"
		 :pickerValueDefault="[0]" @onConfirm="onConfirm" @onCancel="onCancel" :coupomfalg="true" :pickerValueArray="coupomList"></mpvue-picker>
	</div>
</template>

<script>
	import mpvuePicker from '../mpvue-picker/mpvuePicker.vue';
	export default {
		components: {
			mpvuePicker
		},
		props: {
			isVip: String,
			request: Object,
			coupomList: Array,
			coupomTitle: String,
			classId: Number,
			invite:{
				type:String,
				default:''
			}
		},
		data() {
			return {
				way: []
			};
		},
		created() {
			console.log(this.request)
		},
		computed: {
			resultway() {
				let people_num = Number(this.request.people_num)
				switch (people_num) {
					case 0:
						return this.$t('index').One_on_one;
						break;
					case 1:
						return this.$t('index').A_pair_of_two;
						break;
					case 2:
						return this.$t('index').A_pair_of_three;
						break;
				}
			}
		},
		methods: {
			onConfirm(val) {
				if (val) {
					let index = val.index[0];
					let change = {
						key: 'coupomTitle',
						value: this.coupomList[index].name
					};
					this.$emit('changeRequest', change);
					let coupon_id = this.coupomList[index].id;
					this.getPrice(coupon_id);
				}
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
			noVipPay(){
				/*非会员单独支付一节课*/
				let data = {
					class_list_id: this.request.class_list_id.join(','),
				}
				this.ajax({
					url: 'userorder/one_add_order',
					data: data,
					success: res => {
						console.log(this.request)
						if (res.data.body === 'success') {
							uni.showToast({
								title: 'Success',
								icon: 'none'
							});
						}else{
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							});
						}
					}
				});
			},
			pay(classId) {
				if(this.isVip == '1'){
					return this.noVipPay();
				}
				let data = {}
				if(this.invite){
					data = {
						coupon_id: this.request.coupon_id,
						invite: this.invite
					}
				}else{
					data = {
						class_list_id: this.request.class_list_id.join(','),
						teacher_id: this.request.teacher_id,
						music_sun_id: this.request.music_sun_id,
						people_num: this.request.people_num,
						coupon_id: this.request.coupon_id,
					}
				}

				this.ajax({
					url: 'userorder/add_order',
					data: data,
					success: res => {
						console.log(this.request)
						if (res.data.body === 'success') {
							uni.showToast({
								title: 'Success',
								icon: 'none'
							});
							uni.redirectTo({
								url: '/pages/registrationSuccess/registrationSuccess?way=' + this.resultway + '&code=' + res.data.data +
									'&classId=' + classId +
									'&teacherNmae=' + this.request.teacherName +
									'&invite='+this.invite +
									'&wayNum='+this.request.people_num
							});
						}else{
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
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
		margin-bottom: 120upx;
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
		position: fixed;
		bottom: 0;
		background:#fff;
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
