import Cookie from 'js-cookie';
import moment from 'moment';
import { orderBy } from 'lodash';
/**
 * 获取缓存数据
 * @param {string} key
 * @param {string} type: 缓存类型 'local'(默认) / cookie / session;
 */
export function getCache(key, type = 'local') {
  let data;
  switch (type) {
    case 'cookie':
      data = Cookie.get(key);
      break;
    case 'session':
      let strS = sessionStorage.getItem(key);
      try {
        data = JSON.parse(strS);
      } catch (e) {
        data = strS;
      }
      break;
    default:
      let strL = localStorage.getItem(key);
      try {
        data = JSON.parse(strL);
      } catch (e) {
        data = strL;
      }
      break;
  }
  return data;
}

/**
 * 获取缓存数据
 * @param {string} key
 * @param {any} value
 * @param {string} type: 缓存类型 'local'(默认) / cookie / session;
 */
export function setCache(key, value, type = 'local') {
  switch (type) {
    case 'cookie':
      Cookie.set(key, value, { expires: 7 });
      break;
    case 'session':
      sessionStorage.setItem(key, JSON.stringify(value));
      break;
    default:
      localStorage.setItem(key, JSON.stringify(value));
      break;
  }
}

