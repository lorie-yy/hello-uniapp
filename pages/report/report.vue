<template>
	<view class="content">
		<view>
			<text class="title">{{title}}</text><br/>
      <image mode="aspectFit" :src="tempFilePaths" @click="chooseImage" class="choose-image" ></image><br/>
      <span class="choose-image-span">秀出我的宝宝</span>
		</view>
    <mpvueEcharts>lorie-chart</mpvueEcharts>
	</view>
</template>

<script>
import mpvueEcharts from '@/pages/report/demo.vue'
export default {
	data() {
		let title = "这里是report啊";
		return {
      title,
      tempFilePaths: "../../static/logo.png",
      showEchart: false
		};
	},
  onLoad() {},
  
  components: {
    mpvueEcharts: mpvueEcharts
  },

	methods: {
    chooseImage() {
      uni.chooseImage({
        count: 1, //默认9
        sizeType: ['compressed'], //original 原图，compressed 压缩图，默认二者都有
        sourceType: ['album', 'camera'], //album 从相册选图，camera 使用相机，默认二者都有
        success: (res) => {
          console.log('res', res)
          console.log('图片临时路径', JSON.stringify(res.tempFilePaths))
          console.log('图片大小（M）', res.tempFiles[0].size / (1024*1024))
          if(res.tempFiles[0].size > 1024*1024*2){
            console.log('请上传小于2M的图片')
            uni.showToast({
              icon: 'none',
              title: '请上传小于5M的图片'
            });
            return
          }
          this.tempFilePaths = res.tempFilePaths
          this.showEchart=true
          // 保存文件到本地
          // let tempFilePaths = res.tempFilePaths;
          // uni.saveFile({
          //   tempFilePath: tempFilePaths[0],
          //   success: function (res) {
          //     let savedFilePath = res.savedFilePath;
          //   }
          // });
        }
      })
    }
	}
};
</script>

<style lang="less">
.content {
  .title {
    font-size: 36upx;
    color: #8f8f94;
  }
  .choose-image{
    background-size: 100px;
    width: 100px; 
    height: 100px;
    margin: 0 auto;
    border: 1px solid #eee;
    border-radius: 50%;
  }
  .choose-image-span{
    font-size: 12px;
  }
}
</style>
