import app from './app.js';
import port from './config.js';

app.set('port', port);

const server = app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.info(`App listening on port ${app.get('port')}`);
});

export default server;
