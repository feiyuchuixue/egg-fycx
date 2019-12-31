'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/mongo/findOne', controller.mongo.findOne1);
  router.get('/mongo/find', controller.mongo.find1);
  router.get('/mongo/remove', controller.mongo.remove);
  router.get('/mongo/update', controller.mongo.update);
};
