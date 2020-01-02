'use strict';

// eslint-disable-next-line no-unused-vars
module.exports = app => {
  return {
    foo() {
      // app is Application的实例
      return 'hello helper';
    },

    test() {
      // app is Application的实例
      return 'test helper';
    },
  };
};
