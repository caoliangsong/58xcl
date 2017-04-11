import Vuex from 'vuex'
import Vue from 'vue'
// import API from './api'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    newsLists: [],
    gradeList: [],
    backButton: true
  },
  actions: {
  },
  mutations: {
    disableBackButton (state) {
      state.backButton = false
    }
  }
})

export default store
