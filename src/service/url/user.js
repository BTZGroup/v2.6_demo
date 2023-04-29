import config from "../config";
const { api, version } = config;
export default {
  login: {
    value: `${api}/user/v2/login`,
    label: "用户登录",
    actionName: "login",
    logInfo: [
      {
        code: 103801,
        parent: 103800,
        text: "登录系统"
      }
    ]
  },
  loginOut: {
    value: `${api}/user/${version}/loginOut`,
    label: "登出",
    actionName: "loginOut",
    logInfo: [
      {
        code: 103801,
        parent: 103800,
        text: "登出系统"
      }
    ]
  }
};
