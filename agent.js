'use strict';

module.exports = agent => {
  // this.app.redis.clients.get('client').subscribe();
  // 解决方案，在这里使用 redis 默认的链接方式，不使用 egg 插件引用的方式进行redis 的订阅监听。
};
