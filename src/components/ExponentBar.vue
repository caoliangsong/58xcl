<template>
  <div class="mu-exponenetbar fr"
       :class="[theme]">
    <div class="mu-exponenetbar-value">
      {{data.v}}
    </div>
    <div class="mu-exponenetbar-item">
      <mu-icon :value="'arrow_'+direc+'ward'"
               :size="16" style="vertical-align:middle;"/> {{data.addtion}} | {{data.pencent}}%
    </div>
  </div>
</template>
<script>
export default {
  name: 'exponent-bar',
  data () {
    return {
    }
  },
  computed: {
    direc () {
      return this.data.addtion >= 0 ? 'up' : 'down'
    },
    theme () {
      return this.data.addtion >= 0 ? 'red' : 'green'
    }
  },
  props: {
    data: {
      type: Object,
      default: function () {
        return {
          addtion: 0,
          pencent: 0,
          v: 0
        }
      }
    }
  }
}
</script>
<style lang="less">
.mu-exponenetbar {
  width: 170px;
  border-radius: 4px;
  line-height: 20px;
  margin: 10px;
  .mu-exponenetbar-item{
    padding-top:2px; 
  }
  &.red {
    border: 1px solid #ff3d5d;
    color: #ff3d5d;
    .mu-exponenetbar-value {
      background: #ff3d5d;
      color: #fff;
      padding: 2px 6px;
      float:left
    }
  }
  &.green {
    border: 1px solid green;
    color: green;
    .mu-exponenetbar-value {
      background: green;
      color: #fff;
      padding: 2px 6px;
      float:left
    }
  }
}
</style>
