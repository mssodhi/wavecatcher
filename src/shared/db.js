const MongoClient = require('mongodb').MongoClient;

let service = {
  mongoDB: null,
  connectMongo: function (url) {
    return MongoClient.connect(url).then(
      db => {
        this.mongoDB = db;
      },
      err => console.error('mongo err: ', err)
    );
  },

  collection: function (name) {
    return service.mongoDB.collection(name);
  }
};

module.exports = service;
