<template>
  <div class="echarts-wrap">
    <mpvue-echarts :echarts="echarts" :onInit="onInit" canvasId="demo-canvas" />
  </div>
</template>

<script>
import echarts from 'echarts'
import mpvueEcharts from 'mpvue-echarts'
let chart = null;
console.log('chart',chart)
function initChart(canvas, width, height) {
  console.log('2222222222canvas',canvas)
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  console.log('333333333333')
 
  // ECharts 配置项
  var option = {
    // title: {
    //     text: '宝宝的5个核心优势'
    // },
    // tooltip: {},
    // legend: {
    //     data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    // },
    // radar: {
    //     // shape: 'circle',
    //     name: {
    //         textStyle: {
    //             color: '#fff',
    //             backgroundColor: '#999',
    //             borderRadius: 3,
    //             padding: [3, 5]
    //        }
    //     },
    //     indicator: [
    //        { name: '好奇心', max: 50},
    //        { name: '幽默和顽皮', max: 50},
    //        { name: '洞察力', max: 50},
    //        { name: '社交智慧和情商', max: 50},
    //        { name: '创造性', max: 50},
    //     ]
    // },
    // series: [{
    //     name: '预算 vs 开销（Budget vs spending）',
    //     type: 'radar',
    //     // areaStyle: {normal: {}},
    //     data : [
    //         {
    //             value : [30, 50, 30, 20, 30],
    //             name : '预算分配（Allocated Budget）'
    //         },
    //          {
    //             value : [50, 50, 30, 40, 40],
    //             name : '实际开销（Actual Spending）'
    //         }
    //     ]
    // }]
  };
 
  chart.setOption(option);
 
  return chart; // 返回 chart 后可以自动绑定触摸操作
}

export default {
  components: {
    mpvueEcharts
  },
  data () {
    console.log('1111111111')
    return {
      echarts,
      onInit: initChart
    }
  },
  method: {
    initChart(canvas, width, height) {
      console.log('2222222222canvas',canvas)
      chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      canvas.setChart(chart);
      console.log('333333333333')
    
      // ECharts 配置项
      var option = {
        // title: {
        //     text: '宝宝的5个核心优势'
        // },
        // tooltip: {},
        // legend: {
        //     data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        // },
        // radar: {
        //     // shape: 'circle',
        //     name: {
        //         textStyle: {
        //             color: '#fff',
        //             backgroundColor: '#999',
        //             borderRadius: 3,
        //             padding: [3, 5]
        //        }
        //     },
        //     indicator: [
        //        { name: '好奇心', max: 50},
        //        { name: '幽默和顽皮', max: 50},
        //        { name: '洞察力', max: 50},
        //        { name: '社交智慧和情商', max: 50},
        //        { name: '创造性', max: 50},
        //     ]
        // },
        // series: [{
        //     name: '预算 vs 开销（Budget vs spending）',
        //     type: 'radar',
        //     // areaStyle: {normal: {}},
        //     data : [
        //         {
        //             value : [30, 50, 30, 20, 30],
        //             name : '预算分配（Allocated Budget）'
        //         },
        //          {
        //             value : [50, 50, 30, 40, 40],
        //             name : '实际开销（Actual Spending）'
        //         }
        //     ]
        // }]
      };
    
      chart.setOption(option);
    
      return chart; // 返回 chart 后可以自动绑定触摸操作
    }
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
