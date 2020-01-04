'use strict';

const Service = require('egg').Service;

class PublishRedisService extends Service {

  async publishForbiddenIp() {
    console.log('init publishForbiddenIp ...... ...... ..... ');
    // eslint-disable-next-line no-unused-vars
    const { ctx, app } = this;
    // eslint-disable-next-line no-unused-vars
    app.redis.clients.get('client_pub').publish('forbidden_ip', 'sync', (err, result) => {
      if (err) {
        throw err;
      }
    });
  }
}

module.exports = PublishRedisService;

