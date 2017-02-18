let router = require('express').Router();

let model = require('./portfolio-model');

router.get('/projects', function(req, res, next) {
  model.getProjects().then(results => res.send(results), next);
});

router.get('/courses', function(req, res, next) {
  model.getCourses().then(results => res.send(results), next);
});

module.exports = router;
