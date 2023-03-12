import config from '../config';
const { api, version } = config;

export default {
  alarmManagment: {
    code: 200200,
    text: '报警管理',
  },
  enteralarmManagmentModule: {
    text: '进入报警管理界面',
    code: 200201,
    parent: 200200,
    moduleName: 'alarmManagment'
  },
  queryAlarmList: {
    value: `${api}pictureMessage/${version}/getAlarmMessage`,
    label: '获取警情列表',
    actionName:'getAlarmMessage'
  },
  exportAlarm: {
    value: `${api}alarmMessage/${version}/getAlarmMessage`,
    label: '导出报警',
    code: 200203,
    parent: 200200,
    actionName:'getAlarmMessage'
  },
}