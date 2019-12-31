'use strict';
const Controller = require('egg').Controller;
class RedisController extends Controller {
  async get() {
    const { ctx, app } = this;
    console.log('app.redis == ', app.redis.clients.get('client'));
    // const result = await app.redis.get('Album:view:1eJMtNfi1561771793482');
    const result = await app.redis.clients.get('client').hgetall('Live:comment:11223344');
    console.log('result doc = ', result);

    ctx.body = result;
  }
}

module.exports = RedisController;
