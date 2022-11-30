Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('membuka halaman', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/')
  })
})

describe('order', () => {
  it('passes', () => {
    cy.get('#username').type("admin")
    cy.get('#password').type("admin")
    cy.get('.btn').click()
    cy.get('.navbarLeftMenu > .btn-salmon').click()
    cy.get(':nth-child(1) > .card > .card-body > form > .atc-button').click({force:true})
    cy.get(':nth-child(2) > .card > .card-body > form > .atc-button').click({force:true})
    cy.get(':nth-child(3) > .card > .card-body > form > .atc-button').click({force:true})
    cy.get('.cart-button').click()
    cy.get('.checkout-button').click()
    cy.wait(1000)
  })
})
describe('tambahbarang', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('#username').type("admin")
    cy.get('#password').type("admin")
    cy.get('.btn').click()
    cy.get('.navbarLeftMenu > .btn-salmon').click()
    cy.get(':nth-child(1) > .card > .card-body > form > .atc-button').click({force:true})
    cy.get(':nth-child(2) > .card > .card-body > form > .atc-button').click({force:true})
    cy.get(':nth-child(3) > .card > .card-body > form > .atc-button').click({force:true})
    cy.get('.cart-button').click()
    cy.get(':nth-child(3) > :nth-child(2) > .col-md-10 > .cart-buttons > .increase').click()
    cy.get(':nth-child(6) > :nth-child(2) > .col-md-10 > .cart-buttons > .decrease > .bi').click()
    cy.get('.checkout-button').click()
    cy.wait(1000)

    
  })
})
describe('kurangbarang', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('#username').type("admin")
    cy.get('#password').type("admin")
    cy.get('.btn').click()
    cy.get('.navbarLeftMenu > .btn-salmon').click()
    cy.get(':nth-child(1) > .card > .card-body > form > .atc-button').click({force:true})
    cy.get(':nth-child(2) > .card > .card-body > form > .atc-button').click({force:true})
    cy.get(':nth-child(3) > .card > .card-body > form > .atc-button').click({force:true})
    cy.get('.cart-button').click()
    cy.get(':nth-child(6) > :nth-child(2) > .col-md-10 > .cart-buttons > .decrease > .bi').click()
    cy.get('.checkout-button').click()
    
  })
})











