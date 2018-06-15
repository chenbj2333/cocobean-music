<template>
  <transition name="slide">
    <music-list
      :title="title"
      :bg-image="bgImage"
      :songs="songs">
    </music-list>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import { getSingerDetail } from "../../../api/singer.js";
import { ERR_OK } from "../../../api/config.js";
import { createSong } from "../../../common/js/song.js";
import MusicList from "../../../components/musicList/MusicList";

export default {
  name: "SingerDetail",
  components: {
    MusicList
  },
  data() {
    return {
      songs: []
    };
  },
  computed: {
    title() {
      return this.singer.singer_name;
    },
    bgImage() {
      return this.singer.singer_pic;
    },
    ...mapGetters("singer", {
      singer: "singer"
    })
  },
  methods: {
    _getDetail() {
      if (!this.singer.singer_mid) {
        this.$router.push("/singer");
      }
      getSingerDetail(this.singer.singer_mid).then(res => {
        if (res.code === ERR_OK) {
          this.songs = this._normalizeSongs(res.data.list);
        }
      });
    },
    _normalizeSongs(list) {
      let ret = [];
      list.forEach(item => {
        let { musicData } = item;
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData));
        }
      });
      return ret;
    }
  },
  mounted() {
    this._getDetail();
  }
};
</script>
<style lang="stylus" scoped>
  @import "../../../common/stylus/variable"
  .singer-detail
    position fixed
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background $color-background
  
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
