<template>
<div class="container">
  <global-header></global-header>
  <global-footer></global-footer>
  <div class="infinite-container">
    <swipe class="my-swipe">
      <swipe-item>
        <a href="/#/grade"><img src="/static/banner02.png" /></a>
      </swipe-item>
      <swipe-item>
        <a href="/#/exponent"><img src="/static/banner01.png" /></a>
      </swipe-item>
      <swipe-item>
        <a href="/#/news"><img src="/static/banner03.png" /></a>
      </swipe-item>
    </swipe>
    <mu-sub-header>股票型私募基金指数</mu-sub-header>
    <mu-content-block>
      <div id="chart1" style="height:200px;"></div>
    </mu-content-block>
    <mu-sub-header>期货型私募基金指数</mu-sub-header>
    <mu-content-block>
      <div id="chart2" style="height:200px;"></div>
    </mu-content-block>
</div>
  </div>
</template>

<script>
require('vue-swipe/dist/vue-swipe.css')
import API from '../store/api'
import GlobalFooter from '../components/Footer.vue'
import GlobalHeader from '../components/Header.vue'
import { Swipe, SwipeItem } from 'vue-swipe'
export default {
  data () {
    return {
      list: [],
      value: 'simple1'
    }
  },
  mounted () {
    this.getData(1, 'chart1', '股票型')
    this.getData(2, 'chart2', '期货型')
  },
  methods: {
    initEcharts (id, date1, data1, legend) {
      var myChart = window.echarts.init(document.getElementById(id))
      legend = legend || ''
      var option = {
        backgroundColor: '#fff',
        color: ['#8352F2'],
        legend: {
          data: [legend]
        },
        tooltip: {
          trigger: 'axis',
          formatter: '{a} {b} : {c}'
        },
        dataZoom: {
          show: false,
          realtime: true,
          start: 0
        },
        grid: {
          x: 40,
          y: 30,
          x2: 2,
          y2: 20
        },
        xAxis: [{
          type: 'category',
          data: date1
        }],
        yAxis: [{
          type: 'value',
          min: 1000,
          max: 2600,
          axisLabel: {
            formatter: '{value}'
          }
        }],
        series: [{
          name: legend,
          type: 'line',
          data: data1
        }],
        noDataLoadingOption: {
          effect: 'whirling'
        }
      }
      myChart.setOption(option)
    },
    getData (type, chart, legend) {
      let _this = this
      API.getFundIndexBaseByType(type, function (d) {
        if (d.code === 200 && d.results && d.results.length > 0) {
          var arrDate = []
          var arrData = []
          for (let i = 0; i < d.results.length; i++) {
            arrDate.push(d.results[i].rts.substring(0, 10))
            arrData.push(d.results[i].v.toFixed(2))
          }
          _this.initEcharts(chart, arrDate, arrData, legend)
        } else {
          _this.initEcharts('chart1', [], [])
          _this.initEcharts('chart2', [], [])
        }
      })
    }
  },
  components: {
    GlobalFooter,
    GlobalHeader,
    Swipe,
    SwipeItem
  }
}
</script>
<style lang="less">
.my-swipe {
  height: 150px!important;
  img{
    width: 100%;
    height: 150px;
  }
}
</style>
