<template>
<div class="container">
  <global-header :title="title"></global-header>
  <global-footer></global-footer>
  <div class="infinite-container">
  <div class="input-wrapper">
    <br/>
  <mu-text-field hintText="手机/邮箱" type="text" icon="person" style="width:100%"/>
  <mu-text-field hintText="密码" type="password" icon="lock_outline" style="width:100%"/><br/><br/>
   <mu-raised-button label="登录" class="demo-raised-button" primary  fullWidth/><br/><br/>
    <mu-flat-button label="没有帐号？请注册" primary class="fr" @click="register"/>
  </div>
  </div>
  </div>
</template>

<script>
import GlobalFooter from '../components/Footer.vue'
import GlobalHeader from '../components/Header.vue'
export default {
  data () {
    return {
      title: '登录',
      list: []
    }
  },
  methods: {
    register () {
      this.$router.push('/register')
    }
  },
  components: {
    GlobalFooter,
    GlobalHeader
  }
}
</script>
