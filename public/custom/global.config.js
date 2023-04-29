const AppConfig = {
  systemConfig: {
    systemName: "public联网平台VUE【BTZ】",
    systemNameLogo: "/resource/image/zenlianlogo.png",
    systemLogo: "/resource/image/logo_zhenguan.png",
    loginBackground: "/resource/image/Login_custom_bg.jpg",
    icp: "Copyright-2023   测试学习平台有限公司 版权所有   陕ICP备9527号-1",
    addressCode: "140900",//"610100,陕西,西安",
    loginMode: "default"
  },
  videoExpire: 3600 * 1000 * 24 * 2, // 毫秒
  openSocket: false,
  microService: {
    user: true,
    log: true,
    bigdata: true
  }
};
const mapConfig = {
  mapOpts: {
    minZoom: 11,
    maxZoom: 18,
    zoom: 12,
    center: [
      108.96269898161594,
      34.268529071739074
    ],
    maxBounds: [
      107.56470719340847,
      33.61828311442923,
      110.09705582657591,
      34.78358526349461
    ]
  }
}


const CUSOPTION = [
  {
    "id": 1,
    "label": "上去就是干"
  },{
    "id": 2,
    "label": "啊倒萨"
  },{
    "id": 3,
    "label": "啊啊"
  },{
    "id": 4,
    "label": "熏臭"
  },{
    "id": 5,
    "label": "阿萨的"
  },{
    "id": 6,
    "label": "天天"
  },{
    "id": 7,
    "label": "看看"
  },{
    "id": 8,
    "label": "韩国"
  },{
    "id": 9,
    "label": "FFFFFFF"
  }
]

const ZHENDI = [{
  value: 'HTML',
  label: 'HTML'
}, {
  value: 'CSS',
  label: 'CSS'
}, {
  value: 'JavaScript',
  label: 'JavaScript'
}]

window.GLOBAL_CUS = { mapConfig, AppConfig, CUSOPTION, ZHENDI }