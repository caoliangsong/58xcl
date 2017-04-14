<template>
<div class="container">
  <global-header :title="title"></global-header>
  <global-footer></global-footer>
  <mu-icon-menu icon="more_vert" class="global-left-bar" @change="handleChange" :open="open" :value="value">
    <mu-menu-item title="资讯首页" value="-1"/>
    <mu-menu-item title="私募观点" value="2"/>
    <mu-menu-item title="私募动态" value="4"/>
    <mu-menu-item title="研究报告" value="3"/>
    <mu-menu-item title="宏观观点" value="10"/>
    <mu-menu-item title="基金要闻" value="8"/>
    <mu-menu-item title="投资建议" value="9"/>
  </mu-icon-menu>
  <div class="infinite-container">
    <mu-list>
      <template v-for="item in list">
        <mu-list-item class="maxlen" :title="item.t" :afterText="arrType[item.t1]" :href="'/#/news/'+item.id" />
        <mu-divider/>
      </template>
    </mu-list>
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
      list: [],
      page: 1,
      title: '资讯首页',
      arrType: ['', '', '私募观点', '研究报告', '私募动态', '走访报告', '大赛公告', '知识学堂', '基金要闻', '投资建议', '宏观观点'],
      loading: false,
      scroller: null,
      value: '-1',
      open: false,
      canloadmore: true
    }
  },
  mounted () {
    this.scroller = document.querySelector('.infinite-container')
    this.getData(1)
  },
  methods: {
    handleChange (val) {
      if (val === this.value) return
      this.value = val
      this.title = this.arrType[val]
      this.list = []
      this.canloadmore = true
      this.getData(1, val)
    },
    loadMore () {
      this.canloadmore && this.getData(++this.page, this.value)
    },
    getData (p, type) {
      this.loading = true
      API.getJournalismtList(type || -1, p, 20, d => {
        if (d.code === 200 && d.results && d.results.length > 0) {
          this.list = this.list.concat(d.results)
          if (d.results.length < 20) {
            this.list.push({t: '- END -'})
            this.canloadmore = false
          }
        } else {
          this.list.push({t: '- END -'})
          this.canloadmore = false
        }
        this.loading = false
      })
    }
  },
  components: {
    GlobalFooter,
    GlobalHeader
  }
}
</script>
