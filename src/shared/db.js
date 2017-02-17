const MongoClient = require('mongodb').MongoClient;
const mysql = require('mysql');

let service = {

  mongoDB: null,
  mysqlDB: null,
  connectMongo: function (url) {
    return MongoClient.connect(url).then(
      db => {
        this.mongoDB = db;
      },
      err => console.error('mongo err: ', err)
    );
  },

  connectMysql: function (config) {
    this.mysqlDB = mysql.createConnection({
      host     : config.url,
      user     : config.user,
      password : config.password,
      database : config.database
    });

    // this.mysqlDB.connect();
  },

  collection: function (name) {
    return service.mongoDB.collection(name);
  }
};

module.exports = service;
