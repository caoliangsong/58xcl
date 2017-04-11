<template>
<div id="footer">
  <mu-paper>
    <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <mu-bottom-nav-item value="/" title="主页" icon="home"/>
        <mu-bottom-nav-item value="/grade" title="评级" icon="thumb_up"/>
        <mu-bottom-nav-item value="/news" title="资讯" icon="receipt"/>
        <mu-bottom-nav-item value="/account" title="我的" icon="account_box"/>
    </mu-bottom-nav>
  </mu-paper>
</div>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: this.$route.path,
      bottomNavColor: 'home'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
      this.$router.push(val)
    }
  }
}
</script>
