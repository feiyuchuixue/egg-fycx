'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  mongo: {
    enable: true,
    package: 'egg-mongo-native',
  },
};

