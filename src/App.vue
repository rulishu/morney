<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  /*加的话只影响当前组件，不加scope的话,影响整个页面*/
  @import "~@/assets/style/helper.scss";
  @import "~@/assets/style/reset.scss";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
  line-height: 1.5;
  font-size: 16px;
  font-family: $font-hei;
}
</style>

