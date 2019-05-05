import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PrettyCheckbox from "pretty-checkbox-vue";

Vue.config.productionTip = false;

Vue.use(PrettyCheckbox);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
