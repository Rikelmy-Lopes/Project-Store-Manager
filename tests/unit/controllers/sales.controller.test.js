const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const salesController = require('../../../src/controllers/sales.controller')

const salesService = require('../../../src/services/sales.service')

const { expectedPostSale } = require('./mock/products.controller.mock')

const {allSales, salesId1} = require('./mock/sales.controller.mock')

describe('Testes de unidade do Controller de sales', () => {
  afterEach(sinon.restore)

    it('Adicionando uma nova Venda', async () => {
    const res = {};
      const req = {
        body: [
          {
            productId: 3,
            quantity: 1
          }
        ]
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'addSale').resolves({ type: null, message: 3 })

    await salesController.addSales(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(expectedPostSale);
      });
  
    it('Buscando por todas as vendas', async () => {
    const res = {};
      const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'findAll').resolves({ type: null, message: allSales })

    await salesController.listAllSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSales);
    });
  
    it('Buscando venda por id que existe', async () => {
    const res = {};
      const req = {
        params: {
        id: 1
      }
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'findById').resolves({ type: null, message: salesId1 })

    await salesController.listSalesById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesId1);
    });
  
  it('Buscando venda por id que existe', async () => {
    const res = {};
      const req = {
        params: {
        id: 999
      }
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'findById').resolves({ type: 'PRODUCT NOT FOUND', message: 'Sale not found' })

    await salesController.listSalesById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Sale not found' });
      });
 })