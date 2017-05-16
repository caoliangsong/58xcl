<template>
<div>
  <div class="search-bar">
    <input class="search-text" type="text" placeholder="搜索私募基金" @focus="handleFocus" @blur="handleBlur" @input="handleInput" v-model="searchText"/>
    <mu-icon value="search" class="search-icon" />
    <div class="search-list" v-show="showList">
        <router-link :to="'/grade/'+item.url" class="maxlen" v-for="item in dataSource" :keys="item._id">{{item.v}}</router-link>
    </div>
  </div>
   <div class="search-cover" v-show="!showIcon"></div>
</div>
</template>
<script>
import API from '../store/api'
export default {
  name: 'search-bar',
  data () {
    return {
      showIcon: true,
      showList: false,
      searchText: '',
      dataSource: []
    }
  },
  methods: {
    handleFocus () {
      this.showIcon = false
    },
    handleBlur () {
      this.showIcon = true
      setTimeout(() => {
        this.showList = false
      }, 100)
    },
    go (url) {
      this.$router.push('/grade/' + url)
    },
    handleInput () {
      this.showList = true
      this.dataSource = []
      API.fullTextSearch(this.searchText, (d) => {
        if (d.results && d.results.length) {
          d.results.forEach((item, index) => {
            this.dataSource.push({
              v: item.k,
              url: item.lp
            })
          })
        }
      })
    }
  }
}
</script>
<style lang="less">
  .search-bar {
    background: rgba(255, 255, 255, .9);
    height:40px;
    position: absolute;
    z-index: 999;
    top: 10px;
    left:14px;
    right: 14px;
    padding:6px 14px;
    border-radius:20px;
    .search-text{
      text-align: center;
      width: 100%;
      height: 100%;
      border: none;
      background: none;
      &:focus{
        outline:none; 
      }
    }
    .search-icon{
      color: #999;
      position: absolute;
      top:10px;
      left: 28%;
    }
    .search-list {
      color: #ddd;
      padding: 10px 0;
      a{
        color: #ddd;
        display: block;
        line-height: 40px;
        border-bottom:1px solid #666;
      }
    }
  }
  .search-cover{
      position: fixed;
      background: rgba(0,0,0,.8);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index:12
    }
</style>
