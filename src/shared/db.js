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
    var MY_SQL = config.MY_SQL;
    this.mysqlDB = mysql.createConnection({
      host     : MY_SQL.url,
      user     : MY_SQL.user,
      password : MY_SQL.password,
      database : MY_SQL.database
    });

    this.mysqlDB.connect();
  },

  collection: function (name) {
    return service.mongoDB.collection(name);
  }
};

module.exports = service;
