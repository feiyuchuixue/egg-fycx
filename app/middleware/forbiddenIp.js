'use strict';

/**
 * ip过滤
 * @param app
 * @returns {forbiddenIpMiddleware}
 */
module.exports = app => {


  return async function forbiddenIpMiddleware(ctx, next) {
    const ip = ctx.request.ip;
    console.log('ip ==', ip);
    if (await ctx.service.catchService.get('forbidden_ip').indexOf(ip) > -1) {
      const body = {
        recode: -1,
        msg: '非法ip!',
        state: false,
        data: '',
      };
      ctx.body = body;
      ctx.logger.info('Illegal request ip :【' + ip + '】');
    } else {
      await next();
    }
  };

};
