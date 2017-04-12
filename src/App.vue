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
#header,#footer{
  position: absolute;
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

.container{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  height: auto;
  -webkit-overflow-scrolling: touch;
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
.infinite-container, .wrapper{
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 50px;
  overflow-y: scroll;
  height: auto;
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
a.green{
  color:green;
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
.mt20{
  margin-top: 20px;
}
.t3{
  color: #999;
}
</style>

