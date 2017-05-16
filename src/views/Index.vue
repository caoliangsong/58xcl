<template>
<div class="container">
  <global-footer></global-footer>
  <div class="infinite-container" style="top:0;">
     <search-bar></search-bar>
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
    <mu-sub-header>新策略私募基金指数</mu-sub-header>
    <mu-row gutter>
      <mu-col width="50">
        <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="tab0" title="综合"/>
      <mu-tab value="tab1" title="股票型"/>
      <mu-tab value="tab2" title="期货型"/>
    </mu-tabs>
      </mu-col>
      <mu-col width="50">
         <exponent-bar :data="stockData"></exponent-bar>
      </mu-col>
    </mu-row>
    <mu-content-block>
       <charts :data="stockData1" ></charts>
    </mu-content-block>
    <mu-sub-header>新策略私募基金评级</mu-sub-header>
     <mu-list v-for="item,index in list" :key="index" class="no-padding">
      <mu-divider />
      <router-link :to="'/grade/'+item.sid">
      <mu-list-item :title="item.pn" :describeText="(item.mn||'---')+' | '+ item.cn" describeTextClass="maxlen">
        <div slot="leftAvatar" class="f16">{{index+1}}</div>
        <div slot="right"><color-number :num="item.feyp"></color-number></div>
      </mu-list-item>
      </router-link>
  </mu-list>
    
</div>
  </div>
</template>

<script>
import 'vue-swipe/dist/vue-swipe.css'
import API from '../store/api'
import GlobalFooter from '../components/Footer.vue'
import Charts from '../components/Charts.vue'
import ExponentBar from '../components/ExponentBar.vue'
import ColorNumber from '../components/ColorNumber.vue'
import SearchBar from '../components/SearchBar.vue'
import { Swipe, SwipeItem } from 'vue-swipe'
export default {
  data () {
    return {
      list: [],
      value: 'simple1',
      stockData: {
        addtion: 0,
        pencent: 0,
        v: 0
      },
      typeArr: ['综合', '股票型', '期货型'],
      stockData1: {},
      activeTab: 'tab0'
    }
  },
  mounted () {
    this.getData(0, '综合')
    this.getGrade()
  },
  methods: {
    handleTabChange (val) {
      let type = parseInt(val.replace('tab', ''))
      this.activeTab = val
      this.getData(type, this.typeArr[type])
    },
    getData (type, legend) {
      let _this = this
      API.getFundIndexBaseByType(type, 0, 0, function (d) {
        if (d.code === 200 && d.results && d.results.length > 0) {
          var arrDate = []
          var arrData = []
          for (let i = 0; i < d.results.length; i++) {
            arrDate.push(d.results[i].rts.substring(0, 10))
            arrData.push(d.results[i].v.toFixed(2))
          }
          var lastValue = d.results[d.results.length - 1]
          _this.stockData = {
            addtion: lastValue.i.toFixed(2),
            pencent: (lastValue.ip * 100).toFixed(2),
            v: lastValue.v.toFixed(2)
          }
          _this.stockData1 = {
            date: arrDate,
            data1: arrData,
            legend1: legend
          }
        }
      })
    },
    getGrade () {
      API.getFundGrades('', '', 0, 5, -1, -1, -1, -1, false, 1, 10, '_togetherRating', d => {
        if (d.code === 200 && d.results && d.results.length > 0) {
          this.list = d.results
        }
      })
    }
  },
  components: {
    GlobalFooter,
    Charts,
    Swipe,
    SwipeItem,
    ExponentBar,
    ColorNumber,
    SearchBar
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
.mu-tabs {
  background-color: #fff;
}
.mu-tab-link {
  color: #999;
  &.mu-tab-active{
    color:#8547F4;
  }
}
.mu-tab-link-highlight{
  background-color:#8547F4!important;
}
.mu-list.no-padding{
  padding: 0;
}
.f16{
  font-size: 1.2em;
}
.mu-item.show-left{
  padding-left:42px;
}
.mu-item.show-right{
  padding-right:60px;
}
</style>
