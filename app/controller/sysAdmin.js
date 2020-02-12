'use strict';
const BaseController = require('../base/BaseController');
class SysAdminController extends BaseController {
  async login() {
    const { ctx, app } = this;
    console.log(' data == ', this.ctx.request.body);
    const token = this.ctx.helper.Utils.initToken(this.ctx.request.body);
    await app.redis.clients.get('client').set('loginToken:' + this.ctx.request.body.userId, token, 'ex', 7200);
    console.log('token', token);
    ctx.body = await this.success('登录成功', { token, expires: 7200 });
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

  async queryTest() {
    const { ctx, app } = this;
    console.log(' body =============', this.ctx.request.body);
    ctx.body = await this.success('认证成功');
  }


}

module.exports = SysAdminController;
