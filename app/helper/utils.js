'use strict';
const uuid = require('node-uuid');
module.exports = app => {

  return {
    isNull(data) {
      const flag = (data === '' || data === undefined || data === null || Object.keys(data).length === 0);
      return flag;
    },

    generateUuid() {
      return uuid.v4().replace(/\-/g, '');
    },

  };
};
