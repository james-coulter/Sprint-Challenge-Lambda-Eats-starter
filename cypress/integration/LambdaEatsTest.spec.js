import {v4 as uuid} from 'uuid'

const username = uuid().slice(0, 5)


  
  describe('User Form', () => {
    it('can navigate to the site', () => {
      cy.visit('http://localhost:3000')
    })



  it('can submit new orders (happy)', () => {
          cy.get('.orderBtn') 
            .click()
          cy.get('input[name="name"]')
            .type(username)
            .should('have.value', username)

            cy.get('[type="checkbox"]').check()

            cy.get('[data-cy=submit]').click()
      })

    it('Displays Validation Errors', () => {
        cy.get('input[name="name"]')
            .type(username)
            .clear()
    })

 })