import * as url from './url';
import http from './http';
import multiHttp from './multiHttp';
import user from './api/user';
import log from './api/log';

const Service = {
  ...url,
  http,
  multiHttp,
  user,
  log
};

export default Service;
