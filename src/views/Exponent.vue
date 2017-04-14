<template>
<div class="container">
  <global-header title="指数"></global-header>
  <global-footer></global-footer>
  <div class="infinite-container">
    <mu-sub-header>新策略私募基金指数</mu-sub-header>
    <mu-content-block>
          新策略私募基金系列指数于2016年6月1日正式发布，以综合反映中国私募基金市场的整体表现，为市场及投资者提供更丰富的基金业绩评价基准和基金投资参考依据...
          <mu-flat-button label="查看更多" primary @click="open"></mu-flat-button>
          <mu-dialog :open="dialog" scrollable>
              新策略私募基金系列指数于2016年6月1日正式发布，以综合反映中国私募基金市场的整体表现，为市场及投资者提供更丰富的基金业绩评价基准和基金投资参考依据，新策略私募基金指数有以下特点：<br /><br />
               一、全面性。即能够综合全面的反映整个私募基金市场的业绩表现和运行状况。<br /><br />
               二、客观性。金络脑作为一家独立的第三方私募基金评级与指数编制机构，以客观的立场为投资人提供专业、独立、审慎的投资顾问服务。<br /><br />
               三、代表性。在构成指数的样本基金选取上，我们剔除了分类模糊、基金运行时间过短、更新频率过低、净值波动存在异常等不符合选入条件的基金产品，确保我们的私募基金指数样本能够充分代表整个市场或者各种分类基金的运行状态。<br /><br />
               第四，可复制性。新策略的整个指数编制体系，结构完整、体系完备、系统性强，可以实现不同分类和不同标的下的复制。<br /><br />
               第五，个性化。基于可复制性的特点，我们的指数编制体系同时可以运用到私募基金组合（FOF）产品的构建上，进而向不同客户提供个性化的FOF基金产品定制服务。
               <mu-flat-button primary label="关闭" @click="close" slot="actions"/>
          </mu-dialog>
    </mu-content-block>
    <mu-divider />
    <mu-sub-header>股票型私募基金指数</mu-sub-header>
    <mu-content-block>
      <div id="chart1" style="height:200px;"></div>
      <div class="mt20"></div>
        <mu-flexbox>
          <mu-flexbox-item>
            <span class="t3">区间收益：</span>
            <color-number :num="data1.ir2"></color-number>
          </mu-flexbox-item>
          <mu-flexbox-item>
            <span class="t3">年化收益：</span>
            <color-number :num="data1.yp"></color-number>
          </mu-flexbox-item>
        </mu-flexbox>
        <mu-flexbox>
          <mu-flexbox-item>
            <span class="t3">最大回撤：</span>
            <color-number :num="data1.md" :percent="false" :color="false"></color-number>
          </mu-flexbox-item>
          <mu-flexbox-item>
            <span class="t3">最大回撤比：</span>
            <color-number :num="data1.rtwdr" :percent="false" :color="false"></color-number>
          </mu-flexbox-item>
        </mu-flexbox>
        <mu-flexbox>
          <mu-flexbox-item>
            <span class="t3">年化波动率：</span>
            <color-number :num="data1.yf" :percent="false" :color="false"></color-number>
          </mu-flexbox-item>
          <mu-flexbox-item>
            <span class="t3">下行波动率：</span>
            <color-number :num="data1.dr" :percent="false" :color="false"></color-number>
          </mu-flexbox-item>
        </mu-flexbox>
        <mu-flexbox>
          <mu-flexbox-item>
            <span class="t3">盈亏比：</span>
            <color-number :num="data1.palr" :percent="false" :color="false"></color-number>
          </mu-flexbox-item>
          <mu-flexbox-item>
            <span class="t3">夏普比率：</span>
            <color-number :num="data1.s1" :percent="false" :color="false"></color-number>
          </mu-flexbox-item>
        </mu-flexbox>
        <div class="mt20"></div>
    </mu-content-block>
     <mu-divider />
    <mu-sub-header>期货型私募基金指数</mu-sub-header>
    <mu-content-block>
      <div id="chart2" style="height:200px;"></div>
      <div class="mt20"></div>
        <mu-flexbox>
          <mu-flexbox-item>
            <span class="t3">区间收益：</span>
            <color-number :num="data2.ir2"></color-number>
          </mu-flexbox-item>
          <mu-flexbox-item>
            <span class="t3">年化收益：</span>
            <color-number :num="data2.yp"></color-number>
          </mu-flexbox-item>
        </mu-flexbox>
        <mu-flexbox>
          <mu-flexbox-item>
            <span class="t3">最大回撤：</span>
            <color-number :num="data2.md" :percent="false" :color="false"></color-number>
          </mu-flexbox-item>
          <mu-flexbox-item>
            <span class="t3">最大回撤比：</span>
            <color-number :num="data2.rtwdr" :percent="false" :color="false"></color-number>
          </mu-flexbox-item>
        </mu-flexbox>
        <mu-flexbox>
          <mu-flexbox-item>
            <span class="t3">年化波动率：</span>
            <color-number :num="data2.yf" :percent="false" :color="false"></color-number>
          </mu-flexbox-item>
          <mu-flexbox-item>
            <span class="t3">下行波动率：</span>
            <color-number :num="data2.dr" :percent="false" :color="false"></color-number>
          </mu-flexbox-item>
        </mu-flexbox>
        <mu-flexbox>
          <mu-flexbox-item>
            <span class="t3">盈亏比：</span>
            <color-number :num="data2.palr" :percent="false" :color="false"></color-number>
          </mu-flexbox-item>
          <mu-flexbox-item>
            <span class="t3">夏普比率：</span>
            <color-number :num="data2.s1" :percent="false" :color="false"></color-number>
          </mu-flexbox-item>
        </mu-flexbox>
        <div class="mt20"></div>
    </mu-content-block>
  </div>
</div>
</template>

<script>
import API from '../store/api'
import GlobalFooter from '../components/Footer.vue'
import GlobalHeader from '../components/Header.vue'
import ColorNumber from '../components/ColorNumber.vue'
export default {
  data () {
    return {
      list: [],
      value: 'simple1',
      dialog: false,
      data1: {},
      data2: {}
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.initBaseData()

      var myChart = window.echarts.init(document.getElementById('chart1'))
      myChart.showLoading({effect: 'whirling'})
      this.createChart(myChart, 1, '股票型')
      var myChart2 = window.echarts.init(document.getElementById('chart2'))
      myChart2.showLoading({effect: 'whirling'})
      this.createChart(myChart2, 2, '期货型')
    },
    _initEcharts (myChart, date, data1, data2, legend) {
      legend = legend || ''
      var option = {
        backgroundColor: '#fff',
        color: ['#8352F2', '#FF4081'],
        legend: {
          data: [legend, '沪深300']
        },
        tooltip: {
          trigger: 'axis',
          formatter: '{b0}<br/>{a0} : {c0}<br/>{a1} : {c1}'
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
          data: date
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            formatter: '{value}'
          },
          max: 2700,
          min: 1000
        }],
        series: [
          {
            name: legend,
            type: 'line',
            data: data1
          },
          {
            name: '沪深300',
            type: 'line',
            data: data2
          }
        ],
        noDataLoadingOption: {
          effect: 'whirling'
        }
      }
      myChart.setOption(option)
      myChart.hideLoading()
    },
    initBaseData () {
      API.getFundIndexByType(1, d => {
        if (d.code === 200 && d.results && d.results.length !== 0) {
          this.data1 = d.results[0]
        }
      })
      API.getFundIndexByType(2, d => {
        if (d.code === 200 && d.results && d.results.length !== 0) {
          this.data2 = d.results[0]
        }
      })
    },
    _getCsi (fn) {
      // cache csi300 data
      var d = window.localStorage.getItem('_CSIDATA')
      if (window.USE_CACHE && d) {
        fn(window.JSON.parse(d))
      } else {
        API.getCSI(+new Date('2014-01-01'), +new Date(), function (d2) {
          window.localStorage.setItem('_CSIDATA', window.JSON.stringify(d2))
          fn(d2)
        })
      }
    },
    createChart (myChart, type, legend) {
      var date = []
      var data1 = []
      var data2 = []
      API.getFundIndexBaseByType(type, d => {
        if (d.code === 200 && d.results && d.results.length > 0) {
          this._getCsi(d2 => {
            for (var i = 0; i < d.results.length; i++) {
              for (var j = 0; j < d2.results.length; j++) {
                if (d.results[i].rts.substring(0, 10) === d2.results[j].rts.substring(0, 10)) {
                  date.push(d.results[i].rts.substring(0, 10))
                  data1.push(d.results[i].v)
                  data2.push(d2.results[j].v)
                }
              }
            }
            var temp1 = []
            var temp2 = []
            data1.forEach(function (item, index) {
              temp1[index] = ((item / data1[0]) * 1000).toFixed(2)
            })
            data2.forEach(function (item, index) {
              temp2[index] = ((item / data2[0]) * 1000).toFixed(2)
            })
            this._initEcharts(myChart, date, temp1, temp2, legend)
          })
        }
      })
    },
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    }
  },
  components: {
    GlobalFooter,
    GlobalHeader,
    ColorNumber
  }
}
</script>
<style>

</style>
