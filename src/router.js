import Vue from "vue";
import Router from "vue-router";
import Rank from "./views/rank/Rank.vue";
import Recommend from "./views/recommend/Recommend.vue";
import Search from "./views/search/Search.vue";
import Singer from "./views/singer/Singer.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/recommend"
    },
    {
      path: "/recommend",
      name: "recommend",
      component: Recommend
    },
    {
      path: "/rank",
      name: "rank",
      component: Rank
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/singer",
      name: "singer",
      component: Singer
    }
  ]
});
