const MongoClient = require('mongodb').MongoClient;

let service = {
  wavecatcher: null,

  connect: function(url) {
    return Promise.all([
      MongoClient.connect(url),
    ]).then(([wavecatcher]) => {
      this.wavecatcher = wavecatcher;
    },
    err => console.error('mongo error: ', err));
  }
};

module.exports = service;
