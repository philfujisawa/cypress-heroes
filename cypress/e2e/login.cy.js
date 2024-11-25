import userData from "../fixtures/user-data.json"
import LoginPage from "../pages/loginPage"

const loginPage = new LoginPage()

describe('Login Spec', () => {
  
  it('Login Success - Admin', () => {
    loginPage.accessLoginPage()
    loginPage.loginAnyWithUser(userData.userAdmin.email, userData.userAdmin.password)
    cy.get("[href='/heroes/new']").should("be.visible")
  })

  it('Login Success - User', () => {
    loginPage.accessLoginPage()
    loginPage.loginAnyWithUser(userData.userSuccess.email, userData.userSuccess.password)
  })

  it('Login Fail - Empty Data', () => {
    loginPage.accessLoginPage()
    loginPage.loginEmpty()
  })

  it('Login Fail - User NG', () => {
    loginPage.accessLoginPage()
    loginPage.loginWrong(userData.userFail.email, userData.userFail.password)
  })

  it('Not Logged - To Like', () => {
    loginPage.accessLoginPage()
    loginPage.notLoggedLike()
  })

  it('Not Logged - To Hire', () => {
    loginPage.accessLoginPage()
    loginPage.notLoggedHire()
  })

})