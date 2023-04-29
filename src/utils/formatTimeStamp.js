import moment from "moment"
/**
 * @desc 时间戳格式化
 */
export default (value, format = 'YYYY-MM-DD HH:mm:ss') => {
  return value ? moment(parseInt(value, 10)).format(format) : null
}