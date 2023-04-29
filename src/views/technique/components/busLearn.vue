<template>
  <div>
    <h3>BUS------Learn组件</h3>
    <div @click="event">bus学习</div>
    <div>{{ objct.name }}</div>
    <div>{{ objct.price }}</div>
    <div>{{ objct.color }}</div>
  </div>
</template>

<script>
export default {
  name: "busLearn",
  data() {
    return {
      objct: {},
    };
  },
  created() {
    this.$bus.$on("test", (data) => {
      this.objct = data;
    });
  },
  destroyed() {
    this.$bus.$off("test");
  },
  methods: {
    event() {
      this.$bus.$emit("busEvent", [1, 2, 3, 4, 5]);
    },
  },
};
</script>
