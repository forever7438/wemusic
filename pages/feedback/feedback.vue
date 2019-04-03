<template>
	<view>
		<textarea placeholder="请留下您宝贵的意见" />
		<input class="uni-input" placeholder="带清除按钮的输入框" :value="inputClearValue" @input="clearInput" />
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="less"></style>
