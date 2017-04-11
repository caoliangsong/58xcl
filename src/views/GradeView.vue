<template>
<div class="">
  <global-header></global-header>
  <global-footer></global-footer>
    <mu-card>
    <mu-card-title title="山东信托-尊岳进取3号证券投资集" subTitle=""/>
    <mu-card-text>
        <p>备案证号：P585599</p>
        <p>核心人物：张三</p>
        <p>产品总数：20</p>
        <p>成立日期：2012-05-06</p>
        <p>所在地区：---</p>
    </mu-card-text>
    </mu-card>

    <mu-card>
    <mu-card-header title="公司简介" subTitle="">
    </mu-card-header>
    <mu-card-text>
        散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
        调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
        似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
        找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
    </mu-card-text>
    <mu-card-header title="投资理念" subTitle="">
    </mu-card-header>
    <mu-card-text>
        散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
        调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
        似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
        找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
    </mu-card-text>
    </mu-card>
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
      loading: false
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      var _this = this
      _this.loading = true
      API.SiMuWangCompanyByCompanySID(_this.$route.params.id, function (d) {
        if (d.code === 200 && d.results && d.results.length > 0) {
          console.log(d)
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
