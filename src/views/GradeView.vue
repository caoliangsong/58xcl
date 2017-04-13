<template>
<div class="container">
  <global-header></global-header>
  <global-footer></global-footer>
  <div class="infinite-container">
    <mu-card>
      <mu-card-title :title="data.pn"
                     subTitle="" />
      <!--<mu-icon-button  icon="favorite" style="position:absolute;right:10px;top:12px;" />-->
      <mu-divider/>
      <mu-card-text style="line-height:1.8;">
        <mu-flexbox>
          <mu-flexbox-item>
            <span class="t3">最新净值：</span>{{data.nn}}
          </mu-flexbox-item>
          <mu-flexbox-item>
            <span class="t3">累计净值：</span>{{data.tn}}
          </mu-flexbox-item>
        </mu-flexbox>
        <mu-flexbox>
          <mu-flexbox-item>
            <span class="t3">产品类型：</span>{{data.ic1}}
          </mu-flexbox-item>
          <mu-flexbox-item>
            <span class="t3">成立日期：</span>{{data.fd}}
          </mu-flexbox-item>
        </mu-flexbox>
        <mu-flexbox>
          <mu-flexbox-item>
            <span class="t3">产品状态：</span>{{data.rs}}
          </mu-flexbox-item>
          <mu-flexbox-item>
            <span class="t3">资金规模：</span>{{data.is}}
          </mu-flexbox-item>
        </mu-flexbox>
        <div class="mt20"></div>
        <mu-divider/>
        <div class="mt20"></div>
        <grade-bar :percent="gradeData.tr*20"
                   title="新策略评级"></grade-bar>
        <grade-bar :percent="gradeData.nrr*20"
                   theme="orange"
                   title="抗风险"></grade-bar>
        <grade-bar :percent="gradeData.cr*20"
                   theme="yellow"
                   title="持续性"></grade-bar>
        <grade-bar :percent="gradeData.sr*20"
                   theme="green"
                   title="选股能力"></grade-bar>
        <grade-bar :percent="gradeData.mtr*20"
                   theme="blue"
                   title="择时能力"></grade-bar>
        <br />
        <mu-divider/>
        <mu-sub-header>净值走势</mu-sub-header>
        <div id="chartGrade" style="height:200px;"></div>
             <div class="mt20"></div>
        <mu-divider/>
       
       <mu-sub-header>风险评估</mu-sub-header>
       <div style="clear:both"></div>
        <mu-table :showCheckbox="showCheckbox">
          <mu-tbody>
            <mu-tr>
              <mu-td class="t3">区间段</mu-td>
              <mu-td class="t3">区间收益</mu-td>
              <mu-td class="t3">年化收益</mu-td>
            </mu-tr>
            <mu-tr>
              <mu-td class="maxlen black-link">一年</mu-td>
              <mu-td class="maxlen"
                     v-html="colorNumber(gradeData.ir2)"></mu-td>
              <mu-td class="maxlen"
                     v-html="colorNumber(gradeData.yp)"></mu-td>
            </mu-tr>
            <mu-tr>
              <mu-td class="maxlen black-link">两年</mu-td>
              <mu-td class="maxlen"
                     v-html="colorNumber(gradeData.tyir2)"></mu-td>
              <mu-td class="maxlen"
                     v-html="colorNumber(gradeData.tyyp)"></mu-td>
            </mu-tr>
            <mu-tr>
              <mu-td class="maxlen black-link">今年以来</mu-td>
              <mu-td class="maxlen"
                     v-html="colorNumber(gradeData.ftir)"></mu-td>
              <mu-td class="maxlen"
                     v-html="colorNumber(gradeData.ftyp)"></mu-td>
            </mu-tr>
            <mu-tr>
              <mu-td class="maxlen black-link">两年以来</mu-td>
              <mu-td class="maxlen"
                     v-html="colorNumber(gradeData.ftir1)"></mu-td>
              <mu-td class="maxlen"
                     v-html="colorNumber(gradeData.ftyp1)"></mu-td>
            </mu-tr>
            <mu-tr>
              <mu-td class="maxlen black-link">成立以来</mu-td>
              <mu-td class="maxlen"
                     v-html="colorNumber(gradeData.feir)"></mu-td>
              <mu-td class="maxlen"
                     v-html="colorNumber(gradeData.feyp)"></mu-td>
            </mu-tr>
          </mu-tbody>
        </mu-table>
      </mu-card-text>
    </mu-card>
  </div>
  </div>
</template>
<script>
import GlobalFooter from '../components/Footer.vue'
import GlobalHeader from '../components/Header.vue'
import GradeBar from '../components/GradeBar.vue'
import API from '../store/api'
export default {
  data () {
    return {
      data: {},
      gradeData: {},
      list: [],
      showCheckbox: false
    }
  },
  mounted () {
    var myChart = window.echarts.init(document.getElementById('chartGrade'))
    myChart.showLoading({effect: 'whirling'})
    this.getData()
    this.createChart(myChart)
  },
  methods: {
    initEcharts (myChart, date, data1, data2, legend) {
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
          }
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
    colorNumber (num) {
      if (num >= 0) {
        return '<a>' + (num * 100).toFixed(2) + '%</a>'
      } else {
        return '<a class="green">' + (num * 100).toFixed(2) + '%</a>'
      }
    },
    getData () {
      var _this = this
      API.getSiMuWangProductInfoBySID(_this.$route.params.id, function (d) {
        if (d.code === 200 && d.results && d.results.length > 0) {
          _this.data = d.results[0]
        }
      })

      API.getPrivateFundGrade(_this.$route.params.id, function (d) {
        if (d.code === 200 && d.results && d.results.length > 0) {
          _this.gradeData = d.results[0]
        }
        _this.loading = false
      })
    },
    createChart (myChart) {
      var _this = this
      var date = []
      var data1 = []
      var data2 = []
      API.getProductNets(_this.$route.params.id, function (d) {
        if (d.code === 200 && d.results && d.results.length > 0) {
          // 限制时间段防止加载时间过长
          API.getCSI(+new Date('2014-01-01'), +new Date(), function (d2) {
            for (var i = 0; i < d.results.length; i++) {
              for (var j = 0; j < d2.results.length; j++) {
                if (d.results[i].ds === d2.results[j].rts.substring(0, 10)) {
                  date.unshift(d.results[i].ds)
                  data1.unshift(d.results[i].cn)
                  data2.unshift(d2.results[j].v)
                }
              }
            }
            var len = data1.length
            data1.forEach(function (item, index) {
              data1[index] = Math.round((item / data1[len - 1]) * 100) / 100
            })
            data2.forEach(function (item, index) {
              data2[index] = Math.round((item / data2[len - 1]) * 100) / 100
            })
            _this.initEcharts(myChart, date, data1, data2, '当前基金')
          })
        }
      })
    }
  },
  components: {
    GlobalFooter,
    GlobalHeader,
    GradeBar
  }
}
</script>
