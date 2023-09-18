class jobPage
{

    jobLocators = {

        newJobButton: "//div[@class='sectionHeaderRoot']/descendant::button[2]" ,
        pasteButton : ".paste-btn" ,
        copyText : ".generate-btn-wrapper > div" ,
        generateJobButton : ".generate-btn-wrapper > .secondaryQluButton" ,
        nextButton : ".primaryQluButton" ,
        jobDetails : "h2" ,
        jobArea : ".notranslate" ,
        locationButton : "//*[text()='Location']"  ,
        step2CityDropdown : "//*[@class='reactAutosuggestionContainer ']/descendant::input" ,
        typeStep1TextArea : "//*[contains(@class,'notranslate public-DraftEditor-content')]/descendant::div[contains(@class,'public-DraftStyleDefault-block')]" ,
        step2MainHeading : "//*[contains(@class,'jobDetailsLocationContainer')]/h1" ,
        step2CityHeading: "//*[contains(@class,'jobDetailsLocationContainer')]/p" ,
        backButton : "//*[contains(@class,'labelQluButton')]",
        citySuggestionDropdown: "//*[@class='newAutoSuggestionContainer']/ul/li/div" ,
        cityAfterSelection : "//*[contains(@class,'pillButton')]" ,
        profileAfterSelection : "//*[@class='idealProfileView']" ,
        backButton : "//*[@class='labelQluButton ']" ,
        step3MainHeading : "//*[@class='headingContainer']/descendant::h2" ,
        step3MainPrfoileHeading : "//*[@class='addIdealProfiles']/p" ,
        step3PrfoileSearchHeading : "//*[@class='addIdealProfiles']/h5" ,
        profilecloseButton : "//*[@class='idealProfileView']/descendant::button[@class='closeButton']"  ,
        companyDetails : "//h2" ,
        compnayDropdown : ".newAutoSuggestionInput" ,
        companyheader : "//*[@class='companyCardHeader']" ,
        companyDescription : "//*[@class='companyDescription']" ,
        companyParameters : "//*[@class='companyCardBody']" ,
        specialitiesHeading : "//*[@id='specialityDetailsControllerHeader']/descendant::h2" ,
        specialitiesDescription : "//*[@class='specialityDetailsDisclaimer']" ,
        companyThumbupButton : "//*[@class='SimilarCompaniesBtn']/button[1]" ,
        companyThumbupOverall : "//*[@class='SimilarCompaniesBtn']/button" ,
        companyHoveredName : "//*[contains(@class,'RightOnClickModalHeader')]/descendant::h3" ,
        companyHoverHeading : "//*[contains(@class,'RightOnClickModalHeader')]/descendant::p" ,
        companyHoverSubheading : "//*[contains(@class,'RightOnClickModalHeader')]/descendant::span" ,
        companyhoverOverView : "//*[contains(@class,'RightOnClickModaloverview')]/descendant::br" ,
        businessSpecialitiesButton : "//*[@class='companyCardContainer']/div[1]/descendant::div[contains(@class,'companyCardBody')]/div" ,
        businessSpecialitiesButtonSimiliarCompany : "//*[@class='companyCardContainer']/div[2]/descendant::div[contains(@class,'companyCardBody')]/div" ,
        suggestedSpecialities : "//*[@class='profileSpecialtyCardBody']/*" ,
        addBusinessButton : "//*[@id='addAdditionalBusinessButton']" ,
        addBusinessField : "//*[@class='newAutoSuggestionInput']" ,
        jobDescriptionOnStep9 : "//*[@class='jobDescriptionCard']/span" ,
        jobResultStep9 : "//*[@class='titleResult']" ,
        jobTitleStep9 : "//*[@class='goodTitle']" ,
        titleSelection : "//*[@class='criteriaAdditionalTitleBody']/*/*" ,
        additionalJobTitle : "//*[@class='criteriaAdditionalTitleBody']/*/*"  ,
        addAdditionalTitle : "//button[text()='Add a title']" ,
        addAdditionalTitlePlceHolder : "//*[@class='criteriaAdditionalTitleBody']/descendant::input" ,
        initialExp : "//*[@class='criteriaTotalExperiencesCounterContainer']/div[1]/input" ,
        nextExp : "//*[@class='criteriaTotalExperiencesCounterContainer']/div[2]/input" ,
        tagselectd : "//div[@class='carouselTagSelected ']"

    }

    naviagteToJobCreationScreen()
    {
        cy.xpath(this.jobLocators.newJobButton).click()
    }

    validate(type){
        switch(type)
        {
            case 'components of job' :
                cy.get(this.jobLocators.pasteButton).should('be.visible') // paste job button should be visible
                cy.get(this.jobLocators.copyText).should('be.visible') // copy text  should be visible
                cy.get(this.jobLocators.generateJobButton).should('be.visible') //chatGPT generate job  button should be visible
                cy.get(this.jobLocators.jobDetails).should('be.visible') // job details text should be visible
                cy.get(this.jobLocators.jobArea).should('be.visible') // area to add job description should be visible
                break

            case 'Job location button disability' :
                cy.xpath(this.jobLocators.locationButton).should('be.disabled') // validate on 1st step , location button is disbale
                break

            case 'job next button disability' :
                cy.get(this.jobLocators.nextButton).should('be.disabled') // validate without filling any details , next button is disabled
                break
            
            case 'job next button enabled' :
                cy.get(this.jobLocators.nextButton).should('be.enabled') // validate after filling any details , next button is enabled
                break
            
            case 'step 2 of job creation' :
                cy.xpath(this.jobLocators.step2CityDropdown).should('be.visible') // chck step 2 city entering field is present
                break
            
            case 'componens of step 2 of job creation' :
                cy.xpath(this.jobLocators.step2CityHeading).contains('City, state, Zone or Country') // validate city heading
                cy.xpath(this.jobLocators.step2MainHeading).contains('Where are you looking to hire from?') // validate region heading
                cy.xpath(this.jobLocators.backButton).should('be.enabled') // validate back button visible and enable
                cy.get(this.jobLocators.nextButton).should('be.disabled') //
                break

            case 'city suggestions' :
                cy.xpath(this.jobLocators.citySuggestionDropdown).each((item, index, list) => {
                    expect(list).to.not.be.null;
                });
                break
            
            case 'profile suggestions' :
                cy.xpath(this.jobLocators.citySuggestionDropdown).each((item, index, list) => {
                    expect(list).to.not.be.null;
                });
                break

             case 'step1 has text prefilled' :
                cy.xpath(this.jobLocators.typeStep1TextArea).should('not.be.empty')
                break

            case 'step2 has text prefilled' :
                cy.xpath(this.jobLocators.cityAfterSelection).should('be.visible')
                break

            case 'step 3 of job creation' :
                cy.xpath(this.jobLocators.step3MainHeading).should('be.visible')
                break

            case 'step 3 job creation components' :
                cy.xpath(this.jobLocators.step3PrfoileSearchHeading).contains('Search by name, Keywords or URL')
                cy.xpath(this.jobLocators.step3MainPrfoileHeading).contains('Who do you think could be the best fit for this job?') // va;idate the txt
                cy.xpath(this.jobLocators.backButton).should('be.enabled') // validate back button visible and enable
                break
            
            case 'step 4 of job creation' : 
                cy.xpath(this.jobLocators.companyDetails).should('be.visible') // validate company heading is present
                break

            case 'step3 has text prefilled' :
                cy.xpath(this.jobLocators.profileAfterSelection).should('be.visible')
                break

            case 'company suggestion' :
                cy.xpath(this.jobLocators.citySuggestionDropdown).each((item, index, list) => {
                    expect(list).to.not.be.null;
                });
                break

            case 'step 5 of job creation' :
                cy.xpath(this.jobLocators.companyDetails).should('be.visible')
                break
            
            case 'company details' :
                cy.xpath(this.jobLocators.companyheader).should('be.visible')
                cy.xpath(this.jobLocators.companyDescription).should('be.visible')
                cy.xpath(this.jobLocators.companyDetails).should('be.visible')
                break;
            
            case 'step 6 of job creation' :
                cy.xpath(this.jobLocators.specialitiesHeading).contains('Business, Specialties or Industry')
                cy.xpath(this.jobLocators.specialitiesDescription).should('be.visible')
                break
            
            case 'hover on company' :
                let companyName;
                let hoverCompanyName;
                cy.xpath(this.jobLocators.companyThumbupButton).then(($value) => {
                    companyName = $value.text()
                })
                cy.xpath(this.jobLocators.companyThumbupButton).trigger('mouseover')
                cy.xpath(this.jobLocators.companyHoverHeading).should('not.be.empty')
                cy.xpath(this.jobLocators.companyHoverSubheading).should('not.be.empty')
                cy.xpath(this.jobLocators.companyhoverOverView).should('not.be.empty')
                cy.xpath(this.jobLocators.companyHoveredName).then(($value) => {
                    hoverCompanyName = $value.text()
                    expect(hoverCompanyName).to.include(companyName)
                })
                break

            case 'step 7 of job creation':
                cy.xpath(this.jobLocators.specialitiesHeading).should('be.visible')
                break

            case 'job title components' :
                cy.xpath(this.jobLocators.jobDescriptionOnStep9).should('not.be.empty')
                cy.xpath(this.jobLocators.jobTitleStep9).should('not.be.empty')
                cy.xpath(this.jobLocators.jobResultStep9).should('not.be.empty')
                break

            case 'validate prospects' :
            cy.get('.unlockRecommendations').should('be.visible')
            cy.get('.recommendedLoading').should('be.visible')
            break
       }
    }

    pasteTextInTextArea(text)
    {
        cy.xpath(this.jobLocators.typeStep1TextArea).type(text)
    }

    clickOnButton(type)
    {
        switch (type)
        {
            case 'job next' :
                cy.wait(5000)
                cy.get(this.jobLocators.nextButton).click() // click on next button
                break 

            case 'city selection' :
                cy.get('#react-autowhatever-1--item-0').click() // select city selection
                cy.xpath(this.jobLocators.cityAfterSelection).should('be.visible')
                break
            
            case 'back button' : 
                cy.xpath(this.jobLocators.backButton).click() // click on back button
                break
            
            case 'profile selection' :
                    cy.get('#react-autowhatever-1--item-0').click() // select city selection
                    cy.xpath(this.jobLocators.profileAfterSelection).should('be.visible')
                    break

            case 'remove profile' : 
                cy.xpath(this.jobLocators.profilecloseButton).click() // remove the profile 
                cy.xpath(this.jobLocators.profileAfterSelection).should('not.exist')
                break

            case 'company selection' :
                cy.get('#react-autowhatever-1--item-0').click() // select city selection
                cy.get('.companyCard').should('not.be.empty')
                break

            case 'company thumbs up' :
                cy.xpath(this.jobLocators.companyThumbupButton).click()
                cy.xpath(this.jobLocators.companyThumbupOverall).should('have.length.above' ,5 )
                break
            
            case 'business specialities hiring company' :
                cy.xpath(this.jobLocators.businessSpecialitiesButton).each(($item, index, $list) => {
                    cy.wrap($item).click()
                });
                break
            
            case 'business specialities similiar company' :
                cy.xpath(this.jobLocators.businessSpecialitiesButtonSimiliarCompany).each(($item, index, $list) => {
                    cy.wrap($item).click()
                });
                break

            case 'suggested specialities' :
                var value = 0
                cy.xpath(this.jobLocators.suggestedSpecialities).each(($item , index , $list) =>
                {

                    cy.wrap($item).click()
               
                })
                break

            case 'add business' : 
                cy.xpath(this.jobLocators.addBusinessButton).click()
                cy.xpath(this.jobLocators.addBusinessField).last().type("SQA Business")
                break
            
            case 'Enter Employee Count' :
                const dataTransfer = new DataTransfer()
                cy.xpath("//*[contains(@class,'input-range__slider-container')][1]/descendant::div").trigger("dragstart" , {dataTransfer})
                cy.xpath("//*[contains(@class,'input-range__slider-container')][2]/descendant::div").trigger("drop" , {dataTransfer})
                break
            case 'company title' :
                cy.xpath(this.jobLocators.titleSelection).each(($item , $index , $list)=>
                {
                    cy.wrap($item).click()
                })
                break

            case 'additional job title' :
                cy.xpath(this.jobLocators.additionalJobTitle).each(($item , $index , $list)=>
                {
                    cy.wrap($item).click()
                })
                break
                
            case 'add additional title':
                cy.xpath(this.jobLocators.addAdditionalTitle).click()
                cy.xpath(this.jobLocators.addAdditionalTitlePlceHolder).last().type("SQA Engineer") 
                break
            
            case 'experience' :
                cy.xpath(this.jobLocators.initialExp).clear().type("3")
                cy.xpath(this.jobLocators.nextExp).clear().type("5")
                break

            case 'tag selected' :
                // cy.xpath(this.jobLocators.tagselectd).click()
                cy.xpath("//*[@class='carouselTagSelected ']").click() // first remove the tag
                cy.xpath("//div[@class='react-contextmenu-wrapper']/span")
                    .trigger('mousedown')
                    .then(($el ) => {
                    const el = $el[0]
                    const document = el.ownerDocument
                    const range = document.createRange()

                    range.selectNodeContents(el)
                    document.getSelection().removeAllRanges(range)
                    document.getSelection().addRange(range)
                    })  
                    .trigger('mouseup')
                    cy.document().trigger('selectionchange')
                    cy.contains('Test Automation Engineer').rightclick()
                    cy.xpath("//button[text()='Add skill']").click()

                // cy.xpath("//div[@class='react-contextmenu-wrapper']/span").setSelection("test") 
                  break
            case 'best fit skills selection' :
                cy.xpath("//*[@class='idealProfileSkills_Container']/div").each(($item , $index , $list) =>
                cy.wrap($item).click()
                )
              break
            
            case 'change priority to medium' :
                cy.xpath("//*[@class='criteriaSkillsBody']/span[3]/div[2]/button[text()='Medium']").click()
                break
            
            case 'change priority to low' :
                cy.xpath("//*[@class='criteriaSkillsBody']/span[4]/div[2]/button[text()='Low']").click()
                break
            
            case 'add 1 more skill at step 17':
                cy.xpath("//button[text()='Add a skill']").scrollIntoView().should('be.visible')
                cy.xpath("//button[text()='Add a skill']").click()
                cy.xpath("//*[@class='reactAutosuggestionContainer ']").last().type("TEST Automation in ")
                break 
            case 'add education':
                cy.xpath("//div[@class='criteriaEducationBody']//button[@class='labelQluButton ']").click()
                cy.xpath("//button[contains(@class,'DropdownToggle')]").click()
                cy.xpath("//button[contains(text(),'Bachelors')]").click()
                break
            case 'add majors' :
                cy.xpath("//div[@class='criteriaEducationBody'][2]//button[@class='labelQluButton ']").click()
                cy.xpath("//*[@class='newAutoSuggestionInput']").type("SQA")
                cy.xpath("//*[@class='newAutoSuggestionContainer']/ul/li[1]").click()
                break

            case 'select tribe' :
                cy.xpath("//input[@placeholder='Name/Email']").type("test@test.com")
                cy.wait(1800)
                cy.xpath(" //div[@id='react-autowhatever-1']").click()
                break
            
            case 'validate tribe permissions' : 
                cy.xpath("//div[@class='tribePermissionContainer']").should('be.visible')
                break
        }
    }

    enterData(type , Data)
    {
        switch (type)
        {
            case 'city' :
                cy.xpath(this.jobLocators.step2CityDropdown).type(Data) // enter city data 
                break  
            case 'profile' :
                cy.xpath(this.jobLocators.step2CityDropdown).type(Data) // enter profile data
                break 
            case 'company' : 
            cy.get(this.jobLocators.compnayDropdown).type(Data) // enter company data
                break 
        }
    }
}
export default jobPage