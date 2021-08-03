export default {
  testAuth(state) {
    // state, getters, rootState, rootGetters
    // The way of obtain state and getters globaly is with rootGetters and rootState
    return state.isLoggedIn
  },
  finalCounter(state) {
    return state.counter * 1;
  },
  normalizedCounter(_, getters) {
    const finalCounter = getters.finalCounter;
    if(finalCounter < 0) {
      return 0;
    }
    if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  },
}