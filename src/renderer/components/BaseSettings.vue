<template>
  <div class="main">
    <div class="title">Information</div>
    <div class="content">
      <div class="items">
        <div class="item">
          <div class="name">数据根目录:</div>
          <div class="value">
            <input type="text" :v-model="settings.dataPath">
          </div>
        </div>
      </div>
      <div class="items">
      </div>
    </div>
  </div>
</template>

<script>
  const {getBaseSettings} = require('@/api')
  export default {
    data () {
      return {
        settings: {
          dataPath: ''
        }
      }
    },
    created () {
      getBaseSettings().then(settings => {
        this.settings = settings
      })
    }
  }
</script>

<style scoped lang="scss">
  .main{
    color: honeydew;
    font-size: 18px;
    height: 100%;
    overflow: hidden;
  }
  .title {
    font-size: 18px;
    text-align: center;
    font-weight: initial;
    letter-spacing: .25px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .content{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .items { margin-top: 8px; }

  .item {
    display: flex;
    margin-bottom: 6px;
    input{
      width: 150px;
      background-color: rgba(117, 117, 138, 0.6);
    }
    .name {
      margin-right: 6px;
    }
    .value {
      color: #143457;
      font-weight: bold;
    }
  }
</style>
