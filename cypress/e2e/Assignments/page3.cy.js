/// <reference types="cypress" />

import failOnConsoleError from "cypress-fail-on-console-error"



context('Verifying the HTML Multi Modal Page', () => {

    // afterEach(() => {
    // });
    
    // beforeEach(() => {
    // })


    const link = 'https://www.w3.org/standards/webofdevices/multimodal'

    //send request to the page to validate the response code
    it('SC01: Verify requesting to multi modal page', () => {
      cy.request({url: link, failOnStatusCode: false })
      .then((response) => {
        expect(response.status).to.equal(200)
        
      })
    })


    //validate all the avaialble links in the page
    it('SC02: Verify the available links in he multi modal page', () => {
    
      cy.visit(link)
      cy.get("a").each($a => {
        
        const message = $a.text();

        //skip the request comman dor current page and email link
        if (message == "Multimodal Access"){
          
        } else if (message == "ashimura@w3.org"){
          
        } else {
          cy.log("message", message)
          cy.log("Link", $a.prop('href'))
          
          //perform request to verify the captured links
          cy.request({url:$a.prop('href'), failOnStatusCode: false })
            .then((response) => {
              expect(response.status).to.equal(200)
            })
        }

        // expect($a, message).to.have.attr("href").not.contain("undefined");
      });


  })
  
})
