module.exports = {
  baseUrl: process.env.baseUrl || '',
  MONGO_URL: process.env.baseUrl || 'mongodb://localhost:27017/wavecatcher',
  MY_SQL: {
    url: process.env.baseUrl || 'soundbox.cfqj53afsnvx.us-west-2.rds.amazonaws.com:3306',
    user: 'admin',
    password: '2b3a6853-b742-4715-9e45-a50da02b97f6',
    database: 'soundbox'
  }
};
