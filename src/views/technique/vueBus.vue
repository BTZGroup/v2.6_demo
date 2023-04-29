<template>
  <div class="busOne">
    <h1>Bus-----父组件</h1>
    <bus-learn></bus-learn>
    <bus-test></bus-test>
  </div>
</template>

<script>
import busLearn from "./components/busLearn.vue";
import busTest from "./components/busTest.vue";
export default {
  name: "busOne",
  data() {
    return {
      elementValue: 4,
    };
  },
  methods: {},
  components: {
    busLearn,
    busTest,
  },
};
</script>
