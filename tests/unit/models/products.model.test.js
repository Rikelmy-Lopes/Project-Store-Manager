const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../src/models/index');

const connection = require('../../../src/models/connecttion')
const { products } = require('./mock/products.model.mock')

describe('Testes de unidade do Model de products', () => {
  afterEach(sinon.restore)
  it('Listando produtos', async () => {
    sinon.stub(connection, 'execute').resolves([products]);
    const result = await productsModel.findAll();
    expect(result).to.be.deep.equal(products);
  });

    it('Listando produto por id', async () => {
    sinon.stub(connection, 'execute').resolves([[products[0]]]);
    const result = await productsModel.findById(1);
    expect(result).to.be.deep.equal(products[0]);
  });
 })