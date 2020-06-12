<template>
  <div id="app" @dblclick="openDev">
    <!-- <transition name="fade">
      <router-view></router-view>
    </transition> -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'selenium-gui',
    methods: {
      openDev () {
        const webContents = require('electron').remote.getCurrentWebContents()
        if (webContents.isDevToolsOpened()) {
          webContents.closeDevTools()
        } else {
          webContents.openDevTools()
        }
      }
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
#app{
  -webkit-app-region: drag;
  user-select:none;
  font-family: 'Source Sans Pro', sans-serif;
  height: 100vh;
  background-color: #fbe80b;
  opacity: 0.9;
}
</style>
