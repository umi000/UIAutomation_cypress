import deleteJob from "../pageobjects/deleteJobPage.cy"
import jobPage from "../pageobjects/jobPage.cy"
const jobPageObject = new jobPage
const deletePageObject = new deleteJob

describe("Delete job test cases", ()=>
{
    before(function() {
        cy.loginIntoApp(this.userData.userName, this.userData.password)
    })

    it("Validate user can navigate to all job screen <regression>" , function()
    {
       deletePageObject.navigateToAllJobScreen()
    })

    it("Validate user can search the job with invalid job name <regression>" , function()
    {
        deletePageObject.enter("invalid job name" , "testestest")
        deletePageObject.validate("invalid job name")
    })

    it("Validate user can search the job with valid job name <regression>" , function()
    {
        deletePageObject.enter("invalid job name" , this.jobData.textToPaste)
    })

    it("Validate Title of the job created <regression>" , function()
    {
        deletePageObject.validate("job title")
    })

    it("Validate location of the job created <regression>" , function()
    {
        deletePageObject.validate("job location")
    })
    
    it("Validate company of the job created <regression>" , function()
    {
        deletePageObject.validate("job company")
    })

    it("Validate prospects count should not be 0 <regression>" , function()
    {
        deletePageObject.validate("prospects")
    })

    it("Validate User can navigate to prospect screen <regression>" , function()
    {
        deletePageObject.click("view prospect")
    })

    it("Validate user can naviagte to job setup section <regression>", function()
    {
        cy.wait(30000)
        deletePageObject.validate("navigation to job setup")
    })

    it("Validate user can see the edit and view job option on setup page <regression>" , function()
    {
        deletePageObject.validate("edit and view option")
    })

    it("Validate User can navigate to campaign screen <regression>" , function()
    {
        cy.wait(30000)
        deletePageObject.validate("camapign screen")

    })
     it("Navigate to my tribe screen <regression>", function()
     {
        cy.wait(30000)
        deletePageObject.click("my tribe screen")
     })

     it("Validate the name of invited tribe on the screen" , function()
     {
        deletePageObject.validate("tribe member")
     })

     it("Remove permissions of the tribe" , function()
     {
        deletePageObject.validate("tribe members permissions")
     })
     
     it("Validate notifications for tribe" , function()
     {
        deletePageObject.validate("tribe notifications")
     })

     it("Remove Tribe member" , function()
     {
        deletePageObject.validate("remove tribe")
     })

     it("apply label to the job <regression>" , function()
     {
        deletePageObject.validate("apply label to the job")

     })

     it("Validate label is present <regression>" , function()
     {
        deletePageObject.validate("applied label")
     })

     it("Navigate to prospect screen <regression>" , function()
     {
        deletePageObject.validate("prospect screen")
     })

     it("Validate prospect count should not be 0 <regression>" , function()
     {
        deletePageObject.validate("validate prospects count")
     })

     it("Validate user can naviagte to find more prospect screen " , function()
     {
        deletePageObject.validate("find more prospect screen")
     })

     it("Validate user can select the more prospects count" , function()
     {

        deletePageObject.validate(" select more prospects count")

     })

     it("Validate user can navigate to next screen of find more prospects" , function()
     {
        jobPageObject.clickOnButton("job next") // press next button

     })

     it("Validate user can add more title for the more prospects" , function() 
     {
        deletePageObject.validate("new title")
     })

     it("Validate user can navigate to company page of find more prospects" , function()
     {
        jobPageObject.clickOnButton("job next") // press next button

     })

     it("Validate user can add more company  for the more prospects" , function() 
     {
        deletePageObject.validate("new company")
        deletePageObject.validate("select new company")
     })

     it("Validate user can navigate to specialities of find more prospects" , function()
     {
        jobPageObject.clickOnButton("job next") // press next button

     })

     it("Validate user can add more specialities for the more prospects" , function() 
     {
      cy.wait(30000)
        deletePageObject.validate("new specialities")
     })

     it("Validate user can navigate to skills section  of find more prospects" , function()
     {
        jobPageObject.clickOnButton("job next") // press next button

     })

     it("Validate user can add more skills for the more prospects" , function() 
     {
      cy.wait(30000)
        deletePageObject.validate("new skills")
     })

     it("Validate user can navigate to final find more prospects" , function()
     {
        jobPageObject.clickOnButton("job next") // press next button

     })






})