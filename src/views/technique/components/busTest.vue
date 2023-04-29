<template>
  <div>
    <h3>BUS------Test组件</h3>
    <div @click="eventTest">bus测试</div>
    <div v-for="(item, index) in message" :key="index">{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: "busTest",
  data() {
    return {
      message: [],
    };
  },
  created() {
    this.$bus.$on("busEvent", (mes) => {
      this.message = mes;
    });
  },
  destroyed() {
    this.$bus.$off("busEvent");
  },
  methods: {
    eventTest() {
      this.$bus.$emit("test", {
        name: "衣服",
        price: "78元",
        color: "red",
      });
    },
  },
};
</script>
