<template>
  <div class="singer" ref="singer">
    <list-view :data="singerList" ref="list" @select="selectSinger"></list-view>
    <router-view></router-view>
  </div>
</template>

<script>
import { getSingerList } from "../../api/singer.js";
import { ERR_OK } from "../../api/config.js";
import Scroll from "../../base/scroll/Scroll.vue";
import ListView from "../../base/listview/ListView.vue";
import { mapMutations } from "vuex";

export default {
  name: "Singer",
  components: {
    Scroll,
    ListView
  },
  data() {
    return {
      singerList: []
    };
  },
  methods: {
    _getSingerList() {
      getSingerList().then(res => {
        if (res.code === ERR_OK) {
          this.singerList = res.singerList.data.singerlist;
        }
      });
    },
    selectSinger(item) {
      // 或者this.$router.push({ name: "singer", params: { id: item.singer_id }})
      this.$router.push({
        path: `/singer/${item.singer_mid}`
      });
      this.setSinger(item);
    },
    ...mapMutations("singer", {
      setSinger: "SET_SINGER"
    })
  },
  created() {
    this._getSingerList();
  }
};
</script>

<style lang="stylus" scoped>
 .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
