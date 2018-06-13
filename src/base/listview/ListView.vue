<template>
  <scroll ref="scroll" class="listview" :data="data">
    <ul class="list-group">
      <h2 class="list-group-title">热门</h2>
      <li @click="selectItem(item)" v-for="item in data" class="list-group-item" :key="item.singer_id">
        <div class="icon">
          <img width="60" height="60" v-lazy="item.singer_pic">
        </div>
        <div class="text">
          <h2 class="name" v-html="item.singer_name"></h2>
        </div>
      </li>
    </ul>
    <div class="loading-container" v-show="!data.length || data.length === 0">
      <loading></loading>
    </div>
  </scroll>
</template>

<script>
import Scroll from "../scroll/Scroll.vue";
import Loading from "../loading/Loading.vue";

export default {
  name: "ListView",
  components: {
    Scroll,
    Loading
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  methods: {
    selectItem(item) {
      this.$emit('select', item)
    },
  }
};
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/variable"
  .listview
    position: relative
    width: 100%
    height: 100%
    overflow: hidden
    background: $color-background
    .list-group-title
      height: 30px
      line-height: 30px
      padding-left: 20px
      font-size: $font-size-small
      color: $color-text-l
      background: $color-highlight-background
    .list-group
      .list-group-item
        display: flex
        box-sizing: border-box
        align-items: center
        padding: 20px 20px 0 20px
        &:last-child
          padding-bottom 20px
        .icon
          flex: 0 0 60px
          width: 60px
          height 60px
          margin-right: 20px
          overflow hidden
          border-radius 50%
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
