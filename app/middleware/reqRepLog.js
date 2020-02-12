'use strict';
/**
 * 请求日志打印
 * @param app
 * @returns {printMiddleware}
 */
module.exports = app => {


  return async function printMiddleware(ctx, next) {
    // const startTime = Date.now();
    const method = ctx.request.method;
    // const url = ctx.request.url;
    // const ip = ctx.request.header.host;
    let req = {};
    if (method === 'POST') {
      // eslint-disable-next-line no-const-assign
      req = ctx.request.body;
    } else if (method === 'GET') {
      req = ctx.query;
    }

    await next();
    const rep = ctx.response.body;
    // const endTime = Date.now();
    ctx.logger.info('\n======S T A R T======',
      /*      '\nTimes :', (endTime - startTime) + 'ms',
      '\nURL :', url,
      '\nHTTP Method :', method,
      '\nIP :', ip,*/
      '\nRequest Args :', req,
      '\n-------------------------------------------------------' +
      '\nResponse Args :', rep,
      '\n======E N D=========');
  };

};
