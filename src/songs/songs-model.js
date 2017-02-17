let db = require('./../shared/db');

let model = {
  add: function (data) {
    db.collection('songs').insertOne({
      userId: data.userId,
      trackId: data.trackId,
      date: new Date()
    });


    // db.mysqlDB.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    //   if (error) throw error;
    //   console.log('The solution is: ', results[0].solution);
    // });

    return db.collection('songs').findOne({name: 'manu'});
  }
};

module.exports = model;
