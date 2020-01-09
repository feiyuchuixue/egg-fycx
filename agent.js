'use strict';
module.exports = agent => {

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
        agent.messenger.sendToApp('forbidden_ip', 'refresh');
        break;
      default:
        agent.ctx.logger.info('未处理的订阅事件：channel-【' + channel + '】,message-【' + message + '】');
    }
  });

};
