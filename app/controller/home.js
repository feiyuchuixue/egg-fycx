'use strict';
const mongoDB = require('../middleware/mongoConnect');

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    console.log('config ===', this.app.config.mysql)
    const result = await app.mysql.query('select id,album_name,album_logo from album where 1=1 ', [ '4HF1pQGD1561704147560' ]);
    console.log(await mongoDB.getConfig(this.app.config.mongo))
    ctx.body = result;
  }
}

module.exports = HomeController;
