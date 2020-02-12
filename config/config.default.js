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

  /**
   * 项目端口配置及ip配置
   */
  config.cluster = {
    listen: {
      path: '',
      port: 7002,
      hostname: '0.0.0.0', // localhost
    },
  };

  /**
   * mysql 数据库连接
   */
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

  /**
   * mongodb 数据库连接
   */
  config.mongo = {
    client: {
      host: '123.56.235.63',
      port: '22379',
      name: 'fycx_db',
      user: 'liuty',
      password: 'liuty8088',
      options: {
        authSource: 'admin',
        poolSize: 20,
      },
    },

  };

  /**
   * redis数据库连接和发布订阅监听
   */
  config.redis = {
    clients: {
      client: {
        port: 26379,
        host: '123.56.235.63',
        password: 'liuty8088',
        db: 0, // 数据库
      },
      // 用于发布订阅
      client_pub: {
        port: 26379,
        host: '123.56.235.63',
        password: 'liuty8088',
        db: 0,
      },
    },
    agent: true,
  };

  /**
   * 接口跨域权限设置
   */
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

  /**
   * jsonWebToken 验证设置
   */
  config.jwt = {
    enable: true,
    // 哪些请求不需要认证
    ignore: [ '/user/register', '/user/login' ],
  };

  /**
   * nginx代理转发配置，用于获取真实ip
   */
  config.proxy = true;
  config.ipHeaders = 'X-Real-Ip, X-Forwarded-For';
  config.maxIpsCount = 1;
  config.protocolHeaders = 'X-Real-Proto, X-Forwarded-Proto';
  config.hostHeaders = 'X-Forwarded-Host';

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1577497736649_4148';

  // add your middleware config here
  config.middleware = [ 'reqRepLog', 'forbiddenIp', 'jwt' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
