<template>
  <div class="main">
    <div class="title">Information</div>
    <div class="content">
      <div class="items">
        <div class="item">
          <div class="name">Path:</div>
          <div class="value">{{ path }}</div>
        </div>
        <div class="item">
          <div class="name">Route Name:</div>
          <div class="value">{{ name }}</div>
        </div>
        <div class="item">
          <div class="name">Vue.js:</div>
          <div class="value">{{ vue }}</div>
        </div>
        <div class="item">
          <div class="name">Electron:</div>
          <div class="value">{{ electron }}</div>
        </div>
        <div class="item">
          <div class="name">Node:</div>
          <div class="value">{{ node }}</div>
        </div>
        <div class="item">
          <div class="name">Platform:</div>
          <div class="value">{{ platform }}</div>
        </div>
      </div>
      <div class="items">
        <div class="item" v-for="(v,k) in sys" :key="k">
          <div class="name">{{k}}:</div>
          <div class="value">{{ v }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const {getSysInfo} = require('@/api')
  export default {
    data () {
      return {
        electron: process.versions.electron,
        name: this.$route.name,
        node: process.versions.node,
        path: this.$route.path,
        platform: require('os').platform(),
        vue: require('vue/package.json').version,
        sys: {
          cpu: 0,
          mem: 0,
          storage: 0
        }
      }
    },
    created () {
      getSysInfo().then(sys => {
        const oneG = 1024 * 1024 * 1024
        this.sys.cpu = `${sys.cpu.manufacturer} ${sys.cpu.brand}`
        this.sys.mem = `${Math.floor(sys.mem.total / oneG)} G`
        const totalStorage = Math.floor(sys.storage[0].size / oneG)
        // const usedStorage = Math.floor(a.storage[0].used / oneG)
        this.sys.storage = `${totalStorage} G`
      })
    }
  }
</script>

<style scoped>
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
  }

  .item .name {
    margin-right: 6px;
  }

  .item .value {
    color: #90a560;
    font-weight: bold;
  }
</style>
