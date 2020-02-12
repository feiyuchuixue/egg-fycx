'use strict';
const uuid = require('node-uuid');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken'); // 引入jsonwebtoken
module.exports = app => {

  return {
    isNull(data) {
      const flag = (data === '' || data === undefined || data === null || Object.keys(data).length === 0);
      return flag;
    },

    generateUuid() {
      return uuid.v4().replace(/\-/g, '');
    },

    // 生成token
    // eslint-disable-next-line no-unused-vars
    initToken(data, expires = 7200) {
      const exp = Math.floor(Date.now() / 1000) + expires;
      const cert = fs.readFileSync(path.join(__dirname, '../public/rsa_private_key.pem')); // 私钥
      const token = jwt.sign({ data, exp }, cert, { algorithm: 'RS256' });
      return token;
    },

  };
};
