<template>
<div id="header">
  <mu-appbar titleClass="center">
      <div slot="default">{{title}}</div>
      <mu-icon-button icon="arrow_back" slot="left" @click="back" v-if="showBackBtn" style="position:absolute;"/>
      <mu-icon-button icon="search" slot="right" @click="toggle" style="position:absolute;right:10px;"/>
  </mu-appbar>
  <mu-drawer :open="open" :docked="false" @close="toggle">
        <mu-auto-complete label="请输入基金关键词" labelFloat :value="value"  @input="handleInput" :dataSource="dataSource" @change="handlechange"  filter="noFilter"/>
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
      value: '',
      showBackBtn: ['Index', 'Grade', 'News', 'Exponent'].indexOf(this.$route.name) === -1
    }
  },
  methods: {
    handlechange (val) {
      this.open = false
      /* repair bug */
      document.querySelector('.mu-overlay').style.display = 'none'
      this.$router.push('/grade/' + this.links[this.dataSource.indexOf(val)])
    },
    toggle () {
      this.open = !this.open
    },
    back () {
      this.$router.back()
    },
    handleInput (val) {
      this.dataSource = []
      this.links = []
      API.fullTextSearch(val, (d) => {
        if (d.results && d.results.length) {
          d.results.forEach((item, index) => {
            this.dataSource.push(item.k)
            this.links.push(item.lp)
          })
        }
      })
    }
  }
}
</script>
