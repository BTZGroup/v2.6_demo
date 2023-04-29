<template>
  <div class="login-main">
    <div class="login-top-bar">
      <div class="top-bar-content">
        <img src="../../assets/login/logo_title.png" alt="" />
        <span>{{ GLOBAL_CUS.AppConfig.systemConfig.systemName }}</span>
      </div>
    </div>
    <loginForm :registDialog="registDialog" />
    <div class="login-bottom-bar"></div>
    <registerDialog :registDialog="registDialog" />
  </div>
</template>

<script>
import loginForm from "./components/loginForm.vue";
import registerDialog from "./components/registerDialog.vue";
export default {
  data() {
    return {
      registDialog: {
        isShow: false
      },
    };
  },
  components: {
    loginForm,
    registerDialog,
  },
  mounted() {
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.login-main {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("../../assets/login/bg_001.jpg") no-repeat;
  background-size: cover;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.login-top-bar {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 106px;
  display: flex;
  justify-content: center;
  background: url("../../assets/login/login_top_bg.png") no-repeat 50% 0;

  .top-bar-content {
    padding-top: 15px;
    display: flex;
    flex-direction: row;

    img {
      width: 60px;
      height: 60px;
      margin-right: 10px;
    }

    span {
      font-size: 32px;
      height: 60px;
      color: #fff;
      line-height: 60px;
    }
  }
}

.login-bottom-bar {
  position: absolute;
  height: 35px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: url("../../assets/login/login_bottom_bg.png") no-repeat 50% 0;
}</style>