'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/mongo/findOne', controller.mongo.findOne);
  router.get('/mongo/find', controller.mongo.find);
};
