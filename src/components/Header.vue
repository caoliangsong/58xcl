<template>
<div id="header">
  <mu-appbar titleClass="center">
      <div slot="default">{{title}}</div>
      <mu-icon-button icon="arrow_back" slot="left" @click="back" v-if="showBackBtn" style="position:absolute;"/>
      <mu-icon-button icon="search" slot="right" @click="toggle" style="position:absolute;right:10px;"/>
  </mu-appbar>
  <mu-drawer :open="open"  @close="toggle">
        <mu-auto-complete label="请输入基金关键词" labelFloat  @input="handleInput" :dataSource="dataSource" @change="handlechange"  filter="noFilter"/>
      </mu-drawer>
</div>
</template>
<script>
import API from '../store/api'
export default {
  props: {
    title: {
      type: String,
      default: '新策略'
    }
  },
  data () {
    return {
      dataSource: [],
      links: [],
      open: false,
      showBackBtn: ['Index', 'Grade', 'News', 'Exponent'].indexOf(this.$route.name) === -1
    }
  },
  methods: {
    handlechange (val) {
      var _this = this
      this.open = false
      this.$router.push('/grade/' + _this.links[_this.dataSource.indexOf(val)])
    },
    toggle () {
      this.open = !this.open
    },
    back () {
      this.$router.back()
    },
    handleInput (val) {
      var _this = this
      _this.dataSource = []
      _this.links = []
      API.fullTextSearch(val, function (d) {
        if (d.results && d.results.length) {
          d.results.forEach(function (item, index) {
            _this.dataSource.push(item.k)
            _this.links.push(item.lp)
          })
        }
      })
    }
  }
}
</script>
