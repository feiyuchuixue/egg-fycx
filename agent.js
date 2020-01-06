'use strict';
/* const redis = require('redis');*/

// 解决方案，在这里使用 redis 默认的链接方式，不使用 egg 插件引用的方式进行redis 的订阅监听。
module.exports = agent => {

  console.log(agent.redis.clients.get('client_pub'));
  agent.redis.clients.get('client_pub').subscribe('forbidden_ip', (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result, 'redis订阅事件');
  });
  agent.redis.clients.get('client_pub').on('message', (channel, message) => {
    switch (channel) {
      case 'forbidden_ip':
        // 更新ip名单
        console.log('收到订阅。。。');
        agent.messenger.sendToApp('forbidden_ip', 'refresh');
        break;
      default:
        agent.ctx.logger.info('未处理的订阅事件：channel-【' + channel + '】,message-【' + message + '】');
    }
  });

};
