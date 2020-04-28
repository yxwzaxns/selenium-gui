<template>
  <div id="main">
    <div class="header">
      <div class="back" @click="back">返回</div>
      <div>系统设置</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'settings',
    data () {
      return {
      }
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
.back{
  cursor: pointer;
  background-color:darkcyan;
  margin: 10px;
  padding: 5px;
  width: 50px;
  text-align: center;
  font-size: 14px;
  border-radius: 2px;
  color:whitesmoke;
  &:hover{
    background-color: cadetblue;
  }
}
#main{
    -webkit-app-region: drag;
    .header{
      display: flex;
      flex-direction: row;
    }
}
</style>
