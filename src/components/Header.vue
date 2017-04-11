<template>
<div id="header">
<mu-appbar titleClass="center">
    <div>{{title}}</div>
    <mu-icon-button icon="arrow_back" slot="left" @click="back()" v-show="showBackBtn" style="position:absolute;"/>
    <mu-icon-button icon="search" slot="right" @click="toggle()" style="position:absolute;right:10px;"/>
</mu-appbar>
<mu-drawer :open="open" :docked="docked" @close="toggle()">
<mu-list @itemClick="docked ? '' : toggle()">
  <mu-auto-complete hintText="请输入关键词" @input="handleInput" :dataSource="dataSource" @change="handlechange"  filter="noFilter"/>
</mu-list>
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
      docked: true,
      showBackBtn: this.$route.name !== 'Index'
    }
  },
  methods: {
    handlechange (val) {
      var _this = this
      this.$router.push('/grade/' + _this.links[_this.dataSource.indexOf(val)])
    },
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
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
