
import loginPage from "../pageobjects/loginSignupPage.cy"
const loginObject = new loginPage

describe('Login / signup Page Negative Test Scenarios', () => {

  before(() => {
    // start recording
    cy.recordHar();
  });

  after(() => {
    // save the HAR file
    cy.saveHar();
  });
  
  it('Validate login with invalid syntex email <regression>', function() {
    cy.visit('/login')
    loginObject.enterData('userName' , this.userData.invalidUserName)
    loginObject.enterData('password' , this.userData.password)
    loginObject.validateResults('invalid email syntex error')
  })

  it('Validate login with invalid typed email <regression>', function() {
    cy.visit('/login')
    loginObject.enterData('userName' , this.userData.invalidEmail)
    loginObject.enterData('password' , this.userData.password)
    loginObject.clickOnButton('submit')
    loginObject.validateResults('invalid email error')
  })

  it('Validate login with invalid password <regression>', function() {
    cy.visit('/login')
    loginObject.enterData('userName' , this.userData.userName)
    loginObject.enterData('password' , this.userData.invalidPassword)
    loginObject.clickOnButton('submit')
    loginObject.validateResults('invalid password error')
  })

  it('Validate place holder text for login page <regression>', function() {
    cy.visit('/login')
    loginObject.validatePlaceHolderTextForLogin(this.userData.loginEmailPlaceHolderText , this.userData.signupPasswordPlaceHolderText)
  })

  it('validate forgot password option is present <regression>', function () {
    cy.visit('/login')
    loginObject.validateResults('forget password link')

  })

  it("Validate forgot password link is clickable <regression>" ,function()
  {
    cy.visit('/login')
    loginObject.clickOnButton('forget password')
    loginObject.validateResults('forget password page')

  })
  it("Validate user should not be able to get forget password link if provide incorrect email <regression>" ,function()
  {
    cy.visit('/login')
    loginObject.clickOnButton('forget password')
    loginObject.validateResults('forget password page')
    loginObject.enterData("fotget password email" ,this.userData.invalidForgetPassowrdEmail)
    loginObject.clickOnButton('submit')
    loginObject.validateResults('forget password email error')
  })

  it("Validate user should be able to get the forget passwprod link (this will fail because of some issues on stage)" ,function()
  {
    cy.visit('/login')
    loginObject.clickOnButton('forget password')
    loginObject.validateResults('forget password page')
    loginObject.enterData("fotget password email" ,this.userData.userName)
    loginObject.clickOnButton('submit')
    loginObject.validateResults('forget password email text')
    loginObject.validateForgetPasswordTextHasEmail(this.userData.userName)
  })

  it('Validate signup error msg for empty email <regression>', function() {
    cy.visit('/signup')
    loginObject.enterData('fullName' , this.userData.signupFullName)
    loginObject.enterData('password' , this.userData.signupPassword)
    loginObject.clickOnButton('submit')
    loginObject.validateResults('empty email error message')
  })

  it('Validate signup error msg for empty full name <regression>', function() {
    cy.visit('/signup')
    loginObject.enterData('userName' , this.userData.signupUserName)
    loginObject.enterData('password' , this.userData.signupPassword)
    loginObject.clickOnButton('submit')
    loginObject.validateResults('empty full name error message')
  })

  it('Validate signup error msg for empty password <regression>', function() {
    cy.visit('/signup')
    loginObject.enterData('userName' , this.userData.signupUserName)
    loginObject.enterData('fullName' , this.userData.signupFullName)
    loginObject.clickOnButton('submit')
    loginObject.validateResults('empty password error message')
  })

  it('Validate signup error msg for invalid email <regression>', function() {
    cy.visit('/signup')
    loginObject.enterData('userName' , this.userData.invalidUserName)
    loginObject.enterData('fullName' , this.userData.signupFullName)
    loginObject.validateResults('invalid signup email error')
  })

  it('Validate signup error msg for invalid password <regression>', function() {
    cy.visit('/signup')
    loginObject.enterData('password' , this.userData.invalidPassword)
    loginObject.enterData('fullName' , this.userData.signupFullName)
    loginObject.validateResults('invalid signup password error')
  })

  it('Validate place holder text for signup page <regression>', function() {
    cy.visit('/signup')
    loginObject.validatePlaceHolderTextForSignup(this.userData.signupEmailPlaceHolderText , this.userData.signupFullNamePlaceHolderText , this.userData.signupPasswordPlaceHolderText)
  })

  it("Validate signup on the application" , function()
  {
    cy.visit('/signup')

    var ran = Math.floor(Math.random() * 10000);
    loginObject.enterData('password' , this.userData.signupPassword)
    loginObject.enterData('fullName' , this.userData.signupFullName)
    loginObject.enterData('userName' ,'testinguser'+ran+'@yopmail.com' )
    loginObject.clickOnButton('submit')
    loginObject.validateResults('successful signup')

  })

  it('Validate user able to login on the application <regression>', function() {
    cy.visit('/login')
    loginObject.enterData('userName' , this.userData.userName)
    loginObject.enterData('password' , this.userData.password)
    loginObject.clickOnButton('submit')
    loginObject.validateResults('valid user login')
  })
})