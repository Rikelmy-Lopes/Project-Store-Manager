const { expect } = require('chai');
const sinon = require('sinon');
const salesModel = require('../../../src/models/sales.model');

const connection = require('../../../src/models/connecttion')

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
})
 