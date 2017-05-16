<template>
<div :id="randomId" :style="'height:'+height+'px;'"></div>
</template>
<script>
import echarts from 'echarts/lib/echarts'
require('echarts/lib/chart/line')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')
export default {
  name: 'charts',
  props: {
    height: {
      type: [Number, String],
      default: 200
    },
    data: {
      type: Object
    }
  },
  data () {
    return {
      randomId: 'chart_' + (Date.now() + Math.ceil(Math.random() * 10000)),
      instance: null
    }
  },
  amounted () {
    this.instance.showLoading()
  },
  watch: {
    data () {
      this.drawChart()
    }
  },
  methods: {
    drawChart () {
      var _this = this
      var myChart = echarts.init(document.getElementById(this.randomId))
      this.instance = myChart
      var defaultOption = {
        color: ['#8352F2', '#FF4081'],
        tooltip: {
          trigger: 'axis',
          formatter: '{b0}<br/>{a0} : {c0}<br/>{a1} : {c1}'
        },
        legend: {
          data: [_this.data.legend1, _this.data.legend2]
        },
        grid: {
          x: 40,
          y: 30,
          x2: 20,
          y2: 20
        },
        xAxis: {
          data: _this.data.date
        },
        yAxis: {
        },
        series: [{
          name: _this.data.legend1,
          type: 'line',
          data: _this.data.data1
        }, {
          name: _this.data.legend2,
          type: 'line',
          data: _this.data.data2
        }]
      }

      if (this.data.data2 === undefined || this.data.data2.length === 0) {
        defaultOption.tooltip.formatter = '{a} {b} : {c}'
        defaultOption.legend.data.splice(1, 1)
        defaultOption.series.splice(1, 1)
      }
      // 绘制图表
      myChart.setOption(defaultOption)
      myChart.hideLoading()
    }
  },
  mounted () {
    // this.drawChart()
  }
}
</script>
