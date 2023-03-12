/*
 * @Author: your name
 * @Date: 2020-01-17 09:43:26
 * @LastEditTime: 2020-01-17 10:52:21
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \zview-front\src\service\index.js
 */
import user from './user';
import device from './device';
import statistics from './statistics';
import logStatistics from './logStatistics';
import role from './role';
import logger from './api/loggerService';
import community from './community';
import operation from './operation';
import organization from './organization';
import face from './baselib/face';
import body from './baselib/body';
import vehicle from './baselib/vehicle';
import * as url from './url';
import soldier from './soldierService';
import wifi from './baselib/wifi';
import person from './person';
import privilege from './privilege';
import tags from './tags';
import video from './video';
import place from './place';
import kvStore from './kvStore';
import { httpRequest, $httpRequest } from './http_1';
// ------------v3.0最新service-------------
import monitorTask from './monitor/monitorTask.js';
import monitorLib from './monitor/monitorLib.js';
import machineInfo from './monitor/machineInfo.js';
import alarmResult from './monitor/alarmResult.js';
import dictionary from './dictionary';
import other from './other';
import massControl from './massControl';
import favorite from './favorite';
import gateWaySever from './gatewayServer';
import gatewayAccess from './gatewayAccess';
import videoPlanService from './videoPlanService';
import alarmManage from './api/alarmManage';
import coreService from './coreService';
import watermark from './waterMark';
import layoutManageService from './layout';
import maintainService from './maintain';
import areaSection from './areaSection';
import regManage from './regManage';
const Service = {
  $httpRequest,
  httpRequest,
  user,
  device,
  logger,
  community,
  operation,
  role,
  organization,
  face,
  body,
  vehicle,
  statistics,
  logStatistics,
  url,
  soldier,
  wifi,
  person,
  tags,
  privilege,
  video,
  place,
  kvStore,
  // ------------v3.0最新service-------------
  monitorTask,
  monitorLib,
  machineInfo,
  alarmResult,
  dictionary,
  other,
  massControl,
  favorite,
  gateWaySever,
  gatewayAccess,
  videoPlanService,
  alarmManage,
  coreService,
  watermark,
  layoutManageService,
  maintainService,
  areaSection,
  regManage
};

export default Service;
