const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../src/models/products.model');

const connection = require('../../../src/models/connecttion')
const { products } = require('./mock/products.model.mock')

describe('Testes de unidade do Model de products', () => {
  afterEach(sinon.restore)
  it('Listando produtos', async () => {
    sinon.stub(connection, 'execute').resolves([products]);
    const result = await productsModel.findAll();
    expect(result).to.be.deep.equal(products);
  });

    it('Listando produto por id que existe', async () => {
    sinon.stub(connection, 'execute').resolves([[products[0]]]);
    const result = await productsModel.findById(1);
    expect(result).to.be.deep.equal(products[0]);
    });
  
    it('Adicionando um produto com sucesso', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);
    const result = await productsModel.addProduct({name: 'chocolate'});
    expect(result).to.be.deep.equal(4);
    });
  
    it('Listando produto por id que não existe', async () => {
    sinon.stub(connection, 'execute').resolves([[undefined]]);
    const result = await productsModel.productIdExist(999);
    expect(result).to.be.deep.equal({});
    });
})
 