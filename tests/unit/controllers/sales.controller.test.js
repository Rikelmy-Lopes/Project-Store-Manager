const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const salesController = require('../../../src/controllers/sales.controller')

const salesService = require('../../../src/services/sales.service')

const { products, expectedPostSale } = require('./mock/products.controller.mock')

describe('Testes de unidade do Controller de sales', () => { 
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
 })