import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:'开始答题',
    topic: [],
    explain: [],
    answer: [],
    question: [],
    options: [],
    count: 0,
    condition: false
  },
  mutations: {
    int(state){

    },
    
  },
  actions: {
  },
  modules: {
  }
})
