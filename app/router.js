'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./routers/mongoTest')(app);
  require('./routers/mysqlTest')(app);
};
