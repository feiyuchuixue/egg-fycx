'use strict';
const BaseController = require('../base/BaseController');
class SysAdminController extends BaseController {
  async login() {
    const { ctx, app } = this;
    const uuid = this.ctx.helper.Utils.generateUuid();
    console.log('uuid', uuid);
    // const result = await app.redis.get('Album:view:1eJMtNfi1561771793482');
    const result = await app.redis.clients.get('client').hgetall('Live:comment:11223344');
    console.log('result doc = ', result);

    ctx.body = result;
  }

  async register() {
    const { ctx, app } = this;
    const sysAdmin = {};
    sysAdmin._id = await ctx.helper.Utils.generateUuid();
    sysAdmin.name = ctx.request.body.name;
    sysAdmin.nickName = ctx.request.body.nickName;
    sysAdmin.password = ctx.request.body.password;
    sysAdmin.phone = ctx.request.body.phone;
    sysAdmin.createTime = await ctx.helper.DateTime.getCurrentDateTime();
    await app.mongo.insertOne('sys_admin', {
      doc: sysAdmin,
    });
    ctx.body = await this.success('注册成功');
  }


}

module.exports = SysAdminController;
