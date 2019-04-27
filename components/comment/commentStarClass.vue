<template>
	<div class="comments_content">
		<h3 style="margin-bottom: 32upx;">{{$t('index').Course_evaluation}}</h3>
		<div class="comments_message">
			<image src="../../static/img/lf.jpg"></image>
			<span>
				<p>{{ title }}</p>
				<p>{{ content }}</p>
			</span>
		</div>
		<div class="comments">
			<p>{{$t('index').comment}}</p>
			<textarea :placeholder="$t('index').Please_enter_evaluation_content" @change="changeData"></textarea>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'commentStarClass',
		props: {
			msg: {
				type: String
			},
			title: {
				type: String
			},
			content: {
				type: String
			}
		},
		data() {
			return {
				body: ''
			};
		},
		methods: {
			changeData() {
				this.$emit('sendData', this.body)
			}
		}
	}
</script>

<style lang="less" scoped>
	.comments_content {

		// padding: 0 0.2rem;
		h3 {
			text-align: left;
			margin-top: 20upx;
		}

		.comments_message {
			display: flex;
			align-items: center;
			margin: 20upx 0;

			image {
				width: 254upx;
				height: 160upx;
			}

			span {
				text-align: left;

				p {
					&:nth-of-type(1) {
						font-size: 32upx;
						font-family: PingFangSC-Medium;
						font-weight: 500;
						color: rgba(26, 26, 26, 1);
						margin-bottom: 20upx;
					}

					&:nth-of-type(2) {
						font-size: 28upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(102, 102, 102, 1);
					}
				}
			}
		}

		.comments {
			p {
				text-align: left;
				font-size: 32upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				margin-bottom: 20upx;
			}

			textarea {
				width: auto;
				height: 262upx;
				background: rgba(249, 249, 249, 1);
				padding: 20upx;
			}
		}
	}
</style>
