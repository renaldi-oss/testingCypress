Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
  })

  describe('barang jadi', () => {

    it('add barang jadi', () => {
      cy.visit('http://127.0.0.1:8000/')
      cy.get('#username').type("admin")
      cy.get('#password').type("admin")
      cy.get('.btn').click()
      cy.get(':nth-child(4) > .d-flex > .mb-0').click()
      cy.get('.col-md > .btn-salmon').click({force:true})
  
      cy.get('#name').type("indomie",{force:true})
      cy.get('#unit').select("Dus",{force:true})
      cy.get('#stock').type("1",{force:true})
      cy.get('#minimum_stock').type("1",{force:true})
      cy.get('#base_price').type("10000",{force:true})
      cy.get('#profit').type("15000",{force:true})
      cy.get('#discount').type("5",{force:true})
      cy.get('.col-md > form > .btn').click({force:true})
      cy.wait(5000)
      
    })
    
    it('cari barang',()=>{
      cy.visit('http://127.0.0.1:8000/')
      cy.get('#username').type("admin")
      cy.get('#password').type("admin")
      cy.get('.btn').click()
      cy.get(':nth-child(4) > .d-flex > .mb-0').click()
      cy.get('.navbar-toggler-icon').click()
      cy.get('label > input').type("indomie",{force:true})
      cy.contains("indomie")
    })

    it('edit barang',()=>{
      cy.visit('http://127.0.0.1:8000/')
      cy.get('#username').type("admin")
      cy.get('#password').type("admin")
      cy.get('.btn').click()
      cy.get(':nth-child(4) > .d-flex > .mb-0').click()
      cy.get('.navbar-toggler-icon').click()
  
      cy.get(':nth-child(1) > :nth-child(11) > .btn-warning').click({force:true})
      cy.get('#name').type(" editan",{force:true})
      cy.get('.col-md > form > .btn').click({force:true})
      cy.wait(5000)
    })
    it('Hapus barang',()=>{
      cy.visit('http://127.0.0.1:8000/')
      cy.get('#username').type("admin")
      cy.get('#password').type("admin")
      cy.get('.btn').click()
      cy.get(':nth-child(4) > .d-flex > .mb-0').click()
      cy.get('.navbar-toggler-icon').click()
      cy.get(':nth-child(1) > :nth-child(11) > form > .btn').click({force:true})
      cy.wait(5000)
    })
  })



