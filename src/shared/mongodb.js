const MongoClient = require('mongodb').MongoClient;

var service = {

  db: null,
  connect: function (url) {
    return MongoClient.connect(url).then(
      db => {
        this.db = db;
      },
      err => console.error('mongo err: ', err)
    );
  },

  collection: function (name) {
    return service.db.collection(name);
  }
};

module.exports = service;
