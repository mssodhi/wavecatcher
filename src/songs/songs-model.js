let db = require('./../shared/db');

let model = {
  add: function (data) {
    db.collection('songs').insertOne({
      userId: data.userId,
      track: data.track,
      date: new Date()
    });

    return db.collection('songs').findOne({name: 'manu'});
  }
};

module.exports = model;
