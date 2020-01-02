'use strict';
const BaseController = require('../base/BaseController');
class RequestParamController extends BaseController {

  // 获取get请求的请求参数
  // http://127.0.0.1:7001/req/get?id=13123ad&cd=xxdd&name=哈哈
  async getParam() {
    console.log('init get param');
    console.log(this.ctx.query);
    console.log(await this.success('你好'));
    this.ctx.body = await this.success( '你好');
  }


}

module.exports = RequestParamController;
