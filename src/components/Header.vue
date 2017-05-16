<template>
<div id="header">
  <mu-appbar titleClass="center">
      <div slot="default">{{title}}</div>
      <mu-icon-button icon="arrow_back" slot="left" @click="back" v-if="showBackBtn" style="position:absolute;"/>
  </mu-appbar>
</div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '新策略'
    }
  },
  data () {
    return {
      dataSource: [],
      links: [],
      open: false,
      value: '',
      showBackBtn: ['Index', 'Grade', 'News', 'Exponent'].indexOf(this.$route.name) === -1
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>
