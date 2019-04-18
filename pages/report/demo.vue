<template>
	<view class="container">
		<view class="canvasView">
			<!-- <view class="title">雷达图示例</view> -->
			<mpvue-echarts class="ec-canvas" @onInit="lineInit" canvasId="line" ref="lineChart" />
		</view>
	</view>
</template>

<script>
	import * as echarts from '@/components/echarts/echarts.min.js';
	import mpvueEcharts from '@/components/mpvue-echarts/src/echarts.vue';

	let lineOption = {
    title: {
			text: '雷达图title',
			// 标题的位置，此时放在图的底边
			left: 'center',
			top: 'bottom',
			textStyle: {
				color: 'rgba(221,221,221,1)', //标题颜色
				fontSize: 14,
				lineHeight: 20,
			},
    },
		// tooltip: {},
		// 图例
    // legend: {
		// 	data: ['预算分配']
    // },
    radar: {
			// shape: 'circle',
			radius: 90, // 雷达图整体大小比例
			// center: ['50%', '50%'], // 雷达图整体位置
			// splitNumber: 5, // 雷达图圈数设置
			nameGap: 10, // 雷达图与name的统一距离
			name: {
				// 底图-各个方向的name样式
				formatter: function (value, indicator) {
					console.log('name___value, indicator',value, indicator)
					if(value==='好奇心') {
						return `{a|${value}}`
					}else if(value==='幽默和顽皮'){
						return `{b|${value}}`
					}else if(value==='洞察力'){
						indicator.boundaryGap=[-10,-10]
						return `{c|${value}}`
					}else if(value==='社交智慧和情商'){
						return `{d|${value}}`
					}else if(value==='创造性'){
						return `{e|${value}}`
					}
				},
				rich: {
					a: {
						backgroundColor: 'yellow',
						borderRadius: 10,
						padding: [5, 10],
					},
					b: {
						backgroundColor: 'pink',
						borderRadius: 10,
						padding: [5, 10],
						position: 'right',
						distance: 20,
					},
					c: {
						backgroundColor: 'green',
						borderRadius: 10,
						padding: [5, 10],
					},
					d: {
						backgroundColor: 'orange',
						borderRadius: 10,
						padding: [5, 10],
					},
					e: {
						backgroundColor: 'blue',
						borderRadius: 10,
						padding: [5, 10],
					},
				}
			},
			// 底图-添加展示刻度（4.X版本不支持）
			// axisTick:{ 
			// 	show: true,
			// },
			// axisLabel: {
			// 	show: true,
			// 	formatter: '{value}',
			// 	textStyle: {
			// 		color: 'black'
			// 	}
			// },
			// 底图-各个方向指示（名称，最大值，雷达图与name的距离，最小值，颜色）
			indicator: [
				{ 
					name: '好奇心', max: 50,
					//若将此属性放在radar下，则每条indicator都会显示圈上的数值，放在这儿，只在此条indicator上显示（4.X版本不支持）
					// axisLabel: {
					// 	show: true,
					// 	fontSize: 12,
					// 	color: '#838D9E',
					// 	showMaxLabel: true, //显示最大值，即外圈显示数字50
					// 	showMinLabel: true, //显示最小值，即中心点显示0
					// },
				},
				{ name: '创造性', max: 50, nameGap: -2},
				{ name: '社交智慧和情商', max: 50, nameGap: -8},
				{ name: '洞察力', max: 50, nameGap: -5},
				{ name: '幽默和顽皮', max: 50, nameGap: -2}
			],
			// 底图-区域划分样式
			splitArea: {
				areaStyle: {
					color: ['transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
				}
			},
			// 底图-坐标线样式
			axisLine: {
				lineStyle: {
					// color: '#e6e6e6'
				}
			},
			// 底图-分割线样式
			splitLine: {
				lineStyle: {
					// color: '#e6e6e6'
				}
			}
		},
		series: [{
			name: '预算 vs 开销（Budget vs spending）',
			type: 'radar',
			symbol: 'circle', // 拐点的样式，还可以取值'rect','angle'等
			symbolSize: 10, // 拐点的大小
			data : [
				{
					value : [40, 30, 35, 22, 19],
					name : '预算分配',
					// 数据-在拐点处显示数值
					label: {
						normal: {
							show: true,
							color: '#37aab7',
							formatter:function(params) {
								console.log('hhhhhhparams',params)
								return params.value;
							}
						}
					},
					// 数据-区域边框和区域的颜色（以及拐点marker样式）
					itemStyle: {
						normal: {
							color: '#37aab7',
							borderColor: 'white', // 拐点的描边颜色。[ default: '#000' ]
							borderWidth: 2, // 拐点的描边宽度，默认不描边。[ default: 0 ]
						}
					},
					// 数据-线条样式
					lineStyle: {
						normal: {
							color: '#37aab7',
						}
					},
					// 数据-区域样式
					areaStyle: {
						normal: {
							opacity: 0.1,
							color: '#37aab7',
						}
					},
				}
			]
		}]
	};

	export default {
		data() {
			return {
				updateStatus: false
			}
		},
		onLoad() {
		},
		methods: {
			lineInit(e) {
				let {width, height} = e ;
				let canvas = this.$refs.lineChart.canvas 
				echarts.setCanvasCreator(() => canvas);
				let lineChart = echarts.init(canvas, null, {
					width: width,
					height: height
				})
				canvas.setChart(lineChart)
				lineChart.setOption(lineOption)
				this.$refs.lineChart.setChart(lineChart)
			}
		},
		components: {
			mpvueEcharts,
		}
	}
</script>

<style>
	page,
	view {
		display: flex;
	}

	/* page {
		min-height: 100%;
	} */

	.container {
		padding-bottom: 30upx;
		box-sizing: border-box;
	}

	.container,
	.canvasView {
		flex: 1;
		flex-direction: column;
	}

	.ec-canvas {
		width: 100%;
		height: 260px;
		/* 设置后会画布占据整个屏高 */
		/* flex: 1; */
	}
</style>
