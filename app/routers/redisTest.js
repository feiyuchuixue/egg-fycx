'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.get('/redis/find', controller.redis.get);
};
