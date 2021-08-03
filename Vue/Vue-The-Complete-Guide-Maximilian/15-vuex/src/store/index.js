import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';
import counterModule from './counter/index.js';

const store = createStore({
  // by default modules merged into a store are in the same level
  modules: {
    numbers: counterModule
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
  state() {
    return {
      counter: 0,
      isLoggedIn: false
    }
  }
})

export default store