<template>
<div class="container">
  <global-header :title="title"></global-header>
  <global-footer></global-footer>
  <div class="infinite-container">
    <div class="center"><mu-circular-progress :size="30" v-show="loading"/></div>
    <h1 class="title-2">{{newsTitle}}</h1>
    <div class="center t3" style="margin-bottom: 10px;">时间：{{newsTime}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分类：<span v-html="title"></span></div>
    <mu-divider/>
    <div class="newsDesc" v-html="newsDesc">
    </div>
    <mu-divider/>
    <mu-sub-header>更多相关资讯</mu-sub-header>
    <mu-list>
      <template v-for="item in list" :keys="item._id">
        <router-link :to="'/news/'+item.id">
        <mu-list-item class="maxlen" :title="item.t" :afterText="arrType[item.t1]" />
        </router-link>
        <mu-divider/>
      </template>
    </mu-list>
</div>
</div>
</template>
<script>
import API from '../store/api'
import GlobalFooter from '../components/Footer.vue'
import GlobalHeader from '../components/Header.vue'
export default {
  data () {
    return {
      newsTitle: '',
      newsTime: '',
      arrType: ['', '', '私募观点', '研究报告', '私募动态', '走访报告', '大赛公告', '知识学堂', '基金要闻', '投资建议', '宏观观点'],
      loading: true,
      newsDesc: '',
      title: '',
      list: []
    }
  },
  watch: {
    '$route': 'getData'
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData (p) {
      // 自动到顶部
      document.querySelector('.infinite-container').scrollTop = 0
      this.loading = true
      API.getJournalismtById(this.$route.params.id).then(d => {
        if (d.code === 200 && d.results && d.results.length > 0) {
          this.newsTitle = d.results[0].t
          this.title = this.arrType[d.results[0].t1]
          this.newsTime = (new Date(d.results[0].lmt)).toLocaleDateString().replace(/\//g, '-')
          this.newsDesc = d.results[0].d
          API.getJournalismtList(d.results[0].t1, 1, 6).then(d2 => {
            if (d2.code === 200 && d2.results && d2.results.length > 0) {
              this.list = d2.results
            }
            this.loading = false
          })
        } else {
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
<style lang="css">

</style>
