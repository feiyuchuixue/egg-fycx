'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.get('/req/get', controller.requestParam.getParam);
};
