'use strict';
const Controller = require('egg').Controller;
class MysqlController extends Controller {

  /**
   * mysql CRUD api
   * insert
   * get
   * update
   * delete
   * 事物================
   *   const conn = yield app.mysql.beginTransaction();
         try {
        yield conn.insert(table, row1);
        yield conn.update(table, row2);
        yield conn.commit();
      } catch (err) {
        // error, rollback
        yield conn.rollback(); // rollback call won't throw err
        throw err;
      }
   *
   * @return {Promise<void>}
   */

  /**
     *
      const results = await this.app.mysql.select('posts', { // 搜索 post 表
        where: { status: 'draft', author: ['author1', 'author2'] }, // WHERE 条件
        columns: ['author', 'title'], // 要查询的表字段
        orders: [['created_at','desc'], ['id','desc']], // 排序方式
        limit: 10, // 返回数据量
        offset: 0, // 数据偏移量
      });
   * @returns {Promise<void>}
   */

  // 自定义sql操作
  async custom() {
    const { ctx, app } = this;
    const result = await app.mysql.query('select id,album_name,album_logo from album where 1=1 ', [ '4HF1pQGD1561704147560' ]);

    ctx.body = result;
  }

  // findOneByQue
  async get() {
    const { ctx, app } = this;
    const result = await app.mysql.get('album', { id: '4HF1pQGD1561704147560' });
    ctx.body = result;
  }

  // update
  async update() {
    const { ctx, app } = this;
    const albumOBj = {
      id: '4HF1pQGD1561704147560',
      name: 'test',
    };
    const result = await app.mysql.get('album', albumOBj);
    ctx.body = result;
  }

  // delete
  async delete() {
    const { ctx, app } = this;
    const albumOBj = {
      id: '4HF1pQGD1561704147560',
    };
    const result = await app.mysql.delete('album', albumOBj);
    ctx.body = result;
  }

  // insert
  async insert() {
    const { ctx, app } = this;
    const albumOBj = {
      id: '4HF1pQGD1561704147560',
    };
    const result = await app.mysql.insert('album', albumOBj);
    ctx.body = result;
  }


}

module.exports = MysqlController;
