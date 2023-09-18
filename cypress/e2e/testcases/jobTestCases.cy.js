import jobPage from "../pageobjects/jobPage.cy"
const jobPageObject = new jobPage

describe("Job Creation Test cases", ()=>
{
    before(function() {
        cy.recordHar();
        cy.loginIntoApp(this.userData.userName, this.userData.password)
    })
    after(() => {
        // save the HAR file
        cy.saveHar();
      });

    it("Validate user should be able to naviagte to job creation screen <regression>" , function()
    {
       jobPageObject.naviagteToJobCreationScreen()
       jobPageObject.validate('components of job')
    })

    it("Validate buttons should be disbaled on 1st step <regression>", function()
    {
       jobPageObject.validate('Job location button disability')
       jobPageObject.validate('job next button disability')
    })

    it("Validate next button should disable when user just enter space in text area <regression>" , function()
    {
        jobPageObject.pasteTextInTextArea("  ")
        jobPageObject.validate('job next button disability')
    })

    it("Validate user should be able to paste the text in text area <regression>" , function()
    {
        jobPageObject.pasteTextInTextArea(this.jobData.textToPaste)
    })

    it("Validate user should be able to navigate to the 2nd step <regression>" , function()
    {
        jobPageObject.validate("job next button enabled")
        jobPageObject.clickOnButton("job next")
        jobPageObject.validate("step 2 of job creation")
    })

    it("Validate the componens of step 2 of job creation <regression>", function()
    {
        jobPageObject.validate("componens of step 2 of job creation")

    }) 
    it("Validate user should be able to see the suggestion when start typing for the city <regression>" , function()
    {
        jobPageObject.enterData("city",this.jobData.cityDetails) // enter city details
        jobPageObject.validate("city suggestions") // validate suggestion should be visible and data is shown
    })

    it("Select city from dropdown <regression>" , function()
    {
        jobPageObject.clickOnButton("city selection") // select teh city
       
    })

    it("Validate user can naviagte from step 2 to setp 1 <regression>" , function()
    {
        jobPageObject.clickOnButton('back button') // click on back button
        jobPageObject.validate('step1 has text prefilled') // validate step 1 has data prefilled
        jobPageObject.clickOnButton("job next") // again go to step 2
    })

    it("Validate data remains preserved after navigation from step 1 to step 2 <regression>",function()
    {
        jobPageObject.validate('step2 has text prefilled') // validate step 1 has data prefilled

    })
    
    it("Validate user should be able to navigate to the 3rd step <regression>" , function()
    {
        jobPageObject.validate("job next button enabled")
        jobPageObject.clickOnButton("job next")
        jobPageObject.validate("step 3 of job creation")
    })

    it("Validate the components of step3 of job creation <regression>" , function()
    {
        jobPageObject.validate("step 3 job creation components")
    })
    
    it("Validate user should be able to see the suggestion when start typing for the profiles <regression>" , function()
    {
        jobPageObject.enterData("profile",this.jobData.profile) // enter city details
        jobPageObject.validate("profile suggestions") // validate suggestion should be visible and data is shown
    })

    it("User should be able to select profile from dropdown <regression>" , function () 
    {
        jobPageObject.clickOnButton("profile selection") // select the profile
    })

    it("User should be able to remove the selected profile <regression>" , function ()
    {
        jobPageObject.clickOnButton("remove profile") // remove the profile

    })

    it("User should be able to Naviagte to step4 from step 3 <regression>" , function ()
    {
        jobPageObject.enterData("profile",this.jobData.profile) // enter city details
        jobPageObject.validate("profile suggestions") // validate suggestion should be visible and data is shown
        jobPageObject.clickOnButton("profile selection") // select the profile
        jobPageObject.clickOnButton("job next") // press next button
        jobPageObject.validate("step 4 of job creation")

    })

    it("Data should be preserved when user navigate back from step 4 to step3 <regression>" , function ()
    {
        jobPageObject.clickOnButton('back button') // click on back button
        jobPageObject.validate('step3 has text prefilled') // validate step 3 has data prefilled
        jobPageObject.clickOnButton("job next") // again go to step 4
    })

    it("User can enter compnay details <regression>" , function ()
    {
        cy.wait(1000)
        jobPageObject.enterData("company",this.jobData.company) // enter company details
        jobPageObject.validate("company suggestion") // validate suggestion should be visible and data is shown
        
    })

    it("User can select the company details <regression>" , function()
    {
        cy.wait(1000)
        jobPageObject.clickOnButton("company selection") // select the company
    })

    it("Validate the compnay details on page <regression>" , function()
    {
        jobPageObject.validate("company details")
    })

    it("User can Navigate from step4 to step 5 <regression>" , function()
    {
        jobPageObject.clickOnButton("job next") // press next button
        jobPageObject.validate("step 5 of job creation")
        cy.wait(60000)
    })

    it("User can thumbs up the companies <regression>" , function()
    {
        jobPageObject.clickOnButton("company thumbs up")
    })

    it("User can hover on the company suggestion and can see th text <regression>" , function()
    {
        jobPageObject.validate("hover on company")
      
    })

    it("User can Navigate from step 5 to step 6 <regression>" , function()
    {
        jobPageObject.clickOnButton("job next") // press next button
        jobPageObject.validate("step 6 of job creation")
    })

    it("Validate user can select business specialities <regression>", function()
    {
        jobPageObject.clickOnButton("business specialities hiring company")
    })

    it("Validate user can select business specialities for similiar companies <regression>", function()
    {
        jobPageObject.clickOnButton("business specialities similiar company")
    })

    it("User can Navigate from step 6 to step 7 <regression>" , function()
    {
        jobPageObject.clickOnButton("job next") // press next button
    })

      it("User can Navigate from step 7 to step 8 <regression>" , function()
    {
        jobPageObject.clickOnButton("job next") // press next button
    })

    
    // it("User can select suggested specialities on step 8 <regression>" , function()
    // {
    //     jobPageObject.clickOnButton("suggested specialities") // click on suggested specialities
    // })

    it("User can Navigate from step 8 to step 9 <regression>" , function()
    {
        jobPageObject.clickOnButton("job next") // press next button
    })

    it("User can add business specialities on step 9 <regression>" , function()
    {
        jobPageObject.clickOnButton("add business") // add busines
    })

    it("User can Navigate from step 9 to step 10 <regression>" , function()
    {
        jobPageObject.clickOnButton("job next") // press next button
    })

    
    it("Validate the components of job title screen <regression> " , function()
    {
        jobPageObject.validate("job title components") // validate title and description should be dislayed
    })

    it("Enter the employee count <regression> " , function()
    {
        jobPageObject.clickOnButton("Enter Employee Count")
    })

    // it("User can Navigate from step 10 to step 11 <regression>" , function()
    // {
    //     jobPageObject.clickOnButton("job next") // press next button
    // })

    it("Select All aditional title on the screen <regression> ", function()
    {
        jobPageObject.clickOnButton("company title")
    })

    it("User can Navigate from step 11 to step 12 <regression>" , function()
    {
        jobPageObject.clickOnButton("job next") // press next button
    })
    
    it("User can select the additional job titles <regression>" , function()
    {
        jobPageObject.clickOnButton("additional job title") // press next button
    })

    it("User can Navigate from step 12 to step 13 <regression>" , function()
    {
        jobPageObject.clickOnButton("job next") // press next button
    })

    it("User can add additional job title  <regression>" , function()
    {
        jobPageObject.clickOnButton("add additional title") // press next button
    })

    it("User can Navigate from step 13 to step 14 <regression>" , function()
    {       
        jobPageObject.clickOnButton("job next") // press next button
    })

    it("Add experience of the person <regression>" , function()
    {
        jobPageObject.clickOnButton("experience")
    })

    it("User can Navigate from step 14 to step 15 <regression>" , function()
    {       
        jobPageObject.clickOnButton("job next") // press next button
    })
    
    it("Select a title form a text <regression>" , function()
    {       
        jobPageObject.clickOnButton("tag selected") 
    })
    it("User can naviagte from step 15 to 16  <regression>" , function()
    {       
        jobPageObject.clickOnButton("job next")  
    })

    it("User can select all the skills  <regression>" , function()
    {       
        jobPageObject.clickOnButton("best fit skills selection")  
    })

    it("User can naviagte from step 16 to 17  <regression>" , function()
    {       
        jobPageObject.clickOnButton("job next") 
    })

    it("User can change priority of skill to medium  <regression>" , function()
    {       
        jobPageObject.clickOnButton("change priority to medium")  
    })
    it("User can change priority of skill to low  <regression>" , function()
    {       
        jobPageObject.clickOnButton("change priority to low")  
    })

    it("Add 1 more skills <regression>", function()
    {
        jobPageObject.clickOnButton("add 1 more skill at step 17")
    })

    it("User can naviagte from step 17 to 18  <regression>" , function()
    {       
        jobPageObject.clickOnButton("job next")  
    }) 
    it("User can select degree <regression>" , function()
    {       
        jobPageObject.clickOnButton("add education")  
    })
     it("User can select majors  <regression>" , function()
    {       
        jobPageObject.clickOnButton("add majors")  
    }) 
    it("User can naviagte from step 18 to 19  <regression>" , function()
    {       
        jobPageObject.clickOnButton("job next")  // press next button
    })


    it("User add tribe member  <regression>" , function()
    {       
        jobPageObject.clickOnButton("select tribe")  
    })

    it("User can check tribe permissions  <regression>" , function()
    {       
        jobPageObject.clickOnButton("validate tribe permissions")  
    })

    it("User can naviagte from step 19 to 20  <regression>" , function()
    {       
        jobPageObject.clickOnButton("job next")  // press next button
    })

    it("User see the fetching prospect message  <regression>" , function()
    {       
        jobPageObject.validate("validate prospects")
    })
    
    it("Wait till the time the prospects get generated  <regression>" , function()
    {       
        cy.wait(240000) // wait till get the prospects
    })


    

})