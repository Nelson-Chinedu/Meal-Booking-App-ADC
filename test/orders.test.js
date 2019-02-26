import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();

describe('Orders Route Test', () => {
  // Test /Get route
  describe('/Get order', () => {
    it('get orders', (done) => {
      chai.request(app)
        .get('/api/v1/orders')
        .end((err, res) => {
          res.should.have.property('status', 200);
          console.log(res.body);
          done();
        });
    });
  });
  // Test /Post route
  describe('/POST order', () => {
    it('post order', (done) => {
      const order = {
        name: 'eba and egusi soup',
        size: 'small',
        price: 1500,
      };
      chai.request(app)
        .post('/api/v1/orders')
        .send(order)
        .end((err, res) => {
          res.should.have.property('status', 200);
          console.log(res.body);
          done();
        });
    });
  });
  // Test /Get:id route
  describe('/GET/:id order', () => {
    it('get order by id', (done) => {
      chai.request(app)
        .get(`/api/v1/orders/ ${1}`)
        .end((err, res) => {
          res.should.have.property('status', 200);
          console.log(res.body);
          done();
        });
    });
  });
  // Update Order test
  describe('/PUT/:id order', () => {
    it('update order by id', (done) => {
      const order = {
        name: 'eba and egusi soup',
        size: 'small',
        price: 1500,
      };
      chai.request(app)
        .put(`/api/v1/orders/ ${1}`)
        .send(order)
        .end((err, res) => {
          res.should.have.property('status', 200);
          console.log(res.body);
          done();
        });
    });
  });
});
