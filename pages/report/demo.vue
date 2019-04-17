<template>
	<view class="container">
		<view class="canvasView">
			<view class="title">雷达图示例</view>
			<mpvue-echarts class="ec-canvas" @onInit="lineInit" canvasId="line" ref="lineChart" />
		</view>
	</view>
</template>

<script>
	import * as echarts from '@/components/echarts/echarts.min.js';
	import mpvueEcharts from '@/components/mpvue-echarts/src/echarts.vue';

	let lineOption = {
    // title: {
		// 	text: '基础雷达图'
    // },
    // tooltip: {},
    // legend: {
		// 	data: ['预算分配']
    // },
    radar: {
			// shape: 'circle',
			radius: 90,
			center: ['50%', '20%'],
			nameGap: 10,
			name: {
				// formatter:'【{value}】',
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
			indicator: [
				{ name: '好奇心', max: 50},
				{ name: '创造性', max: 50, nameGap: -2},
				{ name: '社交智慧和情商', max: 50},
				{ name: '洞察力', max: 50},
				{ name: '幽默和顽皮', max: 50, nameGap: -2}
			],
			splitArea: {
				areaStyle: {
					color: ['transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
				}
			},
			axisLine: {
				lineStyle: {
					// color: '#e6e6e6'
				}
			},
			splitLine: {
				lineStyle: {
					// color: '#e6e6e6'
				}
			}
		},
		series: [{
			name: '预算 vs 开销（Budget vs spending）',
			type: 'radar',
			data : [
				{
					value : [40, 30, 35, 22, 19],
					name : '预算分配',
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
					itemStyle: {
						normal: {
							color: '#37aab7'
						}
					},

					lineStyle: {
						normal: {
							color: '#37aab7',
						}
					},
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
		/* uni-app默认使用flex布局。因为flex布局有利于跨更多平台，尤其是采用原生渲染的平台。如不了解flex布局，请参考http://www.w3.org/TR/css3-flexbox/。若不需要flex布局可删除本行*/
	}

	page {
		min-height: 100%;
	}

	.page-section-title {
		padding: 0 30upx;
	}

	.title {
		margin-left: 30upx;
		color: #8f8f94;
	}

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
		height: 100%;
		flex: 1;
	}

	.canvas-bar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.update-btn {
		margin-right: 30upx;
	}
</style>
