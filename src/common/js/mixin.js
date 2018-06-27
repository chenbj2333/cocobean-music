import { mapGetters } from "vuex";

export const playlistMixin = {
  computed: {
    ...mapGetters("playList", {
      playList: "playList"
    })
  },
  mounted() {
    this.handlePlaylist(this.playList);
  },
  activated() {
    this.handlePlaylist(this.playList);
  },
  watch: {
    playlist(newVal) {
      this.handlePlaylist(newVal);
    }
  },
  methods: {
    handlePlaylist() {
      throw new Error("component must implement hanldPlaylist method");
    }
  }
};
