<template>
  <div id="main" :style="bgStyle">
    <div class="nav">
      <div id="tools">
        <input class="filterInput" type="text" v-model="filterText" @input="filterTask">
      </div>
      <div class="item" :class="{active:tabNo==nav.no}" v-for="nav in navList" :key="nav.no" @click="tabNo=nav.no">
        <div>{{nav.name}}</div>
      </div>
      <div class="back item" @click="back">
        <div>返回</div>
      </div>
    </div>
    <div class="content">
      <div class="taskList" @scroll="changeBg"> 
        <div class="task" v-for="(task,i) in taskList" :key="i">
          <div>#{{task}}</div>
          <div>{{task.name||'null'}}</div>
          <div>{{task.desc||'null'}}</div>
          <div>启动</div>
          <div>配置</div>
          <div>删除</div>
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
        ],
        tabNo: 1,
        oTaskList: [],
        taskList: [],
        bgStyle: {
          backgroundPosition: '50% 0%'
        },
        filterText: ''
      }
    },
    created () {
      this.oTaskList = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6]
      this.taskList = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6]
      getTaskList().then(res => {
        console.log(res)
        this.oTaskList = res
      })
    },
    computed: {
  
    },
    methods: {
      goPage (item) {
        this.$router.push(item.name)
      },
      filterTask () {
        if (!this.filterText) {
          this.taskList = this.oTaskList
          return
        }
        this.taskList = this.oTaskList.filter(e => {
          return e.toString().includes(this.filterText)
        })
      },
      back () {
        this.$router.push('home')
      },
      changeBg (e) {
        const yv = e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight) * 100
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
  flex-direction: row;
  background-image: url('../assets/list.png');
  transition: background-position 500ms linear 0ms;
  background-size: cover;
  background-repeat: no-repeat;
  .nav{
    padding: 20px 0;
    -webkit-app-region: no-drag;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    #tools{
      padding-left: 5px;
      .filterInput{
        width:100px;
        height: 20px;
        padding: 1px;
        background-color: rgba(96, 107, 134, 0.6);
        -webkit-appearance: none;
        outline: none;
      }
    }
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
      background:rgba(156, 167, 149, 0.6);
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
    background:rgba(0,0,0,0.5);
    overflow: hidden;
    .taskList{
      width: 103%;
      height: 100%;
      overflow-y: scroll;
      .task{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 1px;
        height: 20%;
        div{
          margin-left: 10px;
        }
        &:last-child{
          margin-bottom: 0px;
        }
        &:nth-child(2n){
          background: rgba($color: #676c72, $alpha: .6);
          color: #fff;
        }
        &:nth-child(2n+1){
          background: rgba($color: #5d6061, $alpha: .6);
          color: #fff;
        }
      }
    }
  }
}
</style>
