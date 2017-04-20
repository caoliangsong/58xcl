<template>
<div class="container">
  <global-header></global-header>
  <global-footer></global-footer>
  <div class="infinite-container">
    <swipe class="my-swipe">
      <swipe-item>
        <router-link to="/grade"><img src="static/banner02.png" /></router-link>
      </swipe-item>
      <swipe-item>
        <router-link to="/exponent"><img src="static/banner01.png" /></router-link>
      </swipe-item>
      <swipe-item>
        <router-link to="/news"><img src="static/banner03.png" /></router-link>
      </swipe-item>
    </swipe>
    <mu-sub-header>股票型私募基金指数</mu-sub-header>
    <mu-content-block>
      <charts :data="stockData1" ></charts>
    </mu-content-block>
    <mu-sub-header>期货型私募基金指数</mu-sub-header>
    <mu-content-block>
      <charts :data="stockData2"></charts>
    </mu-content-block>
</div>
  </div>
</template>

<script>
require('vue-swipe/dist/vue-swipe.css')
import API from '../store/api'
import GlobalFooter from '../components/Footer.vue'
import GlobalHeader from '../components/Header.vue'
import Charts from '../components/Charts.vue'
import { Swipe, SwipeItem } from 'vue-swipe'
export default {
  data () {
    return {
      list: [],
      value: 'simple1',
      stockData1: {},
      stockData2: {}
    }
  },
  mounted () {
    this.getData(1, '股票型')
    this.getData(2, '期货型')
  },
  methods: {
    getData (type, legend) {
      let _this = this
      API.getFundIndexBaseByType(type, function (d) {
        if (d.code === 200 && d.results && d.results.length > 0) {
          var arrDate = []
          var arrData = []
          for (let i = 0; i < d.results.length; i++) {
            arrDate.push(d.results[i].rts.substring(0, 10))
            arrData.push(d.results[i].v.toFixed(2))
          }
          type === 1 ? _this.stockData1 = {
            date: arrDate,
            data1: arrData,
            legend1: legend
          } : _this.stockData2 = {
            date: arrDate,
            data1: arrData,
            legend1: legend
          }
        }
      })
    }
  },
  components: {
    GlobalFooter,
    GlobalHeader,
    Charts,
    Swipe,
    SwipeItem
  }
}
</script>
<style lang="less">
.my-swipe {
  height: 150px!important;
  img{
    width: 100%;
    height: 150px;
  }
}
</style>
