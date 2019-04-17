<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
			<br/>
			<a @click="goTo" class="a-style">{{subtitle}}</a>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		console.log("data进来了");
		let title = "Hello我是谁這是哪——这是index页面";
		return {
			title,
			subtitle: title ? "去report页面" : "还没有"
		};
	},
	onLoad() {
		console.log(
		"onload：监听页面加载，其参数为上个页面传递的数据，参数类型为Object（用于页面传参）"
		);
	},
	onPullDownRefresh() {
		console.log("onPullDownRefresh：监听用户下拉动作，一般用于下拉刷新");
	},
	onReachBottom() {
		console.log("onReachBottom：页面上拉触底事件的处理函数");
	},
	onShareAppMessage() {
		console.log("onShareAppMessage：用户点击右上角分享");
	},
	onBackPress(options) {
		console.log("onBackPress：监听页面返回，from————" + options.from);
	},
	methods: {
		goTo(){
			console.log("出发了方法goTo");
			uni.navigateTo({
				url: '../report/demo',
				animationType: 'pop-in',
				animationDuration: 200
			});
		}
	}
};
</script>

<style lang="less">
.content {
	text-align: center;
	height: 400upx;
	.a-style{
		color: red;
		
	}
}
.logo {
	height: 200upx;
	width: 200upx;
	margin-top: 200upx;
}
.title {
	font-size: 36upx;
	color: #8f8f94;
}
</style>
