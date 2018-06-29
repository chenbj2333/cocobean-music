import Vue from "vue";
import Router from "vue-router";
import Rank from "../views/rank/Rank.vue";
import Recommend from "../views/recommend/Recommend.vue";
import Search from "../views/search/Search.vue";
import Singer from "../views/singer/Singer.vue";
import SingerDetail from "../views/singer/singerDetail/SingDetail.vue";
import Disc from "../components/disc/Disc.vue";

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
      component: Recommend,
      children: [
        {
          path: ":id",
          component: Disc
        }
      ]
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
      component: Singer,
      children: [
        {
          path: ":id",
          component: SingerDetail
        }
      ]
    }
  ]
});
