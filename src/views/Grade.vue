<template>
<div class="container">
  <global-header :title="title"></global-header>
  <global-footer></global-footer>
  <div class="infinite-container">
   <mu-table :fixedFooter="fixedFooter" :fixedHeader="fixedHeader"
    :enableSelectAll="enableSelectAll" :multiSelectable="multiSelectable"
    :selectable="selectable" :showCheckbox="showCheckbox">
    <mu-thead slot="header">
      <mu-tr>
        <mu-th tooltip="基金名称">基金名称</mu-th>
        <mu-th tooltip="基金公司">基金公司</mu-th>
        <mu-th tooltip="年收益">年收益</mu-th>
      </mu-tr>
    </mu-thead>
    <mu-tbody>
      <mu-tr v-for="item,index in list"  :key="index" :selected="item.selected">
        <mu-td class="maxlen black-link"><a :href="'/#/grade/'+item.sid">{{item.pn}}</a></mu-td>
        <mu-td class="maxlen black-link"><a :href="'/#/team/'+item.csid">{{item.cn || '---'}}</a></mu-td>
        <mu-td class="maxlen"><a>{{(item.feyp*100).toFixed(2) }}%</a></mu-td>
      </mu-tr>
    </mu-tbody>
  </mu-table>

  <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
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
      title: '评级',
      list: [],
      fixedHeader: true,
      fixedFooter: false,
      selectable: false,
      multiSelectable: true,
      enableSelectAll: false,
      showCheckbox: false,
      loading: false,
      scroller: null,
      page: 1
    }
  },
  mounted () {
    this.scroller = document.querySelector('.infinite-container')
    this.getData(1)
  },
  methods: {
    loadMore () {
      this.getData(++this.page)
    },
    getData (p) {
      var _this = this
      _this.loading = true
      API.getFundGrades('', '', 0, -1, -1, -1, -1, -1, false, p, 20, '_togetherRating', function (d) {
        if (d.code === 200 && d.results && d.results.length > 0) {
          _this.list = _this.list.concat(d.results)
        } else {
          _this.list.push({t: '- END -'})
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
