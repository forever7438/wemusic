<template>
	<view class="container">
		<image src="/static/img/chenggong.png" class="success"></image>
		<p class="title">报名成功</p>
		<lessonList :listInfo="courseInfo" 
					:success="true"
					lessonType="lessonCopy"></lessonList>
		<navigator url="/pages/myCode/myCode">
			<span class="btn">查看邀请码</span>
		</navigator>
		<span class="btn home" @click="homeBack">返回首页</span>
		
	</view>
</template>

<script>
	import lessonList from '../../components/item/lessonList.vue'; 
	export default {
		components:{
			lessonList
		},
		data() {
			return {
				courseInfo:[]
			};
		},
		onLoad(obj){
			this.getCourseInfo(1)
		},
		methods:{
			homeBack(){
				uni.switchTab({
					url: '/pages/tabbar/tabbar-1/tabbar-1'
				});
			},
			/**获取课程信息*/
			getCourseInfo(classId) {
				this.ajax({
					url: 'music/index_info',
					data: {
						music_id: classId
					},
					success: res => {
						console.log(res);
						if (res.data.body === 'success') {
							this.courseInfo.push(res.data.data.info)
						}
					}
				});
			},
		}
	}
</script>

<style lang="less" scoped>
	.container{
		text-align: center;
		padding: 0 86upx;
		.success{
			width: 120upx;
			height:120upx;
			margin-top:70upx;
		}
		.title{
			font-size:40upx;
			font-family:PingFangSC-Regular;
			font-weight:400;
			color:rgba(0,0,0,1);
			line-height:56upx;
			margin-top:40upx;
		}
		.btn{
			display: inline-block;
			width:100%;
			height:100upx;
			line-height: 100upx;
			margin-top:150upx;
			background:rgba(250,212,42,1);
			border-radius:12upx;
			font-size: 32upx;
		}
		.home{
			font-size: 28upx;
			border:1px solid rgba(51,51,51,1);
			background: #FFFFFF;
			margin-top:40upx;
		}
	}
</style>
