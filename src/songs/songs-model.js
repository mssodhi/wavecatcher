let db = require('./../shared/db');

let model = {
  add: function (data) {

    // var query = 'INSERT into wavecatcher.logs (`userId`, `trackId`) values (\''+ data.userId + '\', \'' + data.trackId + '\');';
    // db.mysqlDB.query(query, function (error, results, fields) {
    //   if (error) throw error;
    // });
    return new Promise(function (resolve, reject){
      db.collection('songs').insertOne({
        userId: data.userId,
        track: data.track,
        date: new Date()
      });
      resolve({});
    });

  }
};

module.exports = model;
