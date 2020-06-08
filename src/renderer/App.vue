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

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
#app{
  -webkit-app-region: drag;
  font-family: 'Source Sans Pro', sans-serif;
  height: 100vh;
  background-color: #007acc;
  opacity: 0.9;
}
</style>
