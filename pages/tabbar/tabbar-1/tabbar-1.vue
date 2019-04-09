<template>
	<view class="class_list">
		<navigator v-for="(item, index) in musicList" :key="index" :url="'/pages/lessonCopy/lessonCopy?musicId=' + item.id">
			<image src="../../../static/img/wemusic.jpg"></image>
		</navigator>
		<navigator url="/pages/myCode/myCode">我的邀请码</navigator>
		<navigator url="/pages/wagesDetail/wagesDetail">工资详情</navigator>
		<navigator url="/pages/authentication/authentication">认证中心</navigator>
		<navigator url="/pages/uploadFile/uploadFile">资料上传</navigator>
		<navigator url="/pages/finance/finance">财务管理</navigator>
	</view>
</template>

<script>
export default {
	data() {
		return {
			musicList: []
		};
	},
	onLoad() {
		this.getMusicList();
	},
	methods: {
		//获取艺术列表
		getMusicList() {
			this.ajax({
				url: 'music/index',
				method: 'post',
				success: res => {
					if (res.data.body === 'success') {
						this.musicList = res.data.data;
					}
				}
			});
		}
	}
};
</script>

<style lang="less">
.class_list {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;

	image {
		width: 350upx;
		height: 284upx;
		margin: 12upx;
		border-radius: 8upx;
	}
}
</style>
