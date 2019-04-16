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
