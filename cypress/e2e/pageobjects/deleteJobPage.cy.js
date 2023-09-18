class deleteJob 
{
    navigateToAllJobScreen()
    {
        cy.xpath("//button[text()='View All']").click()
    }

    enter(name , value)
    {
        switch(name)
        {
            case 'invalid job name' :
                cy.xpath("//*[@placeholder='Search']").clear().type(value)
            break

        }
    }

    validate(data)
    {
        switch(data) 
        {
            case "invalid job name" :
                cy.xpath("//p[text()='No Jobs Found']").contains("No Jobs Found")
                break

            case 'job title' :
                cy.xpath("//*[@class='jobCard'][1]/*[@class='jobCardGeneralDetails']/span[1]/descendant::span/h1").contains("Automation")
                break

            case 'job location' :
                cy.xpath("//*[@class='jobCard'][1]/*[@class='jobCardSvgAndDescriptionContainer']/div[1]/descendant::p").contains("New York")
                break

            case 'job company' :
                cy.xpath("//*[@class='jobCard'][1]/*[@class='jobCardSvgAndDescriptionContainer']/div[2]/descendant::p").contains("Abacus")
                break

            case 'prospects' :
                cy.xpath("//*[@class='jobCard'][1]/descendant::*[@class='numberedDetails'][1]/h3").should('not.equal' , "0")
                break

            case 'navigation to job setup' :
                cy.xpath("//*[text()='Job Setup']").click()
                break

            case 'edit and view option':
                cy.xpath("//*[text()='Edit Job Setup']").should('be.visible')
                cy.xpath("//*[text()='View Job Setup']").should('be.visible')
                break

            case 'tribe member' :
                cy.xpath("//*[@class='tribesCard ']/descendant::h6").contains("test@test.com")
                cy.xpath("//*[@class='tribesCard ']/descendant::*[@class='invited']").contains("Invited")
                break

            case 'tribe members permissions' :
                cy.xpath("//*[text()='PERMISSIONS']/descendant::button").click()
                cy.xpath("//*[contains(@class,'dropdown expanded')]/*/*[2]").each(($item , $index , $list) =>
                {
                    cy.wrap($item).click()
                })
                break

            case 'tribe notifications' :
                cy.xpath("//button[contains(@class,'commentBtn')]/*").click()
                cy.xpath("//div[text()='Tribe Notifications']").should('be.visible')
                break

            case 'remove tribe' :
                cy.xpath("//*[contains(@class,'tribesDropdown ')]/button").click()
                cy.xpath("//button[text()='Remove Tribe Member']").click()
                break
            case 'apply label to the job' :
                cy.xpath("//*[contains(@class,'mainDropdown')]/button/*").click()
                cy.xpath("//*[@value='Add a label']").click()
                cy.xpath("//*[@placeholder='Enter Label']").type("Automation Job")
                cy.xpath("//*[@placeholder='Enter Label']/../button[1]").click()
                break
            case 'applied label' :
                cy.xpath("//*[@class='tribeCharacter']/p").contains("Automation Job")
                break
            case 'camapign screen' :
                cy.xpath("//*[text()='Campaigns']").click()
                cy.xpath("//*[text()='My Campaigns']").contains("My Campaigns")
                break
            case 'prospect screen' :
                cy.xpath("//div[text()='Prospects']").click()
                break
            case 'validate prospects count' :
                cy.xpath("//div[@class='paginationStatus']").should('not.include.text', 'Showing 0 of 0')
                break
            case 'find more prospect screen' :
                cy.xpath("//button[text()='Find More Prospects']").click()
                break;
            case 'select more prospects count' :
                cy.xpath("//button[@class='pillButton  '][1]").click()
                break
           
             case 'new title' : 
                // cy.scrollTo("//button[text()=' Add more']")
                cy.scrollTo('bottom')
                cy.xpath("//button[text()=' Add more']").click()
                cy.xpath("//*[@id='inputId']").type("Test Engineer")
                cy.xpath("//*[@id='inputId']/following-sibling::button").click()
                break

            case 'new specialities' :
                // cy.scrollTo("//button[text()=' Add more']")
                cy.scrollTo('bottom')
                cy.xpath("//button[text()='Add more']").click()
                cy.xpath("//*[@class='primaryInput']").type("Test Engineer")
                cy.xpath("//*[@class='primaryInput']/following-sibling::button[1]").click()
                break


            case '"new company' :
                cy.scrollTo("//button[text()='Add more']")
                cy.xpath("//button[text()='Add more']").click()
                cy.xpath("//*[@class='newAutoSuggestionInput']").type("abasuc")
                break

            case 'select new company' :
                break 
            case 'new skills':
                // cy.scrollTo("//button[text()=' Add more']")
                cy.scrollTo('bottom')
                cy.xpath("//button[text()='Add more']").click()
                cy.xpath("//*[@class='primaryInput']").type("Test Engineer")
                cy.xpath("//*[@class='primaryInput']/following-sibling::button[1]").click()
                break

        }
    }

    click(data)
    {
        switch(data)
        {
            case 'view prospect' :
                cy.xpath("//*[@class='jobCard'][1]/descendant::button").click()
                break
            case 'my tribe screen' :
                cy.xpath("//*[text()='My Tribe']").click()
                break
        }
    }

}

export default deleteJob