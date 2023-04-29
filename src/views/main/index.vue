<template>
  <div class="main-view">
    <topBar />
    <CustomBreadcrumb />
    <Tab :keep-alive-component-instance="keepAliveComponentInstance" />
    <div ref="keepAliveContainer">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import topBar from "components/Bar/topBar.vue";
import Tab from "@/components/Tab"
import CustomBreadcrumb from "@/components/BreadCurm"
export default {
  data() {
    return {
      keepAliveComponentInstance: null,
    };
  },
  components: {
    topBar, CustomBreadcrumb, Tab
  },
  mounted() {
    if (this.$refs.keepAliveContainer) {
      this.keepAliveComponentInstance = this.$refs.keepAliveContainer.childNodes[0].__vue__;
    }
    this.init()
  },
  methods: {
    // 登陆后的初始化
    // TODO:其余初始化内容
    init() {
      if (this.GLOBAL_CUS.AppConfig.openSocket) {
        Socket.connect()
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.main-view {
  @include bg_color("main_bg");
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>