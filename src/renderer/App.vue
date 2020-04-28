<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'selenium-gui'
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    margin: 0;
    padding: 0;
  }
  #app {
    /* background-color: aliceblue; */
  }

  body { font-family: 'Source Sans Pro', sans-serif; }
</style>
