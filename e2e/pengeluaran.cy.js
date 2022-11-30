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
    cy.get(':nth-child(6) > .d-flex > .mb-0').click()
    cy.get('.col-md > .btn-salmon').click({force:true})
    cy.get('#name').type("ekstra", {force:true})
    cy.get('#description').type("membeli jagung", {force:true})
    cy.get('#cost').type("100000", {force:true})
    cy.get('.col-md > form > .btn').click({force:true})
  })
})

describe('ubah data', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('#username').type("admin")
    cy.get('#password').type("admin")
    cy.get('.btn').click()
    cy.get(':nth-child(6) > .d-flex > .mb-0').click()
    cy.get(':nth-child(1) > :nth-child(8) > .btn-warning').click({force:true})
    cy.get('#name').clear({force:true})
    cy.get('#name').type("extras", {force:true})
    cy.get('#description').clear({force:true})
    cy.get('#description').type("membeli tomat", {force:true})
    cy.get('#cost').clear({force:true})
    cy.get('#cost').type("200000", {force:true})
    cy.get('.col-md > form > .btn').click({force:true})
  })
})

describe('hapus data', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('#username').type("admin")
    cy.get('#password').type("admin")
    cy.get('.btn').click()
    cy.get(':nth-child(6) > .d-flex > .mb-0').click()
    cy.get(':nth-child(1) > :nth-child(8) > form > .btn').click({force:true})
  })
})