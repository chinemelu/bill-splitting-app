import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import bills from './modules/bills';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl: 'https://billsplitapi.herokuapp.com/bills',
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    bills,
  },
});
