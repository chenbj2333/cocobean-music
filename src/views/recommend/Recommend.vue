<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <div v-if="recommendSlider.length" class="slider-wrapper" ref="sliderWrapper">
          <slider>
            <div v-for="item of recommendSlider" :key="item.id">
              <a :href="item.linkUrl">
                <img class="needsclick" :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">电台</h1>
          <div class="list-content">
            <div v-for="item of discList" :key="item.radioid" class="item">
              <div class="icon">
                <img :src="item.picUrl" alt="">
              </div>
              <div class="text">
                {{item.Ftitle}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import { getRecommend } from "../../api/recommend.js";
import { ERR_OK } from "../../api/config.js";
import Slider from "../../base/slider/Slider.vue";
import Scroll from "../../base/scroll/Scroll.vue";

export default {
  name: "Recommend",
  components: {
    Slider,
    Scroll
  },
  data() {
    return {
      recommendSlider: [],
      discList: []
    };
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommendSlider = res.data.slider;
          this.discList = res.data.radioList;
        }
      });
    }
  },
  mounted() {
    this._getRecommend();
  }
};
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .list-content
          display flex
          flex-direction row
          justify-content space-around
          width 100%
          .item
            width 46%
            box-sizing border-box
            align-items center
            .icon
              width 100%
              img
                width 100%
            .text
              text-align center
              font-size: $font-size-medium
              color: $color-text
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
