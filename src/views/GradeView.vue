<template>
<div class="">
  <global-header></global-header>
  <global-footer></global-footer>
    <mu-card>
    <mu-card-title :title="data.pn" subTitle=""/>
    <mu-icon-button  icon="grade" style="position:absolute;right:10px;top:12px;" />
    <mu-divider/>
    <mu-card-text>
        <p>最新净值：{{data.nn}}</p>
        <p>累计净值：{{data.tn}}</p>
        <p>产品类型：{{data.ic1}}</p>
        <p>成立日期：{{data.fd}}</p>
        <p>产品状态：{{data.rs}}</p>
    <mu-divider/>
    <grade-bar :percent="gradeData.tr*20" theme="yellow" title="新策略评级"></grade-bar>
    <grade-bar :percent="gradeData.nrr*20" theme="orange" title="抗风险"></grade-bar>
    <grade-bar :percent="gradeData.cr*20" theme="yellow" title="持续性"></grade-bar>
    <grade-bar :percent="gradeData.sr*20" theme="green" title="选股能力"></grade-bar>
    <grade-bar :percent="gradeData.mtr*20" theme="blue" title="择时能力"></grade-bar>
    <br />
    <mu-divider/>

    <mu-sub-header>公司简介</mu-sub-header>
    <mu-card-text>
        {{data.cd || '--'}}
    </mu-card-text>
        
    </mu-card-text>
    </mu-card>
   
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
      loading: false
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      var _this = this
      _this.loading = true
      API.getSiMuWangProductInfoBySID(_this.$route.params.id, function (d) {
        if (d.code === 200 && d.results && d.results.length > 0) {
          _this.data = d.results[0]
        } else {
        }
        _this.loading = false
      })

      API.getPrivateFundGrade(_this.$route.params.id, function (d) {
        if (d.code === 200 && d.results && d.results.length > 0) {
          console.log(d)
          _this.gradeData = d.results[0]
        } else {
        }
        _this.loading = false
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
