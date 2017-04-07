let router = require('express').Router();

let model = require('./intprep-model');

router.get('/courses', function(req, res, next) {
  model.getCourses().then(results => res.send(results), next);
});

router.get('/course/:id/questions', function(req, res, next) {
  model.getQuestionsForCourse(req.params.id).then(results => res.send(results), next);
});

module.exports = router;
