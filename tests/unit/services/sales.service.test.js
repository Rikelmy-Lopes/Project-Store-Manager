const { expect } = require('chai');
const sinon = require('sinon');

const salesModel = require('../../../src/models/sales.model')
const salesService = require('../../../src/services/sales.service')

describe('Testes de unidade do Service de sales', () => { 
  afterEach(sinon.restore)
  it('Adicionando uma venda com sucesso ', async () => {
    sinon.stub(salesModel, 'addSale').resolves(4)
    const result = await salesService.addSale([{
      productId: 2,
      quantity: 1
    }])

    expect(result).to.be.deep.equal({ type: null, message: 4 });
  });

    it('Adicionando uma venda com error ', async () => {
    sinon.stub(salesModel, 'addSale').resolves(4)
    const result = await salesService.addSale({
      productId: 'ola mundo',
      quantity: 1,
    })
      
    expect(result).to.be.deep.equal({ type: 'INVALID_VALUE', message: '"sales" must be a array' });
  });
 })
