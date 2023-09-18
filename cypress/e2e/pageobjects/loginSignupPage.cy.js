class loginPage
{
    loginPageLocators = {
        userName : '//*[@name="email"]' ,
        password : '//*[@name="password"]' , 
        fullName : '//*[@name="fullName"]' ,
        invalidSyntexEmailPasswordMsg : '.formik_err_msg' ,
        loginSubmitButon : '//button[contains(@class,"auth-submit-btn")]' ,
        signupEmailPlaceholder : '//*[@class="formik_input_custom" and @name ="email"]' ,
        signupFullNamePlaceholder : '//*[@class="formik_input_custom" and @name ="fullName"]' ,
        signupPasswordPlaceholder : '//*[@class="formik_input_custom" and @name ="password"]' ,
        loginEmailPlaceholder : '//*[@class="formik_input_custom " and @name ="email"]' ,
        loginPasswordPlaceholder : '//*[@class="formik_input_custom " and @name ="password"]' ,
        forgetPasswordOption : '//*[contains(@href , "/auth/reset-password")]' ,
        homeScreenAterLogin : '//*[@class="landinghome-content"]' ,
        forgetPasswordPageHeading : 'h1' ,
        forgetPasswordEmail : '//*[@class="formik_input_custom" and @name ="email"]'  ,
        chckEmailText : '//*[contains(@class," verifyEmailRoot")]' ,
        emailInnerTextOnForgetPassword : '//*[contains(@class," verifyEmailRoot")]/child::p[2]'

    }

    enterData(type , data)
    {
        switch(type)
        {
            case 'userName':  
                cy.xpath(this.loginPageLocators.userName).clear().type(data) 
            break;
            
            case 'password' :
                cy.xpath(this.loginPageLocators.password).clear().type(data)
            break
            case 'fullName' :
                cy.xpath(this.loginPageLocators.fullName).clear().type(data)
            break
            case 'fotget password email' :
                cy.xpath(this.loginPageLocators.forgetPasswordEmail).clear().type(data)
        }
    }

    validateResults(errorTyp)
    {
        switch(errorTyp)
        {
            case 'invalid email syntex error' :
                cy.get(this.loginPageLocators.invalidSyntexEmailPasswordMsg).should('be.visible')
            break;

            case 'invalid email error' :
                cy.get(this.loginPageLocators.invalidSyntexEmailPasswordMsg).should('be.visible')
                cy.get(this.loginPageLocators.invalidSyntexEmailPasswordMsg).contains('No account exists with this email')
            break;

            case 'invalid password error' :
                cy.get(this.loginPageLocators.invalidSyntexEmailPasswordMsg).should('be.visible')
                cy.get(this.loginPageLocators.invalidSyntexEmailPasswordMsg).contains('Password is invalid.')
            break;
            case 'empty email error message' :
                cy.get(this.loginPageLocators.invalidSyntexEmailPasswordMsg).should('be.visible')
                cy.get(this.loginPageLocators.invalidSyntexEmailPasswordMsg).contains('Email is required')
            break
            case 'empty full name error message' :
                cy.get(this.loginPageLocators.invalidSyntexEmailPasswordMsg).should('be.visible')
                cy.get(this.loginPageLocators.invalidSyntexEmailPasswordMsg).contains('Name is required')
            break
            case 'empty password error message' :
                cy.get(this.loginPageLocators.invalidSyntexEmailPasswordMsg).should('be.visible')
                cy.get(this.loginPageLocators.invalidSyntexEmailPasswordMsg).contains('Password is required')
                break
            case 'disable submit button' :
                cy.xpath(this.loginPageLocators.loginSubmitButon).should('be.be.disabled')
            break
            case 'invalid signup email error' :
                cy.get(this.loginPageLocators.invalidSyntexEmailPasswordMsg).should('be.visible')
                cy.get(this.loginPageLocators.invalidSyntexEmailPasswordMsg).contains('Invalid email address')
            break
            case 'invalid signup password error' :
                cy.get(this.loginPageLocators.invalidSyntexEmailPasswordMsg).should('be.visible')
                cy.get(this.loginPageLocators.invalidSyntexEmailPasswordMsg).contains('Minimum length of Password is 8 characters including at least 1 upper case letter and 1 special symbol.')
            break
            case 'forget password link' :
                cy.xpath(this.loginPageLocators.forgetPasswordOption).should('be.visible')
                break
            case 'valid user login' :
                cy.xpath(this.loginPageLocators.homeScreenAterLogin).should('be.visible')
                break
            case 'forget password page' :
                cy.get(this.loginPageLocators.forgetPasswordPageHeading).should('have.text', 'Reset Password')
                 break
            case 'forget password email text' :
                cy.xpath(this.loginPageLocators.chckEmailText).should('be.visible')
                cy.xpath(this.loginPageLocators.chckEmailText).contains('Check your email')
                break
            case 'forget password email error' :
                cy.get(this.loginPageLocators.invalidSyntexEmailPasswordMsg).contains('User not found')
                break
            case 'successful signup' :
                cy.get('h1').should('have.text', 'Verify your email')
                cy.get('.authElemContainer').should('be.visible')
                break
    }
}

    clickOnButton(option)
    {
        switch(option)
        {
            case 'submit' :
                cy.xpath(this.loginPageLocators.loginSubmitButon).click()
                break
            case 'forget password':
                cy.xpath(this.loginPageLocators.forgetPasswordOption).click()
                break

        }
       
    }

    validatePlaceHolderTextForSignup(email , fullName , password)
    {
       cy.xpath(this.loginPageLocators.signupEmailPlaceholder).invoke('attr','placeholder').should('eq',email)
       cy.xpath(this.loginPageLocators.signupFullNamePlaceholder).invoke('attr','placeholder').should('eq',fullName)
       cy.xpath(this.loginPageLocators.signupPasswordPlaceholder).invoke('attr','placeholder').should('eq',password)
    }

    validatePlaceHolderTextForLogin(email , password) 
    {
        cy.xpath(this.loginPageLocators.loginEmailPlaceholder).invoke('attr','placeholder').should('eq',email)
        cy.xpath(this.loginPageLocators.loginPasswordPlaceholder).invoke('attr','placeholder').should('eq',password)
    }

    validateForgetPasswordTextHasEmail(email)
    {
        cy.xpath(this.loginPageLocators.emailInnerTextOnForgetPassword).contains(email)
    }

}

export default loginPage