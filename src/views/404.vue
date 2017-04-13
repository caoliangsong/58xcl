<template>
<div class="container">
  <global-header :title="title"></global-header>
  <global-footer></global-footer>
  <div class="infinite-container">
<iframe scrolling='no' frameborder='0' src='http://yibo.iyiyun.com/Home/Distribute/ad404/key/1256135' width='360' height='600' style='display:block;'></iframe>
  </div>
  </div>
</template>

<script>
import GlobalFooter from '../components/Footer.vue'
import GlobalHeader from '../components/Header.vue'
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
  },
  components: {
    GlobalFooter,
    GlobalHeader
  }
}
</script>

