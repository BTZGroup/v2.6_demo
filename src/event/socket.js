class Socket {
  constructor() {
    this.socket = null;
  }

  connect() {
    console.info("%c[socket]  %c第一次尝试连接", "color:blue", "color:blue");
    this.socket = new WebSocket("ws://127.0.0.1:8443/v1");
    this.socket.onopen = function (evt) {
      console.info("%c[socket]  %c连接成功", "color:blue", "color:green");
    };
    this.socket.onmessage = function (evt) {
      console.log("[socket]  %c接受到后端数据", "color:red", evt.data);
    };
    this.socket.onclose = function (evt) {
      console.warn("[socket]  %c后端通道关闭", "color:red");
    };
  }
  send() {
    let data = { name: 'haha', number: Math.random(10) }
    this.socket.send(JSON.stringify(data))
  }
  stop() {
    console.warn("[socket]  %c前端主动关闭通道", "color:orange");
    this.socket.close()
  }
  // websocket 自带的状态码意思提示
  getStatus() {
    if (this.socket.readyState == 0) {
      return '未连接'
    } else if (this.socket.readyState == 1) {
      return '已连接'
    } else if (this.socket.readyState == 2) {
      return '连接正在关闭'
    } else if (this.socket.readyState == 3) {
      return '连接已关闭'
    }
  }
}

export default new Socket()