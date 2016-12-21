import express from 'express';
import { ParseServer } from 'parse-server';

import Constants from './constants';

const app = express();

// Create and mount Parse server
const parseServer = new ParseServer(Constants.ParseConfig)
app.use(Constants.ParseServerMount, parseServer);

// Mount webhooks
// console.log(ParseCloud);
// app.use(Constants.ParseWebhookMount, ParseCloud.app)
//
app.listen(Constants.Port, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Live on port ${Constants.Port}`);
});
