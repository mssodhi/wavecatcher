const express = require('express');
const graphHttp = require('express-graphql');
const logger = require('morgan');
const bodyParser = require('body-parser');
const router = express.Router();

const portfolioRoutes = require('./portfolio/portfolio-routes');
const songsRoutes = require('./songs/songs-routes');
const intprepRoutes = require('./intPrep/intprep-routes');
const config = require('./shared/config');
const db = require('./shared/db');
const graphSchema = require('./graph/schema');

let app = express();
app.set('port', 3000);
app.set('x-power-by', false);

app.use(logger('dev'));
app.use(bodyParser.json({limit: '16mb'}));
app.use(bodyParser.urlencoded({extended: false}));

db.connect(config.MONGO_URL);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, shibtoken');

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

router.use('/graph', graphHttp(req => {
  return {
    schema: graphSchema,
    graphiql: true
  }
}));

router.use('/songs', songsRoutes);
router.use('/portfolio', portfolioRoutes);
router.use('/intprep', intprepRoutes)

app.use(config.baseUrl, router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {

  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });

});

app.listen(app.get('port'), function () {
  console.log('Express server listening on port', app.get('port'));
});

module.exports = app;
