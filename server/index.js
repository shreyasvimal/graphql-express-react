const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
const apiRouter = require('./graphql');
const uiRouter = require('./app');
const path = require('path');

const app = express();
app.use(cors());
app.use('/static', express.static(path.join(__dirname, 'app', 'build', 'static')));
app.use('/', express.static(path.join(__dirname, 'app', 'build')));
app.use('/api', apiRouter);
app.use('/app', uiRouter);

module.exports = app;
module.exports.handler = serverless(app);