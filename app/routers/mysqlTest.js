'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/mysql/findOne', controller.mysql.get);
  router.get('/mysql/custom', controller.mongo.update);
};
