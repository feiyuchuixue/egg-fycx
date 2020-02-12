'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.post('/user/register', controller.sysAdmin.register);
  router.post('/user/login', controller.sysAdmin.login);
  router.post('/user/query', controller.sysAdmin.queryTest);
};
