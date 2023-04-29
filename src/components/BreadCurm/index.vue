<template>
  <div class="bread-card">
    <el-breadcrumb class="app-breadcrumb" separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item, index) in leaveList" :key="item.path">
          <span @click.prevent="handleLink(item, index)" style="cursor: pointer">{{ item.meta.title }}</span>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leaveList: [],
    };
  },
  watch: {
    $route: {
      handler() {
        this.getBreadcrumb();
      },
      immediate: true,
    },
  },
  methods: {
    getBreadcrumb() {
      this.leaveList = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );
    },
    handleLink(item, index) {
      //处于本页就不再跳转
      if (index === this.leaveList.length - 1) {
        return;
      }
      this.$router.push({ path: `${item.path}` });
    }
  }
};
</script>

<style lang="scss" scoped>
.bread-card {
  height: 50px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-weight: bold;
}
</style>