<template>
<div class="container">
  <global-header></global-header>
  <global-footer></global-footer>
  <div class="infinite-container">
    <mu-card>
    <mu-card-title :title="data.cn"/>
    <mu-divider/>
    <mu-card-text>
        <p>备案证号：{{data.rn ? data.rn.replace('(备案号：','').replace(')','') : '--'}}</p>
        <p>核心人物：{{data.cp}}</p>
        <p>产品总数：{{data.ca}}</p>
        <p>成立日期：{{data.ed}}</p>
        <p>所在地区：--</p>
    </mu-card-text>
 
    <mu-divider/>
    <mu-sub-header>公司简介</mu-sub-header>
    <mu-card-text>
        {{data.cd || '--'}}
    </mu-card-text>

    <mu-divider/>
    <mu-sub-header>投资理念</mu-sub-header>
    <mu-card-text>
        {{data.ic || '--'}}
    </mu-card-text>

    <mu-divider/>
    <mu-sub-header>该基金公司其他产品</mu-sub-header>
    </mu-card-header>
        <mu-table :showCheckbox="showCheckbox">
        <mu-tbody>
          <mu-tr v-for="item,index in list"  :key="index" :selected="item.selected">
            <mu-td class="maxlen black-link" width="70%"><a :href="'/#/grade/'+item.sid">{{item.pn}}</a></mu-td>
            <mu-td class="maxlen"><a>{{(item.feyp*100).toFixed(2) }}%</a></mu-td>
          </mu-tr>
        </mu-tbody>
      </mu-table>
    </mu-card>
</div>
</div>
</template>
<script>
import GlobalFooter from '../components/Footer.vue'
import GlobalHeader from '../components/Header.vue'
import API from '../store/api'
export default {
  data () {
    return {
      data: {},
      loading: false,
      list: [],
      showCheckbox: false
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      var _this = this
      var cid = _this.$route.params.id
      _this.loading = true
      API.SiMuWangCompanyByCompanySID(cid, function (d) {
        if (d.code === 200 && d.results && d.results.length > 0) {
          _this.data = d.results[0]
        } else {
        }
        _this.loading = false
      })
      API.getCompanyFundGrades(cid, function (d) {
        if (d.code === 200 && d.results && d.results.length > 0) {
          _this.list = d.results
        } else {
        }
        _this.loading = false
      })
    }
  },
  components: {
    GlobalFooter,
    GlobalHeader
  }
}
</script>
