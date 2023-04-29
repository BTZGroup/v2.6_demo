import config from '../config';
const { api, version } = config;
export default {
  logger: {
    text: "日志",
    code: 104700
  },
  enterloggerModule: {
    text: "进入日志管理界面",
    code: 104799,
    parent: 104700,
    moduleName: "logger"
  },
  save: {
    value: `${api}log/${version}/addLog`,
    label: '日志存储'
  },
  getList: {
    value: `${api}log/${version}/getList`,
    label: '日志表格',
    logInfo: [
      {
        code: 104001,
        parent: 104000,
        text: "获取日志表格"
      }
    ]
  }
};
