/// <reference types="cypress" />

import failOnConsoleError from "cypress-fail-on-console-error"


// let windowErrorSpy;

// Cypress.on('window:before:load', (win) => {
//   windowErrorSpy = cy.spy(win.console, 'error'); 
// });

const DELAY = 1000;

context('Verifying the Bad page', () => {

  // afterEach(() => {
  // });
  
  // beforeEach(() => {
  // })


  const link = 'https://www.w3.org/standards/badpage'

  it('SC01: Verify requesting badpage', () => {
    cy.request({url: link, failOnStatusCode: false })
    .then((response) => {
      //validates the response status
      expect(response.status).to.equal(400)
      
      //validates if there are any console errors
      failOnConsoleError()
  
    })
  })
  
})
