<template>
  <div class="login-form">
    <img src="../../../assets/login/login-logo.png" alt="" />
    <el-form class="login-form-view" :model="loginForm" ref="loginForm">
      <el-form-item prop="userName" :rules="[
        { required: true, message: '请输入用户名', trigger: 'blur' }]">
        <el-input v-model="loginForm.userName" :maxlength="16" auto-complete="off">
        </el-input>
      </el-form-item>
      <el-form-item prop="password" :rules="[
        { required: true, message: '请输入密码', trigger: 'blur' }]">
        <el-input v-model="loginForm.password" :maxlength="16" type="password" auto-complete="off">
        </el-input>
      </el-form-item>
    </el-form>
    <div class="login-btn" @click.stop="toLogin"></div>
    <div class="register-btn" @click.stop="registDialog.isShow = true"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        userName: "",
        password: ""
      }
    };
  },
  props: ["registDialog"],
  mounted() {
    window.addEventListener("keydown", this.keyDown);
  },
  destroyed() {
    window.removeEventListener("keydown", this.keyDown, false);
  },
  methods: {
    toLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          if (this.loginForm.userName == 'admin' && this.loginForm.password == '123') {
            Service.user.login({ userName: 'admin', userId: '001', userRole: '001' }).then(res => {
              console.log("res=====================", res)

              this.$router.push({ path: "/main" });
              Utils.setCache('userInfo', { userName: 'admin', userId: '001', userRole: '001' }, 'session');
              Utils.setCache('token', "gadsoiagduaoidgadapgdgasydbaidasgdyadbaispdgaysdasbdapsgdasdsady", 'session');
              Service.log.save({
                ...Service.url.user.login.logInfo[0],
                description: `【admin】登录系统`
              });
            }).catch(res => {
              this.$router.push({ path: "/main" });
              Utils.setCache('userInfo', { userName: 'admin', userId: '001', userRole: '001' }, 'session');
              Utils.setCache('token', "gadsoiagduaoidgadapgdgasydbaidasgdyadbaispdgaysdasbdapsgdasdsady", 'session');
              Service.log.save({
                ...Service.url.user.login.logInfo[0],
                description: `【admin】登录系统`
              });
            })
          } else {
            this.$message.error('用户密码错误！');
          }
        } else {
          return false;
        }
      });
    },
    keyDown(e) {
      if (e.keyCode == 13) {
        this.toLogin();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);

  .login-form-view {
    margin-top: 15px;
  }

  .btn-view {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .login-btn {
    width: 100px;
    height: 30px;
    background: url("../../../assets/login/login-btnlogin.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;

    &:hover {
      // background: url("../../../assets/login/signin.png") no-repeat;
      background-size: 100% 100%;
    }
  }

  .register-btn {
    width: 100px;
    height: 30px;
    margin-left: 20px;
    background-size: 100% 100%;
    cursor: pointer;

    &:hover {
      background-size: 100% 100%;
    }
  }
}
</style>