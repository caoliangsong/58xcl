<template>
<div class="infinite-container center">
  <global-header></global-header>
  <global-footer></global-footer>
    <mu-circular-progress :size="30" v-show="loading"/>
    <h1 class="title-2">{{newsTitle}}</h1>
    <div class="newsDesc" v-html="newsDesc">
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
      arrType: ['', '', '私募观点', '研究报告', '私募动态', '走访报告', '大赛公告', '知识学堂', '基金要闻', '投资建议', '宏观观点'],
      loading: true,
      newsDesc: ''
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData (p) {
      var _this = this
      _this.loading = true
      API.getJournalismtById(_this.$route.params.id, function (d) {
        if (d.code === 200 && d.results && d.results.length > 0) {
          _this.newsTitle = d.results[0].t
          _this.newsDesc = d.results[0].d
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
<style lang="css">

</style>
