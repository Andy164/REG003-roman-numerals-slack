import express, { urlencoded, json } from 'express';
import cors from 'cors';

import routes from './routes/index.js';
import port from './config.js';

const app = express();

app.set('port', port);

/*
 * Parse application/x-www-form-urlencoded && application/json
 * Use body-parser's `verify` callback to export a parsed raw body
 * that you need to use to verify the signature
 */

const rawBodyBuffer = (req, res, buf, encoding) => {
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || 'utf8');
  }
};

app.use(cors());
app.use(urlencoded({ verify: rawBodyBuffer, extended: true }));
app.use(json({ verify: rawBodyBuffer }));

app.use(routes);

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.info(`App listening on port ${app.get('port')}`);
});
