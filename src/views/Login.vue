<template>
<div class="">
  <global-header :title="title"></global-header>
  <global-footer></global-footer>
  <br />
  <div class="input-wrapper">
  <mu-text-field hintText="手机/邮箱" type="text" icon="phone" style="width:100%"/><br/>
  <mu-text-field hintText="密码" type="password" icon="email" style="width:100%"/><br/><br/>
   <mu-raised-button label="登录" class="demo-raised-button" primary  fullWidth/>
    <mu-flat-button label="没有帐号？请注册" primary class="fr" @click="register"/>

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
