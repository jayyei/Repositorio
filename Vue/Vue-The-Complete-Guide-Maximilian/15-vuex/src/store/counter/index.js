import counterMutations from './mutations';
import counterActions from './actions';
import counterGetters from './getters';

export default {
  namespaced: true,
  // The state is local for every module, even in context
  state() {
    return {
      counter: 0
    }
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters
}