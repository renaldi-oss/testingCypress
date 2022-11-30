Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    })
  
    describe('Pengguna', () => {
        it('tambah penguna baru', () => {
            cy.visit('http://127.0.0.1:8000/')
            cy.get('#username').type("admin")
            cy.get('#password').type("admin")
            cy.get('.btn').click()
            cy.get(':nth-child(4) > .d-flex > .mb-0').click()
            // cy.get('.col-md > .btn-salmon').click({force:true})
            cy.visit('http://127.0.0.1:8000/users')

            cy.get('.col-md > .btn-salmon').click({force:true})
            cy.get('#name').type("ramona",{force:true})
            cy.get('#email').type("mona@gmail.com",{force:true})
            cy.get('#address').type("malang",{force:true})
            cy.get('#phone_number').type("12345678",{force:true})
            cy.get('#username').type("ramona",{force:true})
            cy.get('#password').type("ramonaaa",{force:true})
            cy.get('#password_confirmation').type("ramonaaa",{force:true})
            cy.get('#role').select("Staff",{force:true})
            cy.get('.col-md > form > .btn').click({force:true})
        })
        
        it('edit pengguna', () => {
            cy.visit('http://127.0.0.1:8000/')
            cy.get('#username').type("admin")
            cy.get('#password').type("admin")
            cy.get('.btn').click()
            cy.get(':nth-child(4) > .d-flex > .mb-0').click()
            
            cy.visit('http://127.0.0.1:8000/users')

            cy.get('.btn-warning').click({force:true}) 
            cy.get('#name').type("andani",{force:true})
            cy.get('#password').type("ramonaaa",{force:true})
            cy.get('#password_confirmation').type("ramonaaa",{force:true})
            cy.get(':nth-child(2) > form > .btn').click({force:true}) 
        })

        it('hapus pengguna', () => {
            cy.visit('http://127.0.0.1:8000/')
            cy.get('#username').type("admin")
            cy.get('#password').type("admin")
            cy.get('.btn').click()
            cy.get(':nth-child(4) > .d-flex > .mb-0').click()
            
            cy.visit('http://127.0.0.1:8000/users')

            cy.get('.odd > :nth-child(10) > form > .btn').click({force:true})  
        })
    })
  
  
  
  