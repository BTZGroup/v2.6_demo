<template>
  <div>
    <h1>socket</h1>
    <!-- <el-button @click="connect">连接</el-button> -->
    <el-button @click="send">发送</el-button>
    <el-button @click="stop">断开</el-button>
  </div>
</template>
<script>

export default {
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    send() {
      let data = { name: 'haha', number: Math.random(10) }
      Socket.send(JSON.stringify(data))
    },
    stop() {
      console.log("前端主动关闭通道！.");
      Socket.stop()
    },
  }
}
</script>

<style></style>