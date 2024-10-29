import userData from "../fixtures/user-data.json"
import LoginPage from "../pages/loginPage"
import HeroesPage from "../pages/heroesPage"

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const heroesPage = new HeroesPage()

describe('Login Spec', () => {
  
  it('Like - Admin', () => {
    loginPage.accessLoginPage()
    loginPage.loginAnyWithUser(userData.userAdmin.email, userData.userAdmin.password)
    cy.get("[href='/heroes/new']").should("be.visible")
    heroesPage.adminUserLike()
  })

  it('Hire - Admin', () => {
    loginPage.accessLoginPage()
    loginPage.loginAnyWithUser(userData.userAdmin.email, userData.userAdmin.password)
    cy.get("[href='/heroes/new']").should("be.visible")
    heroesPage.adminUserHirePositive()
  })

  it('No Hire - Admin', () => {
    loginPage.accessLoginPage()
    loginPage.loginAnyWithUser(userData.userAdmin.email, userData.userAdmin.password)
    cy.get("[href='/heroes/new']").should("be.visible")
    heroesPage.adminUserHireNegative()
  })

  it('Edit Hero - Admin', () => {
    loginPage.accessLoginPage()
    loginPage.loginAnyWithUser(userData.userAdmin.email, userData.userAdmin.password)
    cy.get("[href='/heroes/new']").should("be.visible")
    heroesPage.adminUserEdit(chance.animal(), chance.integer({ min: 0, max:25 }), chance.integer({ min: 0, max: 50 }), chance.integer({ min: 0, max: 50 }), chance.integer({ min: 0, max: 8 }))
  })

  it('Delete Hero OK - Admin', () => {
    loginPage.accessLoginPage()
    loginPage.loginAnyWithUser(userData.userAdmin.email, userData.userAdmin.password)
    cy.get("[href='/heroes/new']").should("be.visible")
    heroesPage.adminUserDeleteOK()
  })

  it('Delete Hero NG - Admin', () => {
    loginPage.accessLoginPage()
    loginPage.loginAnyWithUser(userData.userAdmin.email, userData.userAdmin.password)
    cy.get("[href='/heroes/new']").should("be.visible")
    heroesPage.adminUserDeleteNG()
  })

  it('Create Hero - Admin', () => {
    loginPage.accessLoginPage()
    loginPage.loginAnyWithUser(userData.userAdmin.email, userData.userAdmin.password)
    cy.get("[href='/heroes/new']").should("be.visible")
    heroesPage.adminUserCreateHero(chance.animal(), chance.integer({ min: 0, max: 25 }), chance.integer({ min: 0, max: 50 }), chance.integer({ min: 0, max: 50 }), chance.integer({ min: 0, max: 8 }))
  })

  it('Like - User', () => {
    loginPage.accessLoginPage()
    loginPage.loginAnyWithUser(userData.userSuccess.email, userData.userSuccess.password)
    heroesPage.otherUserLike()
  })

  it('Hire - User', () => {
    loginPage.accessLoginPage()
    loginPage.loginAnyWithUser(userData.userSuccess.email, userData.userSuccess.password)
    heroesPage.otheruserHirePositive()
  })

  it('No Hire - User', () => {
    loginPage.accessLoginPage()
    loginPage.loginAnyWithUser(userData.userSuccess.email, userData.userSuccess.password)
    heroesPage.otherUserHireNegative()
  })

})  
