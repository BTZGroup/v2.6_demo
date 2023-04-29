
import $http from "../http.js"
import logger from '../url/log.js';

class LoggerService {
  save(data) {
    return $http({
      url: logger.save.value,
      method: 'POST',
      data: data
    });
  }
  getList(data) {
    return $http({
      url: logger.getList.value,
      method: 'POST',
      data: data,
      logInfo: {
        description: `获取日志列表【admin】`,
        ...logger.getList.logInfo[0]
      }
    });
  }
}

export default new LoggerService();