<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style lang='less'>
	/* 以下样式用于 hello uni-app 演示所需 */
	page {
		background-color: #F4F5F6;
		height: 100%;
		font-size: 28upx;
		line-height: 1.8;
	}
	/*每个页面公共css */
	uni-page-wrapper{
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
	}
	.content {
		text-align: center;
		padding: 0 10px;
	}
</style>
