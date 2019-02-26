import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();


describe('Meals Route Test', () => {
  // /Get meals route
  describe('/GET all meals', () => {
    it('get meals', (done) => {
      chai.request(app)
        .get('/api/v1/meals')
        .end((err, res) => {
          res.should.have.property('status', 200);
          console.log(res.body);
          done();
        });
    });
  });
  // /Post meals route
  describe('/POST meal', () => {
    it('post meal', (done) => {
      const meal = {
        name: 'eba and egusi soup',
        size: 'small',
        price: 1500,
      };
      chai.request(app)
        .post('/api/v1/meals')
        .send(meal)
        .end((err, res) => {
          res.should.have.property('status', 200);
          console.log(res.body);
          done();
        });
    });
  });
  // /Get meal by :id route
  describe('/GET/:id meal', () => {
    it('get meal by id', (done) => {
      chai.request(app)
        .get(`/api/v1/meals/ ${1}`)
        .end((err, res) => {
          res.should.have.property('status', 200);
          console.log(res.body);
          done();
        });
    });
  });
  // Update meal route
  describe('/PUT/:id meal', () => {
    it('update meal by id', (done) => {
      const meal = {
        name: 'eba and egusi soup',
        size: 'small',
        price: 1500,
      };
      chai.request(app)
        .put(`/api/v1/meals/ ${1}`)
        .send(meal)
        .end((err, res) => {
          res.should.have.property('status', 200);
          console.log(res.body);
          done();
        });
    });
  });
  // delete meal route
  describe('/DELETE/:id meal', () => {
    it('delete meal by id', (done) => {
      chai.request(app)
        .delete(`/api/v1/meals/ ${1}`)
        .end((err, res) => {
          res.should.have.property('status', 200);
          console.log(res.body);
          done();
        });
    });
  });
});
