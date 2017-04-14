<template>
<div class="container">
  <global-header :title="title"></global-header>
  <global-footer></global-footer>
  <mu-icon-button icon="more_vert" class="global-left-bar" @click="toggleDrawer">
  </mu-icon-button>
  <mu-drawer :open="open" :right="true" :docked="false" @close="toggleDrawer">
    <!--<mu-sub-header>基金筛选</mu-sub-header>-->
    <mu-content-block>
    <mu-select-field v-model="game1" :labelFocusClass="['label-foucs']" label="综合评级">
      <mu-menu-item v-for="text,index in selectList" :key="index" :value="index" :title="text" />
    </mu-select-field>
    <mu-select-field v-model="game1" :labelFocusClass="['label-foucs']" label="收益评级">
      <mu-menu-item v-for="text,index in selectList" :key="index" :value="index" :title="text" />
    </mu-select-field>
    <mu-select-field v-model="game1" :labelFocusClass="['label-foucs']" label="一般风险">
      <mu-menu-item v-for="text,index in selectList" :key="index" :value="index" :title="text" />
    </mu-select-field>
    <mu-select-field v-model="game1" :labelFocusClass="['label-foucs']" label="极端风险">
      <mu-menu-item v-for="text,index in selectList" :key="index" :value="index" :title="text" />
    </mu-select-field>
    <mu-select-field v-model="game1" :labelFocusClass="['label-foucs']" label="基金类型">
      <mu-menu-item v-for="text,index in selectList" :key="index" :value="index" :title="text" />
    </mu-select-field>
    <mu-flat-button primary label="确定"></mu-flat-button>
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
          <mu-td class="maxlen black-link"><a :href="'/#/grade/'+item.sid">{{item.pn}}</a></mu-td>
          <mu-td class="maxlen black-link"><a :href="'/#/team/'+item.csid">{{item.cn || '---'}}</a></mu-td>
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
        '5星', '4星', '3星', '2星', '1星'
      ]
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
    loadMore () {
      this.getData(++this.page)
    },
    getData (p) {
      this.loading = true
      API.getFundGrades('', '', 0, -1, -1, -1, -1, -1, false, p, 20, '_togetherRating', d => {
        if (d.code === 200 && d.results && d.results.length > 0) {
          this.list = this.list.concat(d.results)
        } else {
          this.list.push({t: '- END -'})
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
