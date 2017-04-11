<template>
  <div id="app" class="container">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="less">
#app {
  #header,#footer{
    position: fixed;
    left: 0;
    right: 0;
    z-index: 999;
    height: 50px;
  }
  #header{
    top: 0;
  }
  #footer{
    bottom: 0;
  }
}
.container{
  position: fixed;
  overflow: scroll;
  top: 50px;
  bottom: 50px;
  width: 100%;
}

.title-1{
  padding: 20px 10px;
  font-size: 1.2em;
}
.title-2{
  font-size: 1.5em;
  color: #333;
  font-weight: normal;
  margin: 10px;
}
.newsDesc{
  text-align: left;
  padding: 10px 16px;
  line-height: 2;
  img{
    max-width: 90% !important;
  }
}
.center{
  text-align: center;
}
.infinite-container{
  height: 600px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.maxlen{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.black-link{
  a{
    color:#333;
  }
}
.f14{
  font-size: 14px!important;
}
.fr{
  float: right;
}
.input-wrapper{
  width: 90%;
  margin: 10px auto;
}
</style>

