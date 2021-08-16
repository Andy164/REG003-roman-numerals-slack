import express, { urlencoded, json } from 'express';
import cors from 'cors';

import routes from './routes/index.js';
import port from './config.js';

const app = express();

app.set('port', port);

app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());

app.use(routes);

app.listen(app.get('port'), () => {
  console.info(`App listening on port ${app.get('port')}`);
});
