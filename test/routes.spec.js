/* eslint-disable no-undef */
import request from 'supertest';

import app from '../app.js';
import server from '../index.js';

import { name, version, help } from '../routes/index.js';

afterAll(() => {
  server.close();
});

describe('GET request', () => {
  it('should responds with json', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('should responds with the name and version', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(
        {
          name,
          version,
        },
        done
      );
  });
});

describe('POST request', () => {
  it('should responds with json', (done) => {
    const text = '';

    request(app)
      .post('/command')
      .send({ text })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('should responds with the version', (done) => {
    const text = 'version';

    request(app)
      .post('/command')
      .send({ text })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(
        {
          response_type: 'in_channel',
          text: version,
        },
        done
      );
  });

  it('should responds with the help', (done) => {
    const text = 'help';

    request(app)
      .post('/command')
      .send({ text })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(
        {
          response_type: 'in_channel',
          text: help,
        },
        done
      );
  });

  it('should responds with the roman numeral MMXXI', (done) => {
    const text = '2021';

    request(app)
      .post('/command')
      .send({ text })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(
        {
          response_type: 'in_channel',
          text: 'MMXXI',
        },
        done
      );
  });

  it('should responds with the number 153', (done) => {
    const text = 'CLIII';

    request(app)
      .post('/command')
      .send({ text })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(
        {
          response_type: 'in_channel',
          text: 153,
        },
        done
      );
  });
});
