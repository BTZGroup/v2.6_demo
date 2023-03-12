import { httpRequest } from "../http_1";
import alarm from "../url/alarm";

// @httpRequest
class alarmManageService {

 /**
   * @desc 查询报警列表
   * @param {*} id
   */
  getAlarmManageList(data) {
    return this.$httpRequest({
      url: alarm.queryAlarmList.value,
      method: "post",
      data
    })
      .then(res => {
        return res;
      })
      .catch(e => {
        return Promise.reject(e);
      });
  }

  deviceList(data) {
    // BaseStore.action.setAction(gatewayServer.gateWayList.value);
    const { deviceName } = BaseStore.device.queryDeviceById(data.deviceId) || {};
    return this.$httpRequest({
      url: gatewayServer.deviceList.value.replace("<diviceId>", data.deviceId),
      method: "post",
      data,
      logInfo: {
        description: `查看设备【${data.deviceId}】接入详情`,
        ...gatewayServer.deviceList.logInfo[0]
      }
    })
      .then(res => {
        // BaseStore.action.removeAction(gatewayServer.gateWayList.actionName);
        return res;
      })
      .catch(e => {
        // BaseStore.action.removeAction(gatewayServer.gateWayList.actionName);
        return Promise.reject(e);
      });
  }
}

export default new alarmManageService();
