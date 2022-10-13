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
  
    it('Verifica se o ids existem com sucesso', async () => {
    sinon.stub(productsModel, 'productIdExist').resolves({ id: 1, name: 'Martelo de Thor'})
      const result = await productsService.productsIdsExist([{ 
        productId: 1,
        quantity: 1,
    }]);

    expect(result).to.be.deep.equal(true)
    })
  
    it('Verifica se os ids nao existem', async () => {
    sinon.stub(productsModel, 'productIdExist').resolves({})
      const result = await productsService.productsIdsExist([{ 
        productId: 999,
        quantity: 1,
    }]);

    expect(result).to.be.deep.equal(false)
    })
  
      it('Verifica se o id existe com sucesso', async () => {
    sinon.stub(productsModel, 'productIdExist').resolves({ id: 1, name: 'Martelo de Thor'})
      const result = await productsService.productIdExist(1);

    expect(result).to.be.deep.equal(true)
      })
  
    it('Verifica se o id existe com erro', async () => {
    sinon.stub(productsModel, 'productIdExist').resolves({})
      const result = await productsService.productIdExist(999);

    expect(result).to.be.deep.equal(false)
    })
  
    it('Atualiza um produto com sucesso', async () => {
    sinon.stub(productsModel, 'updateProduct').resolves(undefined)
    const result = await productsService.updateProduct({name: 'granada'}, 1);

    expect(result).to.be.equal(undefined)
    })
  
    it('Tenta atualizar um produto com "product" invalido', async () => {
    sinon.stub(productsModel, 'updateProduct').resolves(undefined)
    const result = await productsService.updateProduct({name: NaN}, 1);

    expect(result).to.be.deep.equal({ type: 'INVALID_VALUE', message: '"name" must be a string' })
    })
  
    it('Tenta atualizar um produto com "id" invalido', async () => {
    sinon.stub(productsModel, 'updateProduct').resolves(undefined)
    const result = await productsService.updateProduct({name: 'granada'}, 'Não é um id');

    expect(result).to.be.deep.equal({ type: 'INVALID_VALUE', message: '"id" must be a number' })
    })
  
    it('Testa se deleta um produto com sucesso', async () => {
    sinon.stub(productsModel, 'deleteProduct').resolves(undefined)
    const result = await productsService.deleteProduct(1);

    expect(result).to.be.deep.equal(undefined)
    })
  
    it('Tenta deletar um produto com id invalido', async () => {
    sinon.stub(productsModel, 'deleteProduct').resolves(undefined)
    const result = await productsService.deleteProduct(NaN);

    expect(result).to.be.deep.equal({ type: 'INVALID_VALUE', message: '"id" must be a number' })
    })

 })