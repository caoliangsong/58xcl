<template>
<div class="container">
  <global-header :title="title"></global-header>
  <global-footer></global-footer>
  <mu-icon-button icon="filter_list" class="global-left-bar" @click="toggleDrawer">
  </mu-icon-button>
  <mu-drawer :open="open" :right="true" :docked="false" @close="toggleDrawer">
    <!--<mu-sub-header>基金筛选</mu-sub-header>-->
    <mu-content-block>
    <mu-select-field v-model="s1" :labelFocusClass="['label-foucs']" label="综合评级">
      <mu-menu-item v-for="text,index in selectList" :key="index" :value="index" :title="text" />
    </mu-select-field>
    <mu-select-field v-model="s2" :labelFocusClass="['label-foucs']" label="收益评级">
      <mu-menu-item v-for="text,index in selectList" :key="index" :value="index" :title="text" />
    </mu-select-field>
    <mu-select-field v-model="s3" :labelFocusClass="['label-foucs']" label="一般风险">
      <mu-menu-item v-for="text,index in selectList" :key="index" :value="index" :title="text" />
    </mu-select-field>
    <mu-select-field v-model="s4" :labelFocusClass="['label-foucs']" label="极端风险">
      <mu-menu-item v-for="text,index in selectList" :key="index" :value="index" :title="text" />
    </mu-select-field>
    <mu-select-field v-model="s5" :labelFocusClass="['label-foucs']" label="基金类型">
      <mu-menu-item v-for="text,index in selectListType" :key="index" :value="index" :title="text" />
    </mu-select-field>
    <mu-raised-button primary label="确定" fullWidth @click="submitFilter"></mu-raised-button>
    </mu-content-block>
  </mu-drawer>
  <div class="infinite-container">
   <mu-table :fixedHeader="fixedHeader" :showCheckbox="showCheckbox">
      <mu-thead slot="header">
        <mu-tr>
          <mu-th tooltip="基金名称">基金名称</mu-th>
          <mu-th tooltip="基金公司">基金公司</mu-th>
          <mu-th tooltip="年收益">年收益</mu-th>
        </mu-tr>
      </mu-thead>
      <mu-tbody>
        <mu-tr v-for="item,index in list"  :key="index" :selected="item.selected">
          <mu-td class="maxlen black-link"><router-link :to="'/grade/'+item.sid">{{item.pn}}</router-link></mu-td>
          <mu-td class="maxlen black-link"><router-link :to="'/team/'+item.csid">{{item.cn || '---'}}</router-link></mu-td>
          <mu-td class="maxlen">
            <color-number :num="item.feyp"></color-number>
          </mu-td>
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
import ColorNumber from '../components/ColorNumber.vue'
import API from '../store/api'
export default {
  data () {
    return {
      title: '评级',
      list: [],
      fixedHeader: true,
      showCheckbox: false,
      loading: false,
      scroller: null,
      page: 1,
      open: false,
      selectList: [
        '不限', '1星', '2星', '3星', '4星', '5星'
      ],
      selectListType: [
        '不限', '股票型', '期货型'
      ],
      s1: 0,
      s2: 0,
      s3: 0,
      s4: 0,
      s5: 0,
      togetherRating: -1,
      incomeRating: -1,
      normalRiskRating: -1,
      extremeRiskRating: -1,
      type: -1
    }
  },
  mounted () {
    this.scroller = document.querySelector('.infinite-container')
    this.getData(1)
  },
  methods: {
    toggleDrawer () {
      this.open = !this.open
    },
    submitFilter () {
      this.toggleDrawer()
      this.togetherRating = this.s1
      this.incomeRating = this.s2
      this.normalRiskRating = this.s3
      this.extremeRiskRating = this.s4
      this.type = this.s5
      this.getData(1, true)
    },
    loadMore () {
      this.getData(++this.page)
    },
    getData (p, isFilter) {
      this.loading = true
      API.getFundGrades('', '', 0, this.togetherRating, this.incomeRating, this.normalRiskRating, this.extremeRiskRating, this.type, false, p, 20, '_togetherRating').then(d => {
        if (d.code === 200 && d.results && d.results.length > 0) {
          if (isFilter) {
            this.list = d.results
          } else {
            this.list = this.list.concat(d.results)
          }
        } else {
        }
        this.loading = false
      })
    }
  },
  components: {
    GlobalFooter,
    GlobalHeader,
    ColorNumber
  }
}
</script>
