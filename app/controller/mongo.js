'use strict';
const ObjectId = require('mongodb').ObjectId;
const Controller = require('egg').Controller;
class HomeController extends Controller {
  /**
       *
       *=========================egg-mongo 支持的api 如下
       connect()      // 不需要用户调用
       insertOne()
       findOneAndUpdate()
       findOneAndReplace()
       findOneAndDelete()
       insertMany()
       updateMany()
       deleteMany()
       find()
       count()
       distinct()
       createIndex()
       listCollection()
       createCollection()
   * @returns {Promise<void>}
   */

  async findOne() {
    const { ctx, app } = this;
    // mongo.find('*tableName', { query, skip, limit, project, sort, options });
    const mongoResult = await app.mongo.findOne('test', { query: { _id: ObjectId('5e096049043a78c95c4cc0ac') } });

    ctx.body = mongoResult;
  }

  async find() {
    const { ctx, app } = this;
    const mongoResult = await app.mongo.find('test', { query: { }, project: { _id: -1, name: -1 }, sort: { _id: 1 } });
    mongoResult.forEach(function(e) {
      console.log(e);

    });

    ctx.body = mongoResult;
  }

  async aggregate() {
    const { ctx, app } = this;
    let recordCondition;
    recordCondition.random = { $gt: 0 };
    const query = [
      { $match: recordCondition },
      { $group: { _id: '$account', recordNumber: { $sum: 1 }, avgCallTime: { $avg: '$seconds' }, submited: { $sum: '$submited' } } }];
    const mongoResult = await app.mongo.aggregate('test', { query });

    ctx.body = mongoResult;
  }

}

module.exports = HomeController;