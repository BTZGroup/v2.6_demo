import { httpRequest } from './http';
import logger from './url/logger';


// @httpRequest
class LoggerService {
  /**
   * 日志查询
   * @param {Object} data
   */
  queryLogs(data){
    return this.$httpRequest({
      url: logger.queryLogs.value,
      method: 'POST',
      data:data,
    })
  }
  /* 
    保存日志
  */
  save(data) {
    const description = data.description || '';
    return this.$httpRequest({
      url: logger.save.value,
      method: 'POST',
      data: {
        function: data.code,
        module: data.parent,
        description
      }
    });
  }
  videoHotPoint(id) {
    return this.$httpRequest({
      url: logger.videoHotPoint.value.replace("<Id>", id),
      method: 'POST',
      data: {}
    });
  }
}

export default new LoggerService();