<template>
<div class="infinite-container">
  <global-header :title="title"></global-header>
  <global-footer></global-footer>
  <mu-list>
    <template v-for="item in list">
      <mu-list-item class="maxlen" :title="item.t" :afterText="arrType[item.t1]" :href="'/#/news/'+item.id" />
      <mu-divider/>
    </template>
  </mu-list>
  <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
</div>
</template>
<script>
import GlobalFooter from '../components/Footer.vue'
import GlobalHeader from '../components/Header.vue'
import API from '../store/api'
export default {
  data () {
    return {
      list: [],
      page: 1,
      title: '资讯',
      arrType: ['', '', '私募观点', '研究报告', '私募动态', '走访报告', '大赛公告', '知识学堂', '基金要闻', '投资建议', '宏观观点'],
      loading: false,
      scroller: null
    }
  },
  mounted () {
    this.scroller = this.$el
    this.getData(1)
  },
  methods: {
    loadMore () {
      this.getData(++this.page)
    },
    getData (p) {
      var _this = this
      _this.loading = true
      API.getJournalismtList(-1, p, 20, function (d) {
        if (d.code === 200 && d.results && d.results.length > 0) {
          _this.list = _this.list.concat(d.results)
          if (d.results.length < 20) {
            _this.list.push({t: '- END -'})
          }
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
<style>
.mu-item-title{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
</style>
