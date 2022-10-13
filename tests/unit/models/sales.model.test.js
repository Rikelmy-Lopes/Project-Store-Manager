const { expect } = require('chai');
const sinon = require('sinon');
const salesModel = require('../../../src/models/sales.model');

const connection = require('../../../src/models/connecttion')

const { allSales, salesId1, saleId2 } = require('./mock/sales.model.mock')

describe('Testes de unidade do Model de sales', () => {
  afterEach(sinon.restore)
  it('Adicionando uma venda com sucesso', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);
    const result = await salesModel.addSale([{
      productId: 3,
      quantity: 1,
    }])
    expect(result).to.be.deep.equal(4)
  });

  it('Testando a listadem de todos as vendas ', async () => {
    sinon.stub(connection, 'execute').resolves([allSales])
    const result = await salesModel.findAll();

    expect(result).to.be.deep.equal(allSales)
  });

  it('Testando a listagem de uma venda por id 1', async () => {
    sinon.stub(connection, 'execute').resolves([salesId1])
    const result = await salesModel.findById(1)
    
    expect(result).to.be.deep.equal(salesId1)
  });

    it('Testando a listagem de uma venda por id 2', async () => {
    sinon.stub(connection, 'execute').resolves([saleId2])
    const result = await salesModel.findById(2)
    
    expect(result).to.be.deep.equal(saleId2[0])
  });
})
 