<template>
  <div id="main" :style="bgStyle">
    <div class="menu">
        <div class="item" 
            v-for="item in menus" 
            :key="item.name"
            @mouseenter="changeBg(item)"
            @mouseleave="changeBg(null)"
            @click="goPage(item)">
            {{item.label}}
        </div>
    </div>
  </div>
</template>

<script>
  import {appQuit} from '@/api'
  import {SendNotice} from '@/utils'
  export default {
    name: 'home',
    data () {
      return {
        menus: [
          {name: 'list', label: '项目', no: 1},
          {name: 'create', label: '创建', no: 2},
          {name: 'settings', label: '设置', no: 3},
          {name: 'quit', label: '退出', no: 4}
        ],
        bgStyle: {
          backgroundPosition: '50% 100%'
        }
      }
    },
    methods: {
      goPage (item) {
        if (item.name === 'quit') return this.quit()
        this.$router.push(item.name)
      },
      changeBg (item) {
        if (item) {
          const yv = (item.no - 1) / 4 * 100
          this.bgStyle = {
            backgroundPosition: `50% ${yv}%`
          }
        } else {
          this.bgStyle = {
            backgroundPosition: '50% 100%'
          }
        }
      },
      quit () {
        // 通知系统保存任务状态准备退出程序
        SendNotice({body: '准备关闭程序，保存任务进度', showTime: 2000})
        appQuit().then(res => {
          if (res) {
            require('electron').remote.app.quit()
          } else {
            SendNotice({body: '关闭失败，重试'})
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
#main{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url('../assets/main.png');
    background-position: center;
    background-repeat: no-repeat;
    transition: background-position 1000ms linear 0ms;
}
.menu{
    -webkit-app-region: no-drag;
    width: 200px;
    height: 200px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
    .item{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #00ab6f;
        flex: 1;
        width: 100%;
        font-size: 18px;
        color: #0c0901;
        border-bottom: 1px solid rgb(218, 117, 117);
        &:hover{
            background-color: darkcyan;
            border-radius: 5px;
            color:floralwhite;
            font-size: 22px;
            cursor: pointer;
        }
        &:last-child{
            border:none;
        }
    }
}
</style>
