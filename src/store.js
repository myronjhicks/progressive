import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layout: 'public-layout',
    show_modal: false
  },
  mutations: {
    SET_LAYOUT(state, payload) {
      state.layout = payload
    },
    TOGGLE_MODAL(state) {
      state.show_modal = !state.show_modal
      if(state.show_modal) {
        document.body.classList.add('overflow-hidden');
      }else{
        document.body.classList.remove('overflow-hidden');
      }
    },
  },
  getters: {
    layout(state) {
      return state.layout
    }
  },
  actions: {
    
  }
})
