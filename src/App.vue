<template>
  <div id="app">
    <div class="weui-tab">
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<style lang="less">
@import "../node_modules/font-awesome/less/font-awesome";
@import "../node_modules/weui/src/style/weui";

#app {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
