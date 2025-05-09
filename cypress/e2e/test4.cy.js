describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://example.cypress.io')
      expect(true).to.be.false
    })
  })