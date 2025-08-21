const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
  it('responde con Hola Mundo', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toMatch(/Hola Mundo/);
  });
});
