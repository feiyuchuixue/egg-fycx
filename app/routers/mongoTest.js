'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/mongo/findOne', controller.mongo.findOne);
  router.get('/mongo/find', controller.mongo.find);
  router.get('/mongo/remove', controller.mongo.remove);
  router.get('/mongo/update', controller.mongo.update);
};
