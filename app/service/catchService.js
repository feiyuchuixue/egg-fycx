'use strict';

const Service = require('egg').Service;

const memoryCache = new Map();
const cacheKey = 'forbidden_ip';

class CatchService extends Service {

  get(key) {
    return memoryCache.get(key);
  }

  getAll() {
    return memoryCache;
  }

  containsKey(key) {
    return memoryCache.has(key);
  }


  async update() {
    console.log('init this ...... ...... ..... ');
    const { ctx, app } = this;
    const forbiddenIpList = await app.mongo.find(cacheKey);
    const forbiddenIpArr = [];
    let index = 0;
    forbiddenIpList.forEach(function(doc) {
      forbiddenIpArr[index] = doc._id;
      index++;
    });
    console.log('value ==', forbiddenIpArr);
    // update memory cache from remote
    await memoryCache.set(cacheKey, forbiddenIpArr);
  }
}

module.exports = CatchService;

