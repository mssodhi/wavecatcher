let db = require('./../shared/mongodb');

let model = {
  add: function (data) {
    console.log(data);
    db.collection('songs').insertOne({
      userId: data.userId,
      trackId: data.trackId,
      date: new Date()
    });

    return db.collection('songs').findOne({name: 'manu'});

  }
};

module.exports = model;
