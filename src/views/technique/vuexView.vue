<template>
  <div>
    <h1>Vuex</h1>
    <div>
      <h3>study-------------store</h3>
      <el-button @click="test">Test</el-button>
      <!-- <div>name: {{ name }}</div> -->
      <div>$store.state.study: {{ $store.state.study.name }}</div>
      <div>getName: {{ getName }}</div>
      <div>this.$store.getters.getMessage: {{ $store.getters.getMessage }}</div>
      <div>getMessage: {{ getMessage }}</div>
      <!-- <div>myGetStr: {{ myGetStr }}</div> -->
      <div>{{ number }}</div>
      <son></son>
    </div>
    <div>
      <h3>user-------------------store</h3>
      <div>{{ user_Number }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import son from "./components/son.vue"
export default {
  data() {
    return {

    }
  },
  components: { son },
  mounted() {
    console.log("这是获取store中的数据", this.$store.state.study.name)
    console.log("旧:", this.$store.state.study.number)
    this.$store.commit("study/setNumber")
    console.log("新：", this.$store.state.study.number)
    this.$store.commit("study/setNumberValue", 666)
    console.log("新新：", this.$store.state.study.number)
    this.$store.commit("study/setNumberIsWhat", { number: 999 })
    console.log("新新新：", this.$store.state.study.number)
    this.$store.commit("user/setNumberIsWhat", { number: 44444444444 })
    console.log("新新新user_store:", this.$store.state.user.number)
  },
  computed: {
    ...mapState('study', {
      getName: state => state.name,
      number: state => state.number,
    }),
    ...mapState('user', { user_Number: 'number' }),
    ...mapGetters('study', ['getMessage'])
  },
  methods: {
    ...mapMutations('study', ['setNumberIsWhat']),
    ...mapMutations('user', { user_setNumberIsWhat: 'setNumberIsWhat' }),
    ...mapActions('study', ['setNum']),
    async test() {
      this.setNumberIsWhat({ number: 777 })
      this.user_setNumberIsWhat({ number: 49876565 })
      await this.setNum({ number: 9898 })
      // await this.$store.dispatch("setNum", {number:9898})
      console.log("手动点击", this.number)
    }
  }
}
</script>

<style></style>