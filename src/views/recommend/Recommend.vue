<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <div v-if="recommendSlider.length" class="slider-wrapper" ref="sliderWrapper">
          <slider>
            <div v-for="item of recommendSlider" :key="item.id">
              <a :href="item.linkUrl">
                <img class="needsclick" :src="item.picUrl" @load="loadImage">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-dt">
          <h1 class="list-title">电台</h1>
          <div class="list-content">
            <div v-for="item of recommendList" :key="item.radioid" class="item">
              <div class="icon">
                <img v-lazy="item.picUrl" alt="">
              </div>
              <div class="text">
                {{item.Ftitle}}
              </div>
            </div>
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="list-hot-title">热门歌单推荐</h1>
          <ul class="ul-content">
            <li @click="selectItem(item)" v-for="item in discList" class="item" :key="item.id">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.imgurl">
              </div>
              <div class="text">
                <h2 class="name">{{item.name}}</h2>
                <p class="desc">{{item.dissname}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import { getRecommend, getDiscList } from "../../api/recommend.js";
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
      checkLoaded: false,
      recommendSlider: [],
      recommendList: [],
      discList: []
    };
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommendSlider = res.data.slider;
          this.recommendList = res.data.radioList;
        }
      });
    },
    _getDiscList() {
      getDiscList().then((res) => {
        this.discList = res.data;
      }).catch((error) => {
        console.log(error);
      });
    },
    loadImage() {
      if (!this.checkLoaded) {
        this.$refs.scroll.refresh();
        this.checkLoaded = true;
      }
    }
  },
  mounted() {
    this._getRecommend();
    this._getDiscList();
  }
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable';

.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .recommend-dt {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }

      .list-content {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;

        .item {
          width: 46%;
          box-sizing: border-box;
          align-items: center;

          .icon {
            width: 100%;

            img {
              width: 100%;
            }
          }

          .text {
            text-align: center;
            font-size: $font-size-medium;
            color: $color-text;
          }
        }
      }
    }
    .recommend-list {
      .list-hot-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }
      .ul-content {
        .item {
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon {
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          }
          .text {
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name {
              margin-bottom: 10px
              color: $color-text
            }
            .desc {
              color: $color-text-d
            }
          }
        }
      }
    }

    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
