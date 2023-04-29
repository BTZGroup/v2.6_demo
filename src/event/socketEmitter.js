import EventEmitter from "./eventEmitter";
import EventName from "./eventName";

const url = "/socket.io";

class SocketEmitter extends EventEmitter {
  eventName = EventName;
  connect() {
    if (this.sokect) {
      return;
    }
    const token = Utils.getCache("token", "session");
    console.info("%c[socket]  %c第一次尝试连接", "color:blue", "color:blue");
    this.sokect = io(url, { path: "/socket.io", query: { token }, transports: ["websocket"] });
    this.sokect.on(this.eventName.connect, () => {
      console.info("%c[socket]  %c连接成功", "color:blue", "color:green");
    });
    this.sokect.on(this.eventName.disconnect, () => {
      console.warn("[socket]  %c断开连接", "color:red");
    });

    // 订阅所有事件
    this.subscribeAllRealAlarm();
    this.libsImportEvent();
    this.subscribeAlarmNum();
    this.communityPeopleUpload();
    this.subscribeDeviceChange();
  }
  disconnect() {
    this.clear();
    this.sokect && this.sokect.disconnect();
    this.sokect = null;
  }
  /**
   * 监听所有报警信息
   * @update hjj 2018年10月15日12:25:36
   */
  subscribeAllRealAlarm() {
    this.sokect.on(this.eventName.alarm, data => {
      let json;
      try {
        json = JSON.parse(data);
      } catch (e) {
        data = json;
      }
      this.emit(this.eventName.alarm, json);
    });
  }

  /**
   * 监听布控一体机导入成功事件
   * @update hjj 2018年10月15日12:25:36
   */
  libsImportEvent() {
    this.sokect.on(this.eventName.importLib, data => {
      let json;
      try {
        json = JSON.parse(data);
      } catch (e) {
        json = data;
      }
      this.emit(this.eventName.importLib, json);
    });
  }

  /**
   * 监听社区人员导入成功事件
   * @update zcx 2018年11月24日14:02:36
   */
  communityPeopleUpload() {
    this.sokect.on(this.eventName.importVillage, data => {
      let json;
      try {
        json = JSON.parse(data);
      } catch (e) {
        json = data;
      }
      this.emit(this.eventName.importVillage, json);
    });
  }

  /**
   * 推送报警数量
   * @update hjj 2018年10月15日12:25:36
   */
  subscribeAlarmNum() {
    this.sokect.on(this.eventName.alarmNum, data => {
      let json;
      try {
        json = JSON.parse(data);
      } catch (e) {
        json = data;
      }
      this.emit(this.eventName.alarmNum, json);
    });
  }

  /**
   * 推送设备变化
   * @update hjj 2018年10月15日12:25:36
   */
  subscribeDeviceChange() {
    this.sokect.on(this.eventName.device, data => {
      let json;
      try {
        json = JSON.parse(data);
      } catch (e) {
        json = data;
      }
      this.emit(this.eventName.device, json);
    });
  }
}

export default new SocketEmitter();
