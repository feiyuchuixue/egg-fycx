'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const result = await app.mysql.query('select id,album_name,album_logo from album where 1=1 ', [ '4HF1pQGD1561704147560' ]);
    ctx.body = result;
  }
}

module.exports = HomeController;
