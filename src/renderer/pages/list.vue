<template>
  <div id="main">
    <div class="nav">
      <div class="item">
        <div>任务列表</div>
      </div>
      <div class="item" :class="{active:tabNo==nav.no}" v-for="nav in navList" :key="nav.no" @click="tabNo=nav.no">
        <div>{{nav.name}}</div>
      </div>
      <div class="back item" @click="back">
        <div>返回</div>
      </div>
    </div>
    <div class="content">
    </div>
  </div>
</template>

<script>
  const {getTaskList} = require('@/api')
  export default {
    name: 'list',
    data () {
      return {
        navList: [
          {
            name: '开始',
            no: 1
          },
          {
            name: '重置',
            no: 2
          }
        ],
        tabNo: 1
      }
    },
    created () {
      getTaskList().then(res => {
        console.log(res)
      })
    },
    methods: {
      goPage (item) {
        this.$router.push(item.name)
      },
      back () {
        this.$router.push('home')
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
    overflow: hidden;
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
      // line-height: 10%;
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
    border: cyan 1px solid;
    margin: 20px 0 20px 10px;
    border-radius: 5px;
    background-color: darkcyan;
    width: 80%;
    opacity: 0.9;
    padding: 10px;
  }
}
</style>
