import Vue from "vue";
import Vuex from "vuex";
import singer from "./modules/singer";
import playList from "./modules/playList";
import createLogger from "vuex/dist/logger";

Vue.use(Vuex);

// 调试时的debug
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    singer,
    playList
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
