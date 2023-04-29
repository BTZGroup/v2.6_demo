<template>
  <div class="user-view">
    <div class="name-view">
      <span>管理员:{{ userData.name }}</span>
    </div>
    <el-popover popper-class="themePopover" placement="bottom" width="120" trigger="manual" v-model="themeShow">
      <div class="func-div home" slot="reference" @click.stop="getTheme"></div>
      <div class="themeColors">
        <span class="themeColor color_1" @click.stop="changeTheme('default')"></span>
        <span class="themeColor color_2" @click.stop="changeTheme('dark')"></span>
        <span class="themeColor color_3" @click.stop="changeTheme('dark_1')"></span>
      </div>
    </el-popover>
    <el-popover popper-class="popover-class" placement="bottom" width="150" trigger="click">
      <div class="user-menu-list">
        <span @click.stop="changePsd">密码修改</span>
        <span @click.stop="changeInfo">个人信息</span>
      </div>
      <div slot="reference" class="func-div user"></div>
    </el-popover>
    <div class="func-div logout" @click.stop="logout"></div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      themeShow: false,
      userData: {},
    };
  },
  mounted() {
  },
  computed: {
  },
  methods: {
    ...mapMutations('conf', ['settheme']),
    getTheme() {
      this.themeShow = !this.themeShow;
    },
    changeTheme(type) {
      this.themeShow = false;
      document.getElementById("theme").href = `./theme/${type}.css`;
      window.document.documentElement.setAttribute('data-theme', type)
      
      this.settheme({ theme: type })
      Utils.setCache('theme', type, 'cookie')
    },
    /* 返回主页 */
    goHome() {
      this.$emit("goHome");
    },
    /* 登出 */
    logout() {
      Service.user.loginOut().then(res => {
        console.log("dsadas", res)
      })
        .catch(res => {
          console.log("dsadas", res)
        })
      Service.log.save({
        ...Service.url.user.loginOut.logInfo[0],
        description: `【admin】登出系统`
      }).then(res => { }).catch(res => {
        sessionStorage.clear()
      });
    },
    /* 修改密码 */
    changePsd() {
      this.$emit("changePsd");
    },
    /* 修改个人信息 */
    changeInfo() {
      this.$emit("changeInfo");
    },
  },
  beforeDestroy() {
    this.$bus.$off("userData");
  },
};
</script>

<style lang="scss" scoped>
.user-view {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 15px;
}

.name-view {
  margin-right: 10px;

  span {
    color: #fff;
    font-size: 16px;
  }

  v:deep .el-popover {
    padding: 0px !important;
  }
}

.func-div {
  width: 32px;
  height: 32px;
  cursor: pointer;
}

.home {
  background: url("../../assets/userBar/m-btn-home.png") no-repeat scroll 0% 0% / 100% 100%;

  &:hover {
    background: url("../../assets/userBar/m-btn-hover-home.png") no-repeat scroll 0% 0% / 100% 100%;
  }
}

.user {
  margin: 0px 10px;
  background: url("../../assets/userBar/m-btn-user.png") no-repeat scroll 0% 0% / 100% 100%;

  &:hover {
    background: url("../../assets/userBar/m-btn-hover-user.png") no-repeat scroll 0% 0% / 100% 100%;
  }
}

.logout {
  background: url("../../assets/userBar/m-btn-bg.png") no-repeat scroll 0% 0% / 100% 100%;

  &:hover {
    background: url("../../assets/userBar/m-btn-hover-bg.png") no-repeat scroll 0% 0% / 100% 100%;
  }
}

.popover-class {
  width: 200px;
}

.user-menu-list {
  display: flex;
  flex-direction: column;

  span {
    border-bottom: 1px solid #3161a9;
    text-align: center;
    font-size: 16px;
    line-height: 34px;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: rgba($color: #000000, $alpha: 0.33);
    }
  }
}

.themeColors {
  display: flex;
  justify-content: space-around;
  padding: 5px 10px 5px 10px;

  .themeColor {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    cursor: pointer;
  }

  .color_1 {
    background-color: #f2f2f2;
  }

  .color_2 {
    background-color: #222933;
  }

  .color_3 {
    background-color: #333333;
  }
}</style>
