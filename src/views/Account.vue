<template>
<div class="infinite-container">
  <global-header></global-header>
  <global-footer></global-footer>
<mu-card style="box-shadow:0 1px 1px rgba(0,0,0,.117647);">
  <mu-card-header title="Seeking" subTitle="最后登录: 2017-04-12">
    <mu-avatar src="/static/logo.png" slot="avatar"/>
  </mu-card-header>
</mu-card>
  <mu-menu class="demo-menu-divider">
    <mu-menu-item title="我的收藏" leftIcon="grade"/>
    <mu-divider />
    <mu-menu-item title="修改昵称" leftIcon="send"/>
    <mu-divider />
    <mu-menu-item title="修改密码" leftIcon="drafts"/>
    <mu-divider />
    <mu-menu-item title="帮助" leftIcon="help_outline"/>
    <mu-divider />
    <mu-menu-item title="退出" leftIcon="power_settings_new"/>
  </mu-menu>
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
