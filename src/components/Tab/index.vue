<template>
  <div class="__common-layout-pageTabs">
    <el-scrollbar>
      <div class="__tabs">
        <div class="__tab-item" v-for="item in tabList" :class="{
          '__is-active': item.fullPath == $route.fullPath,
        }" :key="item.fullPath" @click="onClick(item)" @contextmenu.prevent="showContextMenu($event, item)">
          {{ item.meta.title }}
          <span class="el-icon-close" @click.stop="onClose(item)" @contextmenu.prevent.stop=""
            :style="tabList.length <= 1 ? 'width:0;' : ''"></span>
        </div>
      </div>
    </el-scrollbar>
    <div v-show="contextVisible">
      <ul :style="{ left: left_px + 'px', top: top_px + 'px' }" class="__contextmenu">
        <li>
          <el-button type="text" @click="reload()" size="mini">
            重新加载
          </el-button>
        </li>
        <li>
          <el-button type="text" @click="closeOtherLeft" :disabled="false" size="mini">关闭左边</el-button>
        </li>
        <li>
          <el-button type="text" @click="closeOtherRight" :disabled="false" size="mini">关闭右边</el-button>
        </li>
        <li>
          <el-button type="text" @click="closeOther" size="mini">关闭其他</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    keepAliveComponentInstance: {}, //keep-alive控件实例对象
    blankRouteName: {
      type: String,
      default: "blank",
    }, //空白路由的name值
  },
  data() {
    return {
      contextVisible: false, //右键菜单是否显示
      left_px: 0, //右键菜单显示位置
      top_px: 0, //右键菜单显示位置
      tarRoute: null, //右键所指向的菜单路由
      tabList: [], //已打开的路由页面
    };
  },
  watch: {
    //当路由变更时，执行打开页面的方法
    $route: {
      handler(v) {
        this.openPage(v);
      },
      immediate: true,
    },
  },
  mounted() {
    //添加点击关闭右键菜单
    window.addEventListener("click", this.closeContextMenu);
  },
  destroyed() {
    window.removeEventListener("click", this.closeContextMenu);
  },
  methods: {
    //打开页面
    openPage(route) {
      if (route.name == this.blankRouteName) {
        return;
      }
      let isExist = this.tabList.some(
        (item) => item.fullPath == route.fullPath
      );
      if (!isExist) {
        let openedPageRoute = this.tabList.find(
          (item) => item.path == route.path
        );
        //判断页面是否支持不同参数多开页面功能，如果不支持且已存在path值一样的页面路由，那就替换它
        if (!route.meta.multi && openedPageRoute != null) {
          this.delRouteCache(openedPageRoute.fullPath);
          this.tabList.splice(
            this.tabList.indexOf(openedPageRoute),
            1,
            route
          );
        } else {
          this.tabList.push(route);
        }
      }
    },
    //点击页面标签卡时
    onClick(route) {
      if (route.fullPath !== this.$route.fullPath) {
        this.$router.push(route.fullPath);
      }
    },
    //关闭页面标签时
    onClose(route) {
      let index = this.tabList.indexOf(route);
      this.delPageRoute(route);
      if (route.fullPath === this.$route.fullPath) {
        //删除页面后，跳转到上一页面
        this.$router.replace({ // 注意此处如果直接将上一个route数据赋值给replace会出现汉字乱码的问题
          path: this.tabList[index == 0 ? 0 : index - 1].path
        });
      }
    },
    //右键显示菜单
    showContextMenu(e, route) {
      this.tarRoute = route;
      this.left_px = e.layerX;
      this.top_px = e.layerY;
      this.contextVisible = true;
    },
    //隐藏右键菜单
    closeContextMenu() {
      this.contextVisible = false;
      this.tarRoute = null;
    },
    //重载页面
    reload() {
      this.delRouteCache(this.tarRoute.fullPath);
      if (this.tarRoute.fullPath === this.$route.fullPath) {
        this.$router.replace({ name: this.blankRouteName }).then(() => {
          this.$router.replace(this.tarRoute);
        });
      }
    },
    //关闭其他页面
    closeOther() {
      for (let i = 0; i < this.tabList.length; i++) {
        let r = this.tabList[i];
        if (r !== this.tarRoute) {
          this.delPageRoute(r);
          i--;
        }
      }
      if (this.tarRoute.fullPath != this.$route.fullPath) {
        this.$router.replace(this.tarRoute);
      }
    },
    //根据路径获取索引
    getPageRouteIndex(fullPath) {
      for (let i = 0; i < this.tabList.length; i++) {
        if (this.tabList[i].fullPath === fullPath) {
          return i;
        }
      }
    },
    //关闭左边页面
    closeOtherLeft() {
      let index = this.tabList.indexOf(
        this.tarRoute
      );
      let currentIndex = this.getPageRouteIndex(this.$route.fullPath);
      if (index > currentIndex) {
        this.$router.replace(this.tarRoute);
      }
      for (let i = 0; i < index; i++) {
        let r = this.tabList[i];
        this.delPageRoute(r);
        i--;
        index--;
      }
    },
    //关闭右边页面
    closeOtherRight() {
      let index = this.tabList.indexOf(
        this.tarRoute
      );
      let currentIndex = this.getPageRouteIndex(this.$route.fullPath);
      for (let i = index + 1; i < this.tabList.length; i++) {
        let r = this.tabList[i];
        this.delPageRoute(r);
        i--;
      }
      if (index < currentIndex) {
        this.$router.replace(this.tarRoute);
      }
    },
    //删除页面
    delPageRoute(route) {
      let routeIndex = this.tabList.indexOf(route);
      if (routeIndex >= 0) {
        this.tabList.splice(routeIndex, 1);
      }
      this.delRouteCache(route.fullPath);
    },
    //删除页面缓存
    delRouteCache(key) {
      let cache = this.keepAliveComponentInstance.cache;
      let keys = this.keepAliveComponentInstance.keys;
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] == key) {
          keys.splice(i, 1);
          if (cache[key] != null) {
            delete cache[key];
          }
          break;
        }
      }
    },
  },
};
</script>
<style lang="scss">
.__common-layout-pageTabs {
  .__contextmenu {
    // width: 100px;
    margin: 0;
    border: 1px solid #e4e7ed;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 14px;
    color: #333;
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.1);

    li {
      margin: 0;
      padding: 0px 15px;

      &:hover {
        background: #f2f2f2;
        cursor: pointer;
      }

      button {
        color: #2c3e50;
      }
    }
  }

  $c-tab-border-color: #dcdfe6;
  position: relative;

  &::before {
    content: "";
    border-bottom: 1px solid $c-tab-border-color;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
  }

  .__tabs {
    display: flex;

    .__tab-item {
      white-space: nowrap;
      padding: 8px 6px 8px 18px;
      font-size: 12px;
      border: 1px solid $c-tab-border-color;
      border-left: none;
      border-bottom: 0px;
      line-height: 14px;
      cursor: pointer;
      transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
        padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

      &:first-child {
        border-left: 1px solid $c-tab-border-color;
        border-top-left-radius: 2px;
        margin-left: 10px;
      }

      &:last-child {
        border-top-right-radius: 2px;
        margin-right: 10px;
      }

      &:not(.__is-active):hover {
        color: #409eff;

        .el-icon-close {
          width: 12px;
          margin-right: 0px;
        }
      }

      &.__is-active {
        padding-right: 12px;
        border-bottom: 1px solid #fff;
        color: #409eff;

        .el-icon-close {
          width: 12px;
          margin-right: 0px;
          margin-left: 2px;
        }
      }

      .el-icon-close {
        width: 0px;
        height: 12px;
        overflow: hidden;
        border-radius: 50%;
        font-size: 12px;
        margin-right: 12px;
        transform-origin: 100% 50%;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        vertical-align: text-top;

        &:hover {
          background-color: #c0c4cc;
          color: #fff;
        }
      }
    }
  }
}
</style>