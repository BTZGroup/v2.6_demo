import user from "../url/user.js";
import $http from "../http.js"

class UserService {
  async login(options) {
    return $http({
      url: user.login.value,
      method: "post",
      data: options
    })
      .then(res => {
        return res;
      })
      .catch(e => {
        return Promise.reject(e);
      });
  }
  loginOut() {
    return $http({
      url: user.loginOut.value,
      method: "post"
    })
      .then(res => {
        return res;
      })
      .catch(e => {
        return e;
      });
  }
}
export default new UserService();
