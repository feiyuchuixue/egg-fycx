'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./routers/mongoTest')(app);
  require('./routers/mysqlTest')(app);
  require('./routers/redisTest')(app);
  require('./routers/requestParam')(app);
  require('./routers/sysAdmin')(app);
};
