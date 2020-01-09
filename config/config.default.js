/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '39.97.232.184',
      // 端口号
      port: '13306',
      // 用户名
      user: 'gwzz',
      // 密码
      password: 'gwzz',
      // 数据库名
      database: 'gwzz_db',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.mongo = {
    client: {
      host: '127.0.0.1',
      port: '27027',
      name: 'fycx_db',
      user: 'Liuty',
      password: '448088',
      options: {
        authSource: 'admin',
        poolSize: 20,
      },
    },

  };

  config.redis = {
    clients: {
      client: {
        port: 16379,
        host: '39.97.232.184',
        password: 'memory',
        db: 0, // 数据库
      },
      // 用于发布订阅
      client_pub: {
        port: 16379,
        host: '39.97.232.184',
        password: 'memory',
        db: 0,
      },
    },
    agent: true,
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '*' ],
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,POST',
  };

  config.proxy = true;
  config.ipHeaders = 'X-Real-Ip, X-Forwarded-For';
  config.maxIpsCount = 1;
  config.protocolHeaders = 'X-Real-Proto, X-Forwarded-Proto';
  config.hostHeaders = 'X-Forwarded-Host';

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1577497736649_4148';

  // add your middleware config here
  config.middleware = [ 'reqRepLog', 'forbiddenIp' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
