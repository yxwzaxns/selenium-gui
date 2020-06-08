<template>
  <div id="main">
    <div class="menu">
        <div class="item" v-for="item in menus" :key="item.name" @click="goPage(item)">
            {{item.label}}
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        menus: [
          {name: 'list', label: '项目列表'},
          {name: 'new', label: '新建项目'},
          {name: 'settings', label: '系统设置'}
        ]
      }
    },
    methods: {
      goPage (item) {
        this.$router.push(item.name)
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
    // -webkit-app-region: drag;
}
.menu{
    width: 200px;
    background-color: cornflowerblue;
    height: 200px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .item{
        display: flex;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        width: 100%;
        font-size: 18px;
        color: cornsilk;
        &:hover{
            background-color: darkcyan;
            border-radius: 5px;
            color:floralwhite;
            font-size: 20px;
            cursor: pointer;
        }
    }
}
</style>
