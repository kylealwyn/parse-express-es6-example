import express from 'express';
import { ParseServer } from 'parse-server';

import Constants from './constants';

// Create Express App
const app = express();

// Create and mount Parse server
const parseServer = new ParseServer(Constants.ParseConfig)
app.use(Constants.ParseServerMount, parseServer);

// Mount Express app
app.listen(Constants.Port, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Live on port ${Constants.Port}`);
});
