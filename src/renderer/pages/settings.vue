<template>
  <div id="main" @click="openDev">
    <div class="nav">
      <div>系统设置</div>
      <div v-for="nav in navList" :key="nav.no" @click="tabNo=nav.no">
        {{nav.name}}
      </div>
      <div class="back">返回</div>
    </div>
    <div>
      <system-information v-if="tabNo==1"></system-information>
    </div>
  </div>
</template>

<script>
  import SystemInformation from '../components/SystemInformation'
  export default {
    name: 'settings',
    components: { SystemInformation },
    data () {
      return {
        navList: [
          {
            name: '系统状态',
            no: 1
          },
          {
            name: '任务配置',
            no: 2
          },
          {
            name: '基础配置',
            no: 3
          },
          {
            name: '代理配置',
            no: 4
          },
          {
            name: '数据库配置',
            no: 5
          }
        ],
        tabNo: 0
      }
    },
    created () {
      // console.log(require('electron').remote)
    },
    methods: {
      goPage (item) {
        this.$router.push(item.name)
      },
      back () {
        this.$router.push('home')
      },
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

<style scoped lang="scss">
#main{
  height: 100%;
  display: flex;
  flex-direction: row;
  .nav{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    div{
      cursor: pointer;
      background-color: antiquewhite;
      width: fit-content;
    }
    &:hover{
      background-color: cadetblue;
    }
  }
}
</style>
