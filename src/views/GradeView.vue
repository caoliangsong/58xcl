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
      <div class="pd20">
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
        </div>
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
        <charts :data="stockData1" ></charts>
             <div class="mt20"></div>
        <mu-divider/>
       <mu-sub-header>风险评估</mu-sub-header>
       <div style="clear:both"></div>
        <mu-table :showCheckbox="false">
          <mu-tbody>
            <mu-tr>
              <mu-td class="t3">区间段</mu-td>
              <mu-td class="t3">区间收益</mu-td>
              <mu-td class="t3">年化收益</mu-td>
            </mu-tr>
            <mu-tr>
              <mu-td class="maxlen black-link">一年</mu-td>
              <mu-td class="maxlen">
                <color-number :num="gradeData.ir2"></color-number>
              </mu-td><mu-td class="maxlen">
                <color-number :num="gradeData.yp"></color-number>
              </mu-td>
            </mu-tr>
            <mu-tr>
              <mu-td class="maxlen black-link">两年</mu-td>
              <mu-td class="maxlen">
                <color-number :num="gradeData.tyir2"></color-number>
              </mu-td>
              <mu-td class="maxlen">
                <color-number :num="gradeData.tyyp"></color-number>
              </mu-td>
            </mu-tr>
            <mu-tr>
              <mu-td class="maxlen black-link">今年以来</mu-td>
              <mu-td class="maxlen">
                <color-number :num="gradeData.ftir"></color-number>
              </mu-td>
              <mu-td class="maxlen">
                <color-number :num="gradeData.ftyp"></color-number>
              </mu-td>
            </mu-tr>
            <mu-tr>
              <mu-td class="maxlen black-link">两年以来</mu-td>
              <mu-td class="maxlen">
                <color-number :num="gradeData.ftir1"></color-number>
              </mu-td>
              <mu-td class="maxlen">
                <color-number :num="gradeData.ftyp1"></color-number>
              </mu-td>
            </mu-tr>
            <mu-tr>
              <mu-td class="maxlen black-link">成立以来</mu-td>
              <mu-td class="maxlen">
                <color-number :num="gradeData.feir"></color-number>
              </mu-td>
              <mu-td class="maxlen">
                <color-number :num="gradeData.feyp"></color-number>
              </mu-td>
            </mu-tr>
          </mu-tbody>
        </mu-table>

        <mu-divider/>
       <mu-sub-header>基金经理</mu-sub-header>
       <mu-table :showCheckbox="false" v-if="managerData.mn">
        <mu-tbody>
          <mu-tr>
            <mu-td colspan="3">{{managerData.mn}} <small class="t3">({{managerData.p}})</small></mu-td>
          </mu-tr>
          <mu-tr>
            <mu-td><span class="t3">文化程度 </span>{{managerData.q}}</mu-td>
            <mu-td><span class="t3">从业年限 </span>{{managerData.wy}}</mu-td>
            <mu-td><span class="t3">从业背景 </span>{{managerData.wb}}</mu-td>
          </mu-tr>
          <mu-tr>
            <mu-td><span class="t3">今年收益 </span>{{managerData.yai}}</mu-td>
            <mu-td><span class="t3">累计收益 </span>{{managerData.tai}}</mu-td>
            <mu-td><span class="t3">管理产品 </span>{{managerData.fn}}</mu-td>
          </mu-tr>
          <mu-tr>
          <mu-td colspan="3" style="white-space:normal;line-height:2;padding:20px;">{{managerData.cd}}</mu-td>
          </mu-tr>
        </mu-tbody>
       </mu-table>
       <div class="no-data" v-else>暂无数据</div>

       <mu-sub-header>基金公司</mu-sub-header>
       <mu-table :showCheckbox="false" v-if="teamData.cn">
        <mu-tbody>
          <mu-tr>
            <mu-td colspan="2">{{teamData.cn}}</mu-td>
          </mu-tr>
          <mu-tr>
            <mu-td><span class="t3">备案证号 </span>{{teamData.fn}}</mu-td>
            <mu-td><span class="t3">核心人物 </span>{{teamData.cp}}</mu-td>
          </mu-tr>
          <mu-tr>
             <mu-td><span class="t3">产品总数 </span>{{teamData.ca}}</mu-td>
            <mu-td><span class="t3">成立日期 </span>{{teamData.ed}}</mu-td>
          </mu-tr>
          <mu-tr>
          <mu-td colspan="2" style="white-space:normal;line-height:2;padding:20px;">{{teamData.cd}}</mu-td>
          </mu-tr>
        </mu-tbody>
       </mu-table>
       <div class="no-data" v-else>暂无数据</div>
    </mu-card>
  </div>
  </div>
</template>
<script>
import GlobalFooter from '../components/Footer.vue'
import GlobalHeader from '../components/Header.vue'
import GradeBar from '../components/GradeBar.vue'
import ColorNumber from '../components/ColorNumber.vue'
import Charts from '../components/Charts.vue'
import API from '../store/api'
export default {
  data () {
    return {
      data: {},
      gradeData: {},
      managerData: {},
      teamData: {},
      list: [],
      stockData1: {}
    }
  },
  watch: {
    '$route': 'init'
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.getData()
      this.createChart()
      this.getSiMuWangManagerBySID()
      this.SiMuWangCompanyBySID()
    },
    _getCsi (fn) {
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
    getData () {
      API.getSiMuWangProductInfoBySID(this.$route.params.id, d => {
        if (d.code === 200 && d.results && d.results.length > 0) {
          this.data = d.results[0]
        }
      })

      API.getPrivateFundGrade(this.$route.params.id, d => {
        if (d.code === 200 && d.results && d.results.length > 0) {
          this.gradeData = d.results[0]
        }
        this.loading = false
      })
    },
    createChart () {
      var date = []
      var data1 = []
      var data2 = []
      API.getProductNets(this.$route.params.id, d => {
        if (d.code === 200 && d.results && d.results.length > 0) {
          // 限制时间段防止加载时间过长
          this._getCsi(d2 => {
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
            var temp1 = []
            var temp2 = []
            data1.forEach(function (item, index) {
              temp1[index] = Math.round((item / data1[len - 1]) * 100) / 100
            })
            data2.forEach(function (item, index) {
              temp2[index] = Math.round((item / data2[len - 1]) * 100) / 100
            })
            this.stockData1 = {
              date: date,
              data1: temp1,
              data2: temp2,
              legend1: '当前基金',
              legend2: '沪深300'
            }
          })
        }
      })
    },
    getSiMuWangManagerBySID () {
      API.getSiMuWangManagerBySID(this.$route.params.id, d => {
        if (d.code === 200 && d.results && d.results.length > 0) {
          this.managerData = d.results[0]
        }
      })
    },
    SiMuWangCompanyBySID () {
      API.SiMuWangCompanyBySID(this.$route.params.id, d => {
        if (d.code === 200 && d.results && d.results.length > 0) {
          this.teamData = d.results[0]
        }
      })
    }
  },
  components: {
    GlobalFooter,
    GlobalHeader,
    GradeBar,
    ColorNumber,
    Charts
  }
}
</script>
