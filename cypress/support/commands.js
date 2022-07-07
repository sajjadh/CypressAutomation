// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



// //Use this set of code to validate the fail on console error method
// Cypress.on('window:before:load', (win) => {
//   cy.spy(win.console, 'error');
//   cy.spy(win.console, 'warn');
// });


//Fail the test case upon any console error message
Cypress.on("window:before:load", win => {
    cy.stub(win.console, "error").callsFake(msg => {
      // log out to the terminal
      cy.now("task", "error", msg)
      // log to Command Log and fail the test
      throw new Error(msg)
    })
  })