<template>
  <div class="echarts-wrap">
    <mpvue-echarts :echarts="echarts" :onInit="onInit" canvasId="demo-canvas" />
  </div>
</template>

<script>
import * as echarts from '@/components/echarts/echarts.simple.min.js';
import mpvueEcharts from '@/components/mpvue-echarts/src/echarts.vue';
let chart = null;
// ECharts 配置项
var option = {
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    x: 'left',
    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
  },
  series: [
    {
      name:'访问来源',
      type:'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '30',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data:[
        {value:335, name:'直接访问'},
        {value:310, name:'邮件营销'},
        {value:234, name:'联盟广告'},
        {value:135, name:'视频广告'},
        {value:1548, name:'搜索引擎'}
      ]
    }
  ]
};
var optionR = {
  title: {
    text: '基础雷达图'
  },
  tooltip: {},
  legend: {
    data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
  },
  radar: {
    // shape: 'circle',
    name: {
      textStyle: {
        color: '#fff',
        backgroundColor: '#999',
        borderRadius: 3,
        padding: [3, 5]
      }
    },
    indicator: [
      { name: '销售（sales）', max: 6500},
      { name: '管理（Administration）', max: 16000},
      { name: '信息技术（Information Techology）', max: 30000},
      { name: '客服（Customer Support）', max: 38000},
      { name: '研发（Development）', max: 52000},
      { name: '市场（Marketing）', max: 25000}
    ]
  },
  series: [{
    name: '预算 vs 开销（Budget vs spending）',
    type: 'radar',
    // areaStyle: {normal: {}},
    data : [
      {
        value : [4300, 10000, 28000, 35000, 50000, 19000],
        name : '预算分配（Allocated Budget）'
      },
      {
        value : [5000, 14000, 28000, 31000, 42000, 21000],
        name : '实际开销（Actual Spending）'
      }
    ]
  }]
}


function initChart(canvas, width, height) {
  console.log('2222222222canvas',canvas, width, height)
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  console.log('333333333333option', option)
  chart.setOption(option);
  return chart; // 返回 chart 后可以自动绑定触摸操作
}

export default {
  components: {
    mpvueEchartshh
  },
  data () {
    console.log('进了data1111111111')
    return {
      echarts,
      onInit: initChart
    }
  },
  method: {
  }
}

</script>

<style lang="less">
.echarts-wrap {
  width: 100%;
  height: 300px;
  background:#eee;
}
</style>
