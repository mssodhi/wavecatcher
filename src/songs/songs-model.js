let db = require('./../shared/db');

let model = {
  add: function (data) {

    db.collection('songs').insertOne({
      userId: data.userId,
      trackId: data.trackId,
      date: new Date()
    });

    var query = 'INSERT into wavecatcher.logs (`userId`, `trackId`) values (\''+ data.userId + '\', \'' + data.trackId + '\');';
    db.mysqlDB.query(query, function (error, results, fields) {
      if (error) throw error;
    });

    return db.collection('songs').findOne({name: 'manu'});
  }
};

module.exports = model;
