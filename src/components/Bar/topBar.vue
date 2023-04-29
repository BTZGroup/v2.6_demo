<template>
  <div class="top-bar">
    <el-menu :default-active="activeIndex" class="el-menu-topbar" mode="horizontal" @select="handleSelect" ref="ppsMenu">
      <template v-for="(item) in menuData">
        <!-- 一级 -->
        <el-submenu :key="item.id" :index="item.id" v-if=" item.children.length > 0">
          <template slot="title">{{item.data.navName}}</template>
          <template v-for="(item2) in item.children">
            <!-- 二级 -->
            <el-submenu :key="item2.id" :index="item2.id" v-if="item2.children.length > 0">
              <!-- 三级 -->
              <template slot="title">{{item2.data.navName}}</template>
              <el-menu-item :key="item3.id" v-for="(item3) in item2.children" :index="item3.id">{{item3.data.navName}}</el-menu-item>
            </el-submenu>
            <el-menu-item :key="item2.id" :index="item2.id" v-else>{{item2.data.navName}}</el-menu-item>
          </template>
        </el-submenu>
        <!-- 一级 -->
        <el-menu-item :key="item.id" :index="item.id" v-else>{{item.data.navName}}</el-menu-item>
      </template>
    </el-menu>
    <userBar></userBar>
  </div>
</template>

<script>
import Utils from '@/utils';

import menujson from "./menu.json"
import userBar from "./userBar.vue";
export default {
  props: {
    menu: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      menuData: menujson.children,
      activeIndex: '/dashboard',
      memuFlatList: []
    };
  },
  components: { userBar },
  methods: {
    handleSelect(key, keyPath, data, aaa) {
      console.log(key, keyPath, data, aaa);
      let sale = this.memuFlatList.find(v => v.id == key + '')
      this.$router.replace({ path: sale.routerUrl });
    }
  },
  mounted() {
    let sale_list = Utils.flatArr(this.menuData).map(v => v.data)
    this.memuFlatList = sale_list
    this.$refs.ppsMenu.activeIndex = sale_list.find(v => v.routerUrl == this.$route.path)?.id
  },
};
</script>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  .el-menu-topbar {
    width: 100%;
    max-height: 60px;
  }
}
</style>