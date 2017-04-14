<template>
<div class="container">
    <global-header></global-header>
    <global-footer></global-footer>
    <div class="infinite-container">
    <mu-drawer :open="true" :right="true" :docked="false" ></mu-drawer>
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
