<template>
	<view>
		<view class="top" @click="backEvent"><image src="/static/img/nav_back_light.png"></image></view>
		<lessonHead
			headType="lessonDetail"
			:star="Number(courseInfo.star)"
			:title="courseInfo.name"
			:mixTime="courseInfo.mix_time_type"
			:maxTime="courseInfo.max_time_type"
			:content="courseInfo.content || '暂无课程介绍'"
		></lessonHead>
		<teacherList :listInfo="selectFlag ? selectItem : listInfo" :selectFlag="selectFlag" title="选择教师" @selectFunction="select" lessonType="lessonCopy"></teacherList>
		<teachingWay v-if="selectFlag" :orderShow="orderShow" :classId="classId" :request="request" @changeRequest="changeRequest" :teacherId="teacherId"></teachingWay>
		<orderMessage v-if="orderShow" :request="request" :classId="classId" :coupomList="coupomList" @changeRequest="changeRequest"></orderMessage>
	</view>
</template>

<script>
import lessonHead from '../../components/lesson/lessonHead.vue';
import orderMessage from '../../components/lesson/orderMessage.vue';
import teacherList from '../../components/item/teacherList.vue';
import teachingWay from '../../components/lesson/teachingWay.vue'; //授课方式
export default {
	components: {
		lessonHead,
		teacherList,
		teachingWay,
		orderMessage
	},
	data() {
		return {
			musicId: '',
			orderShow: false,
			courseInfo: {},
			selectFlag: false,
			selectItem: [],
			listInfo: [],
			choiseTeacherInfo: {},
			classId: 0,
			teacherId: 0,
			coupomList: [],
			request: {
				price: 0,
				people_num: 0,
				class_list_id: [],
				coupon_id: '',
				courseLen: 0,
				coupomTitle: ''
			}
		};
	},
	onLoad(obj) {
		this.classId = obj.musicSunId;
		this.getChoiseTeacherInfo(obj.musicSunId);
		this.getCourseInfo(obj.musicSunId);
	},
	methods: {
		backEvent() {
			if (this.selectFlag) {
				if (this.orderShow) {
					this.orderShow = false;
				} else {
					this.selectFlag = false;
				}
			} else window.history.back(-1);
		},
		select(item) {
			this.teacherId = item.id;
			this.selectItem = [];
			this.selectItem.push(item);
			this.selectFlag = true;
		},
		/**获取课程信息*/
		getCourseInfo(classId) {
			this.ajax({
				url: 'music/index_info',
				data: {
					music_id: classId
				},
				success: res => {
					if (res.data.body === 'success') {
						this.courseInfo = res.data.data.info;
					}
				}
			});
		},
		changeRequest(data) {
			switch (data.key) {
				case 'people_num':
					this.request.people_num = data.value;
					break;
				case 'class_list_id':
					let index = this.request.class_list_id.indexOf(data.value);
					if (index > -1) {
						this.request.class_list_id.splice(index, 1);
						this.request.price -= data.price;
						this.request.courseLen--;
					} else {
						this.request.class_list_id.push(data.value);
						this.request.price += data.price;
						this.request.courseLen++;
					}
					break;
				case 'orderShow':
					this.orderShow = data.value;
					this.request.music_sun_id = this.classId;
					this.request.teacher_id = this.teacherId;
					this.request.class_list_id = this.request.class_list_id.join(',');
					this.getCoupomList();
					break;
				case 'coupomTitle':
					this.request.coupomTitle = data.value;
					break;
				case 'coupon_id':
					this.request.coupon_id = data.value;
					this.request.price = data.price;
					break;
			}
		},
		/**获取优惠券*/
		getCoupomList() {
			this.ajax({
				url: 'studentclass/coupom_list',
				data: {
					class_list_id: this.request.class_list_id
				},
				success: res => {
					if (res.data.body === 'success') {
						if (res.data.data.length > 0) {
							this.coupomList = res.data.data;
							this.request.coupomTitle = '选择优惠券';
						} else {
							this.request.coupomTitle = '暂无优惠券';
						}
					}
				}
			});
		},
		/**获取选择老师列表*/
		getChoiseTeacherInfo(musicSunId) {
			this.ajax({
				url: 'music/teacher_list',
				data: {
					music_id: musicSunId,
					list: 0,
					val: 5
				},
				success: res => {
					if (res.data.body === 'success') {
						this.listInfo = res.data.data.list;
					}
				}
			});
		}
	}
};
</script>

<style lang="less">
view {
	.top {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 10upx;
		left: 10upx;
		width: 64upx;
		height: 64upx;
		border-radius: 50%;
		background-color: rgba(0, 0, 0, 0.5);
		image {
			width: 50upx;
			height: 50upx;
		}
	}
	.sign_up {
		text-align: center;
		margin-top: 40upx;
		display: inline-block;
		width: 100%;
		line-height: 100upx;
		background: rgba(250, 212, 42, 1);
		font-size: 28upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
}
</style>
