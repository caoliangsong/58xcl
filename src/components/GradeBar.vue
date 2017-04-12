<template>
<div class="mu-grade-bar">
  <div class="grade-bar-text">{{title}}</div>
  <div :class="['grade-bar-progress',theme]">
      <div :style="'width:' + percent + '%'"></div>
  </div>
</div>
</template>
<script>
export default {
  name: 'grade-bar',
  props: {
    title: {
      type: String,
      default: 'title'
    },
    theme: {
      type: String,
      default: 'theme-black'
    },
    percent: {
      type: [Number, String],
      default: 0
    }
  },
  methods: {

  }
}
</script>
<style lang="less">
@orage: #ff7245;
@blue: #6DA4FF;
@green:#11E2BB;
@yellow:#FFD200;
.mu-grade-bar{
  overflow: hidden;
  margin: 10px 0 0 0;
  display: flex;
  .grade-bar-text{
    color: #666;
    text-align: right;
    width:30%;
    padding-right:10px;
  }
  .grade-bar-progress{
    height: 10px;
    margin-top:6px;
    width:70%;
    background: #ccc;
    >div{
      background: #000;
      height: 10px;
      -webkit-transition: width 1s;
      transition: width 1s;
    }
    &.orange {
      background: lighten(@orage,32%);
      >div{
        background: @orage
      }
    }
    &.green {
      background: lighten(@green,35%);
      >div{
        background: @green
      }
    }
    &.yellow {
      background: lighten(@yellow,35%);
      >div{
        background: @yellow
      }
    }
    &.blue {
      background: lighten(@blue,25%);
      >div{
        background: @blue
      }
    }
  }
}
</style>
