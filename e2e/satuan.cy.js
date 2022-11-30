Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('login', () => {
  it ('login', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('#username').type('admin')
    cy.get('#password').type('admin')
    cy.get('.btn').click()
    })
  })
  describe('satuan', () => {
    it('satuan', () =>{
    cy.visit('http://127.0.0.1:8000/')
    cy.get('#username').type('admin')
    cy.get('#password').type('admin')
    cy.get('.btn').click()
    cy.get(':nth-child(12) > .d-flex').click({force:true})
    cy.get('.col-md > .btn-salmon').click({force:true})
    cy.get('#name').type('Minyak')
    cy.get('.col-md > form > .btn').click({force:true})
  })
})
describe('ubah', () => {
  it('ubah', () =>{
  cy.visit('http://127.0.0.1:8000/')
  cy.get('#username').type('admin')
  cy.get('#password').type('admin')
  cy.get('.btn').click()
  cy.get(':nth-child(12) > .d-flex').click({force:true})
  cy.get(':nth-child(1) > :nth-child(3) > .btn-warning').click({force:true})
  cy.get('#name').type(' Kecap')
  cy.get('.col-md > form > .btn').click({force:true})
 })
})
describe('hapus', () => {
  it('hapus', () =>{
  cy.visit('http://127.0.0.1:8000/')
  cy.get('#username').type('admin')
  cy.get('#password').type('admin')
  cy.get('.btn').click()
  cy.get(':nth-child(12) > .d-flex').click({force:true})
  cy.get(':nth-child(1) > :nth-child(3) > .d-inline > .btn').click({force:true})
 })
})
