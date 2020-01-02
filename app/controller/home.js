'use strict';
const ObjectId = require('mongodb').ObjectId;
const BaseController = require('../base/BaseController');
class HomeController extends BaseController {
  async index() {
    const { ctx, app } = this;
    console.log('config ===', this.app.config.mysql);
    const mongoResult = await app.mongo.find('test', { query: { _id: ObjectId('5e096049043a78c95c4cc0ac') } });
    // eslint-disable-next-line no-unused-vars

    ctx.body = mongoResult;
  }
}

module.exports = HomeController;
