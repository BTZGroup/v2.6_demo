<template>
  <div>
    <h1>儿子组件</h1>
    <div>{{ number }}</div>
  </div>
</template>

<script>

import { mapState } from "vuex"
export default {

  computed: {
    ...mapState({
      number: state => state.study.number,
    }),
  }
}
</script>

<style></style>