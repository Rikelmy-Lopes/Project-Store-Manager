const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/products.model')
const  productsService = require('../../../src/services/products.service')
const { products } = require('./mock/products.service.mock')

describe('Testes de unidade do Service de products', () => {
afterEach(sinon.restore)

  it('listagem de todos os produtos ', async () => {
    sinon.stub(productsModel, 'findAll').resolves(products)

    const result = await productsService.findAll()
    expect(result.message).to.be.deep.equal(products);
  });

  it('busca um produto com sucesso', async () => {
    sinon.stub(productsModel, 'findById').resolves(products[0])

    const result = await productsService.findById(1);

    expect(result.message).to.be.deep.equal(products[0])
  })

    it('busca um produto inexistente', async () => {
    sinon.stub(productsModel, 'findById').resolves(undefined)

    const result = await productsService.findById(999);

    expect(result.type).to.equal('PRODUCT NOT FOUND')
  })

    it('busca um produto com id incorreto', async () => {
    sinon.stub(productsModel, 'findById').resolves(undefined)

    const result = await productsService.findById('NaN');

    expect(result.type).to.equal('INVALID_VALUE')
    })
  
    it('Adicionando um novo Produto com sucesso', async () => {
    sinon.stub(productsModel, 'addProduct').resolves(4)

    const result = await productsService.addProduct({ name: 'chocolate'});

    expect(result).to.be.deep.equal({ type: null, message: 4})
    })
  
    it('Adicionando um novo Produto com "name" errado', async () => {

    const result = await productsService.addProduct({ name: 12345});

    expect(result).to.be.deep.equal({ type: 'INVALID_VALUE', message: '"name" must be a string' })
  })

 })