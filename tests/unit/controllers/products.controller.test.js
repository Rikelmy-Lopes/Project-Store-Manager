const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productsController = require('../../../src/controllers/products.controller')

const productsService = require('../../../src/services/index')

const { products } = require('./mock/products.controller.mock')

describe('Testes de unidade do Controller de products', () => {
  afterEach(sinon.restore)

  it('Listando todos os produtos', async () => {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'findAll').resolves({ type: null, message: products })

    await productsController.listAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });

    it('Listando produto por Id', async () => {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    req.params = sinon.stub().returns({
      id: 1
    })

    sinon.stub(productsService, 'findById').resolves({ type: null, message: products[0] })

    await productsController.listProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products[0]);
  });

    it('Listando produto por Id', async () => {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    req.params = sinon.stub().returns({
      id: 1
    })

    sinon.stub(productsService, 'findById').resolves({ type: 'PRODUCT NOT FOUND', message: 'Product not found' })

    await productsController.listProductById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
      });
    
    it('Adicionando um novo Produto', async () => {
    const res = {};
      const req = {
        body: {
        name: 'chocolate',
      }
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'addProduct').resolves({ type: null, message: 4 })

    await productsController.addProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({ name: 'chocolate', id: 4 });
      });
  
 })