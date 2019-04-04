<template>
	<view>
		<lessonHead></lessonHead>
		<lessonTeacher></lessonTeacher>
	</view>
</template>

<script>
import lessonHead from '../../components/lesson/lessonHead.vue';
import lessonTeacher from '../../components/lesson/lessonTeacher.vue'
export default {
	components:{
		lessonHead,
		lessonTeacher
	},
	data() {
		return {};
	}
};
</script>

<style lang="less"></style>
