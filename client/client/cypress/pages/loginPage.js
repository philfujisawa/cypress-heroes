class LoginPage {
    selectorsList() {
        const selectors = {
            emailField: "[name='email']",
            passwordField: "[name='password']",
            loginButton: "nav",
            wrongCredentialAlert: '.text-red-500',
            signInButton: '.bg-blue-700',
            heroesButton: "path",
            notLoggedAlert: '.bg-white'
        }

        return selectors
    }

    accessLoginPage () {
        cy.visit('http://localhost:3000/')
        
    }

    loginAnyWithUser(email, password) {
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButton).click()
    }

    loginEmpty () {
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().signInButton).click()
        cy.get(this.selectorsList().wrongCredentialAlert).eq(0).contains('Email is required')
        cy.get(this.selectorsList().wrongCredentialAlert).eq(1).contains('Password is required')
    }

    loginWrong (email, password) {
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButton).click()
        cy.get(this.selectorsList().wrongCredentialAlert).contains('Invalid email or password')
    }

    notLoggedLike () {
        cy.get(this.selectorsList().heroesButton).eq(0).click({force:true})
        cy.get(this.selectorsList().notLoggedAlert).contains('You must log in to like.')
    }

    notLoggedHire () {
        cy.get(this.selectorsList().heroesButton).eq(1).click({force:true})
        cy.get(this.selectorsList().notLoggedAlert).contains('You must log in to hire this hero.')
    }
}

export default LoginPage