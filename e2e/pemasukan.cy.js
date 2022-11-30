Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('ubah data', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('#username').type("admin")
    cy.get('#password').type("admin")
    cy.get('.btn').click()
    cy.get(':nth-child(5) > .d-flex').click()
    cy.get(':nth-child(1) > :nth-child(6) > .btn-warning').click({force:true})
    cy.get('#products').type("PROD995", {force:true})
    cy.get('#amounts').type("100", {force:true})
    cy.get('#prices').type("109076", {force:true})
    cy.get('.order-2 > form > .btn').click({force:true})
  })
})

describe('hapus data transaksi', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('#username').type("admin")
    cy.get('#password').type("admin")
    cy.get('.btn').click()
    cy.get(':nth-child(5) > .d-flex').click()
    cy.get(':nth-child(1) > :nth-child(6) > form > .btn').click({force:true})
  })
})

describe('cetak struk', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('#username').type("admin")
    cy.get('#password').type("admin")
    cy.get('.btn').click()
    cy.get(':nth-child(5) > .d-flex').click()
    cy.get(':nth-child(1) > :nth-child(6) > .button-print').click({force:true},{multiple:true})
  })
}) 
