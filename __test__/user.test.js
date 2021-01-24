const request = require('supertest')
const app = require('../app')
const models = require('../models/')
const seedUsers = require('./helpers/seedUsers')
const clearUsers = require('./helpers/clearUsers')

beforeAll((done) => {
  seedUsers()
    .then(() => {
      done()
    })
    .catch(console.log)
})

afterAll((done) => {
  clearUsers()
    .then(() => {
      models.sequelize.close()
      done()
    })
    .catch(console.log)
})

describe('POST /login', () => {

  // success case
  it('should send response with 200 status code', (done) => {
    const body = {
      email: 'admin@mail.com',
      password: 'thisisnotapassword'
    }

    request(app)
      .post('/login')
      .send(body)
      .end((err, res) => {
        if (err) done(err)

        expect(res.statusCode).toEqual(200)
        expect(typeof res.body).toEqual('object')

        expect(res.body).toHaveProperty('access_token')
        expect(typeof res.body.access_token).toEqual('string')

        done()
      })
  })

  // unauthorised case
  it('should send response with 401 status code', (done) => {
    const body = {
      email: 'admin@mail.com',
      password: 'failedpassword'
    }

    request(app)
      .post('/login')
      .send(body)
      .end((err, res) => {
        if (err) done(err)

        expect(res.statusCode).toEqual(401)
        expect(typeof res.body).toEqual('object')

        expect(res.body).toHaveProperty('errors')
        expect(Array.isArray(res.body.errors)).toEqual(true)
        expect(res.body.errors).toEqual(
          expect.arrayContaining(['Wrong email / password'])
        )

        done()
      })
  })

  it('should send response with 404 status code', (done) => {
    const body = {
      email: 'usertest@mail.com',
      password: 'testingpassword'
    }

    request(app)
      .post('/login')
      .send(body)
      .end((err, res) => {
        if (err) done(err)

        expect(res.statusCode).toEqual(404)
        expect(typeof res.body).toEqual('object')

        expect(res.body).toHaveProperty('errors')
        expect(Array.isArray(res.body.errors)).toEqual(true)
        expect(res.body.errors).toEqual(
          expect.arrayContaining(['Not found'])
        )

        done()
      })
  })

  it('should send response with 400 status code', (done) => {
    const body = {
      email: '',
      password: ''
    }

    request(app)
      .post('/login')
      .send(body)
      .end((err, res) => {
        if (err) done(err)

        expect(res.statusCode).toEqual(400)
        expect(typeof res.body).toEqual('object')

        expect(res.body).toHaveProperty('errors')
        expect(Array.isArray(res.body.errors)).toEqual(true)
        expect(res.body.errors).toEqual(
          expect.arrayContaining(['Email / password must be filled'])
        )

        done()
      })
  })
})
