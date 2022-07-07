/// <reference types="cypress" />

import failOnConsoleError from "cypress-fail-on-console-error"



context('Verifying the HTML CSS page', () => {

  // afterEach(() => {
  // });
  
  // beforeEach(() => {
  // })

  const link = 'https://www.w3.org/standards/webdesign/htmlcss'

  it('SC01: Verify requesting to HTML CSS page', () => {
    cy.request({url: link, failOnStatusCode: false })
    .then((response) => {
      //validates the response of the request
      expect(response.status).to.equal(200)
      
    })

  })

  
  it('SC02: Verify the available links in he multi HTML CSS page', () => {
    
    cy.visit(link)
    cy.get("a").each($a => {
      
    const message = $a.text();

    //skip request command for current page
    if (message == "HTML & CSS"){
      //do nothing
    }else {
      cy.log("message", message)
      cy.log("Link", $a.prop('href'))
      
      //perform request to verify the captured links
      cy.request({url:$a.prop('href'), failOnStatusCode: false })
        .then((response) => {
          expect(response.status).to.not.equal(404)
        })

        // expect($a, message).to.have.attr("href").not.contain("undefined");
    }
  });
 
  })
})