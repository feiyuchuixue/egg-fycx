'use strict';

const Controller = require('egg').Controller;
const message = {
  recode: 0,
  msg: '',
  state: true,
  data: {},
};
class BaseController extends Controller {

  async success(msg, data) {
    message.recode = 0;
    message.msg = msg || 'success';
    message.state = true;
    message.data = data || {};
    return message;
  }


  async err(msg, data) {
    message.recode = -1;
    message.msg = msg || 'fail';
    message.state = false;
    message.data = data || {};
    return message;
  }

  async msg(recode, state, msg, data) {
    message.recode = recode || 0;
    message.msg = msg || 'success';
    message.state = state || true;
    message.data = data || {};
    return message;
  }


}

module.exports = BaseController;
