/**
 * Created by richard0918 on 2017/7/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user';
import getters from './getters';


Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    user
  },
  getters
})
