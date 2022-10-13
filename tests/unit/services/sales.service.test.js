const { expect } = require('chai');
const sinon = require('sinon');

const salesModel = require('../../../src/models/sales.model')
const salesService = require('../../../src/services/sales.service')

const { allSales, salesId1 } = require('./mock/sales.service.mock')

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
  
  it('Encontrando todas as vendas ', async () => {
    sinon.stub(salesModel, 'findAll').resolves(allSales)
    const result = await salesService.findAll();

    expect(result).to.be.deep.equal({ type: null, message: allSales})
  });

  it('Encontrando uma venda por id com sucesso ',async () => {
    sinon.stub(salesModel, 'findById').resolves(salesId1)
    const result = await salesService.findById(1)

    expect(result).to.be.deep.equal({type: null, message: salesId1})
  });

  it('Testando quando a venda não existe ', async () => {
    sinon.stub(salesModel, 'findById').resolves(undefined)
    const result = await salesService.findById(999)

    expect(result).to.be.deep.equal({ type: 'PRODUCT NOT FOUND', message: 'Sale not found' })
  });

    it('Testando quando passa um id invalido ', async () => {
    const result = await salesService.findById('NaN')

    expect(result).to.be.deep.equal({ type: 'INVALID_VALUE', message: '"id" must be a number' })
  });

 })
