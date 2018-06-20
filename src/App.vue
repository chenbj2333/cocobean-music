<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>
<script>
import MHeader from "./components/mHeader/MHeader";
import Tab from "./views/tab/Tab";
import Player from "./components/player/Player";

export default {
  name: "App",
  components: {
    MHeader,
    Tab,
    Player
  }
};
</script>
