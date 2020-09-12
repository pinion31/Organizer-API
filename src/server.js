const express = require('express');
const app = express();
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const users = require('./routes/users');

app.use(bodyParser.json());

app.use('/users', users);

app.use('/', (req, res) => {
  return res.status(200).json({message: 'Hello World'});
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(process.env.PORT || 3000, () => {
    console.log('App started for your convenience.');
  });
}

module.exports.handler = serverless(app);