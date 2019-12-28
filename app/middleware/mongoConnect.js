'use strict';
import * as db from 'mongodb';

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;


let server = null;
exports.getConfig = function(mongoConfig) {
  console.log('011====', mongoConfig);
}

/**
 *     host: '',
 port: '',
 database: '',
 user: '',
 password: '',
 poolSize: 100,
 * @param mongoConfig
 * @constructor
 */

function DB(mongoConfig) {
  if (db) {
    return;
  }
  server = new mongodb.Server(mongoConfig.host, mongoConfig.port, { poolSize: mongoConfig.poolSize, auto_reconnect: true });
  const mongoclient = new MongoClient(server, { w: -1 });
  mongoclient.open(function(err, client) {
    if (err) {
      console.log(err);
      return;
    }
    dbClient = client;
    const opendb = client.db('admin');
    opendb.authenticate(mongoConfig.user, mongoConfig.password, {}, function(err, result) {
      if (!err && result) {
        db = client.db(dbName);
        connectedDb[dbName] = db;
        console.log('connected to db[' + dbName + '] success!');
        // initDbConnects();
      } else {
        console.log(err);
        return;
      }
    });
  });
}

exports.connectDb = function(mongoConfig) {
  if (!db) {
    DB(mongoConfig);
    console.log('connecting to db ....');
  }
}

exports.db = function(dbName) {
  if (dbName) {
    if (typeof dbName === 'string') {
      if (!connectedDb[dbName]) {
        connectedDb[dbName] = db.db(dbName);
      }
      return connectedDb[dbName];
    } else {
      return db;
    }
  } else {
    return db;
  }
}


exports.getDb = function (name) {
  if (!connectedDb[name]) {
    connectedDb[name] = db.db(name);
  }
  return connectedDb[name];
}

