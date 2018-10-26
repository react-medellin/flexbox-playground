/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Set boxes width and height', () => {

    cy.get('#change-width-box')
      .clear()
      .type('80').should('have.value', '80')


    cy.get('#change-height-box')
      .clear()
      .type('80').should('have.value', '80')

    cy.get('[data-e2e=box-0]')
      .should('have.attr', 'width', '80')
      .should('have.attr', 'height', '80')

  })
})
