// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// import { after } from 'cypress/types/lodashtest';
import 'cypress-mochawesome-reporter/register';
import addContext from "mochawesome/addContext";
require('@neuralegion/cypress-har-generator/commands');
import './commands'
import 'cypress-xpath'

Cypress.on("window:before:load", win => {
  cy.stub(win.console, "error").callsFake(msg => {
    // log out to the terminal
    cy.now("task", "error", msg)
    // log to Command Log and fail the test
    throw new Error(msg)
  })
})
// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on("test:after:run", (test, runnable) => {  
  if (test.state === "failed") {    
    const screenshot       =`assets/${Cypress.spec.name}/${runnable.parent.title} --       ${test.title} (failed).png`;    
addContext({ test }, screenshot);  
  }
});


before(function() {

     cy.fixture('loginStageData.json').then(function(userData)  {
         this.userData = userData;
     })
     cy.fixture("jobStageData.json").then(function (jobData) {
      this.jobData = jobData;
    });
 })


//  before(function () {
//   if (Cypress.env("configFile") == "stage") {
//     cy.fixture("loginStageData.json").then(function (userData) {
//       this.userData = userData;
//     });
//     cy.fixture("jobStageData.json").then(function (jobData) {
//       this.jobData = jobData;
//     });
//     // cy.fixture("postingStageData.json").then(function (postingData) {
//     //   this.postingData = postingData;
//     // });
//   } 
  // else if (Cypress.env("configFile") == "prod") {
  //   cy.fixture("loginProdData.json").then(function (userData) {
  //     this.userData = userData;
  //   });
  //   cy.fixture("creditCardProdData.json").then(function (creditCardData) {
  //     this.creditCardData = creditCardData;
  //   });
  //   cy.fixture("postingProdData.json").then(function (postingData) {
  //     this.postingData = postingData;
  //   });
  // }
// });

beforeEach(function () {
    let testSuite = Cypress.env("SUITE");
    if (!testSuite) {
      return;
    }
  
    const testName = Cypress.mocha.getRunner().test.fullTitle();
    testSuite = "<" + testSuite + ">";
    if (!testName.includes(testSuite)) {
      this.skip();
    }
  });

  after(function()
  
  {
    cy.xpath("//*[@id='useravatar']").click()
    cy.xpath("//*[text()='Logout']").click()
  })
