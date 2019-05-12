<template>
	<view>
		<lessonHead headType="lessonDetail"
					:star="Number(courseInfo.star)"
					:title="courseInfo.name"
					:mixTime="courseInfo.mix_time_type"
					:maxTime="courseInfo.max_time_type"
					:content="courseInfo.content || $t('index').NoIntroduction"></lessonHead>
		<teacherList :listInfo="listInfo" 
					 :selectFlag="true"
					 :title="$t('index').Choose_teacher" 
					 lessonType="lessonCopy"></teacherList>
		<selectTime :flag="false" 
					:addshow="false"
					:year="(new Date()).getFullYear()" 
					:dateList="dateList"></selectTime>
		<orderMessage :request="request" 
					  :invite="invite"
					  :classId="Number(classId)" 
					  :coupomTitle="coupomTitle"
					  :coupomList="coupomList" 
					  @changeRequest="changeRequest"></orderMessage>
	</view>
</template>

<script>
	import lessonHead   from '../../components/lesson/lessonHead.vue';
	import orderMessage from '../../components/lesson/orderMessage.vue';
	import teacherList  from '../../components/item/teacherList.vue';
	import selectTime   from '../../components/item/selectTime.vue';
	export default {
		data() {
			return {
				courseInfo:{},
				listInfo:[],
				dateList:[],
				request:{},
				coupomList:[],
				classId:0,
				coupomTitle:'',
				invite:''
			}
		},
		components:{
			lessonHead,
			orderMessage,
			teacherList,
			selectTime
		},
		onLoad(obj) {
			this.invite = obj.code
			this.ajax({
				url: 'userorder/add_time',
				data: {
					invite: obj.code
				},
				success: res => {
					if (res.data.body === 'success') {
						this.courseInfo = res.data.data.class_info
						let dateList = res.data.data.list
						let center = {};
						let price = 0;
						let ids = [];
						dateList.forEach((item) => {
							price += Number(item.price)
							item = this.timeDate(item)
							this.dateList.push(item)
							ids.push(item.id)
						});
						this.price = price
						this.getCoupomList(ids)
						this.listInfo.push(res.data.data.teacher_info)
						this.request = {
							courseLen:dateList.length,
							people_num:res.data.data.people_num,
							price:price
						}
					}else{
						uni.showToast({
							title: this.$t('index').Invitation_Code_Error,
							icon: "none"
						})
					}
				}
			});
		},
		methods: {
			timeDate(item) {
				let date_s = new Date(Math.round(item.start_time * 1000));
				let date_e = new Date(Math.round(item.stop_time * 1000));
				item.date = date_s.getFullYear() + '年' + this.number_(date_s.getMonth() + 1) + '月' + this.number_(date_s.getDate()) +
					'日';
				item.star = this.number_(date_s.getHours()) + ':' + this.number_(date_s.getMinutes());
				item.end = this.number_(date_e.getHours()) + ':' + this.number_(date_e.getMinutes());
				item.time = (item.stop_time - item.start_time) / 60;
				item.isActive = true;
				return item;
			},
			number_(num) {
				if (num < 10) {
					num = '0' + num;
				}
				return num;
			},
			/**获取优惠券*/
			getCoupomList(class_id) {
				class_id = class_id.join(',');
				this.ajax({
					url: 'studentclass/coupom_list',
					data: {
						class_list_id: class_id
					},
					success: res => {
						if (res.data.body === 'success') {
							if (res.data.data.length > 0) {
								this.coupomList = res.data.data;
								this.request.coupomTitle = '选择优惠券';
								this.coupomTitle = '选择优惠券';
							} else {
								this.request.coupomTitle = '暂无优惠券';
								this.coupomTitle = '暂无优惠券';
							}
							console.log(this.request)
						}
					}
				});
			},
		}
	}
</script>

<style>

</style>
