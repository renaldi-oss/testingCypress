Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('tambah data', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('#username').type("admin")
    cy.get('#password').type("admin")
    cy.get('.btn').click()
    cy.get(':nth-child(2) > .d-flex > .mb-0').click()
    cy.get('.col-md > .btn').click({force:true})
    cy.get('#name').type("daging kambing", {force:true})
    cy.get('#unit').select("Kg",{force:true})
    cy.get('#stock').type("100", {force:true})
    cy.get('#minimum_stock').type("1", {force:true})
    cy.get('.col-md > form > .btn').click({force:true})
  })
})



describe('ubah data', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('#username').type("admin")
    cy.get('#password').type("admin")
    cy.get('.btn').click()
    cy.get(':nth-child(2) > .d-flex > .mb-0').click()
    cy.get('.col-md > .btn').click({force:true})
    cy.get('#name').clear({force:true})
    cy.get('#name').type("daging sapi", {force:true})
    cy.get('#unit').select("Kg",{force:true})
    cy.get('#stock').clear({force:true})
    cy.get('#stock').type("101", {force:true})
    cy.get('#minimum_stock').clear({force:true})
    cy.get('#minimum_stock').type("2", {force:true})
    cy.get('.col-md > form > .btn').click({force:true})
  })
})

describe('hapus data', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('#username').type("admin")
    cy.get('#password').type("admin")
    cy.get('.btn').click()
    cy.get(':nth-child(2) > .d-flex > .mb-0').click()
    cy.get('.odd > :nth-child(8) > form > .btn').click({force:true})
  })
})