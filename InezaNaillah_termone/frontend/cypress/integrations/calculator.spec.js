describe('Calculator', () => {
    xit('Full Calculation Process', () => {

  
      // check = button
      cy.get('[data-cy*="digits-div"]').within(() =>
        cy
          .findByText(/=/i)
          .should('be.visible')
          .click()
      )

      // Check button status
      cy.findByRole('button', { name: /=/i })
        .should('not.be.disabled')
        .click()
  
  
      // select enable
      cy.waitUntil(() =>
        cy
          .get('*[data-cy="card-menu"]', { timeout: 10000 })
          .then((item) => item.last().click())
      )

      cy.findByText(/2/i).should('not.exist')
  

      cy.get('*[data-cy="card-menu"]').last().click({ force: true })
      cy.findByRole('menuitem', { name: /+/i }).click({
        force: true,
      })
  
      // send
      cy.findByRole('button', { name: /-/i })
        .should('not.be.disabled')
        .click()

    })
  })
  