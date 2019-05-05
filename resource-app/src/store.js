import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    subscriber: undefined
  },
  mutations: {
    setSubscriber(state, sub) {
      state.subscriber = sub;
    }
  },
  actions: {
    setSubscriber(context, sub) {
      context.commit("setSubscriber", sub);
    }
  }
});
