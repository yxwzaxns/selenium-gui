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
      <div class="taskList"> 
        <div class="task" v-for="(task,i) in taskList" :key="i">
          <div>#{{i+1}}</div>
          <div>{{task.name||'null'}}</div>
          <div>配置</div>
        </div>
      </div>
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
        tabNo: 1,
        taskList: [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6]
      }
    },
    created () {
      getTaskList().then(res => {
        console.log(res)
        this.taskList = res
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
    -webkit-app-region: no-drag;
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
    -webkit-app-region: no-drag;
    // border: cyan 1px solid;
    margin: 20px 0 20px 10px;
    border-radius: 5px;
    background-color: darkcyan;
    width: 80%;
    opacity: 0.9;
    // padding: 10px 0;
    overflow: hidden;
    .taskList{
      width: 103%;
      height: 100%;
      background-image: url('../assets/list.png');
      background-repeat: no-repeat;
      background-position: center;
      overflow-y: scroll;
      // padding-right: 25px; /* Increase/decrease this value for cross-browser compatibility */
      // box-sizing: content-box;
      .task{
        background-color: #e3eb72;
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-bottom: 1px;
        height: 20%;
        opacity: 0.4;
        // border-radius: 5px;
        color: #9a98a3;
        div{
          margin-left: 10px;
          opacity: 1;
        }
        &:last-child{
          margin-bottom: 0px;
        }
        &:nth-child(2n){
          background-color: #3079aa;
          opacity: 0.8;
          color: #fff;
        }
        &:nth-child(2n+1){
          color: #000;
        }
      }
    }
  }
}
</style>
