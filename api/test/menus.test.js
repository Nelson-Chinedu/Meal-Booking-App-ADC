import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();

describe('Menus Route Test', () => {
  // /Get menu route
  describe('/GET menu', () => {
    it('get menu', (done) => {
      chai.request(app)
        .get('/api/v1/menu')
        .end((err, res) => {
          res.should.have.property('status', 200);
          console.log(res.body);
          done();
        });
    });
  });
  // /Post menu route
  describe('/POST menu', () => {
    it('post menu', (done) => {
      const menu = {
        name: 'eba and egusi soup',
        size: 'small',
        price: 1500,
      };
      chai.request(app)
        .post('/api/v1/menu')
        .send(menu)
        .end((err, res) => {
          res.should.have.property('status', 200);
          console.log(res.body);
          done();
        });
    });
  });
});
