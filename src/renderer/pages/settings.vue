<template>
  <div id="main" :style="bgStyle">
    <div class="nav">
      <div class="item">
        <div>系统设置</div>
      </div>
      <div class="item" 
          :class="{active:tabNo==nav.no}" 
          v-for="nav in navList" 
          :key="nav.no" 
          @mouseenter="changeTab(nav)">
        <div>{{nav.name}}</div>
      </div>
      <div class="back item" @click="back">
        <div>返回</div>
      </div>
    </div>
    <div class="content">
      <system-information v-if="tabNo==1"></system-information>
      <base-settings v-if="tabNo==2"></base-settings>
    </div>
  </div>
</template>

<script>
  import SystemInformation from '../components/SystemInformation'
  import BaseSettings from '../components/BaseSettings'
  export default {
    name: 'settings',
    components: { SystemInformation, BaseSettings },
    data () {
      return {
        navList: [
          {
            name: '系统状态',
            no: 1
          },
          {
            name: '基础设置',
            no: 2
          },
          {
            name: '任务',
            no: 3
          },
          {
            name: '代理',
            no: 4
          },
          {
            name: '数据库',
            no: 5
          }
        ],
        tabNo: 1,
        bgStyle: {
          backgroundPosition: '50% 0%'
        }
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
      changeTab (nav) {
        this.tabNo = nav.no
        this.changeBg(nav.no)
      },
      changeBg (i) {
        const yv = (i - 1) / this.navList.length * 100
        this.bgStyle = {
          backgroundPosition: `50% ${yv}%`
        }
      }
    }
  }
</script>

<style scoped lang="scss">
#main{
  height: 100%;
  display: flex;
  padding-right: 15px;
  flex-direction: row;
  justify-content: space-between;
  background-image: url('../assets/settings.png');
  transition: background-position 500ms linear 0ms;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0%;
  .nav{
    -webkit-app-region: no-drag;
    // overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .item{
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background-color: #fe7d38;
      height: 10%;
      padding: 10px;
      border-radius: 0 5px 5px 0;
      width: fit-content;
      text-align: center;
      font-size: 18px;
      color: aliceblue;
      background-color: rgba(245, 173, 79, 0.7);
      &.active{
        background-color: #6c8dd5;
        color: #e7eb1d;
        font-size: 20px;
        position: relative;
        left: 10px;
        z-index: 99;
        border-radius: 5px;
        transform:rotate(45deg);
      }
    }
  }
  .content{
    -webkit-app-region: no-drag;
    margin: 20px 0 20px 10px;
    border-radius: 5px;
    background-color: darkcyan;
    width: 80%;
    background-color: rgba(49, 51, 49, 0.8);
    padding: 10px;
  }
}
</style>
