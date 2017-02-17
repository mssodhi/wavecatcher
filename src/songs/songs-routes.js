let router = require('express').Router();

let model = require('./songs-model');

router.post('/add', function(req, res, next) {
  model.add(req.body).then(results => res.send(results), next);
});

module.exports = router;
