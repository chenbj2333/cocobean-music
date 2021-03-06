import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import VueLazyload from "vue-lazyload";

import fastclick from "fastclick";

import "./common/stylus/index.styl";

fastclick.attach(document.body);

Vue.config.productionTip = false;
Vue.use(VueLazyload, {
  loading: require("./assets/images/default.png")
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
