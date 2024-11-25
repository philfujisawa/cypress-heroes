class HeroesPage {
    selectorsList() {
        const selectors = {
            fanCount: "[data-cy='fans']",
            saveCount: "[data-cy='saves']",
            fanButton: "[data-cy='like']",
            hireButton: "[data-cy='money']",
            yesHireButton: ".bg-red-600",
            genericButton: "button",
            editButton: "[data-cy='pencil']",
            deleteButton: "[data-cy='trash']",
            heroNameField: "[data-cy='nameInput']",
            priceHeroField: "[data-cy='priceInput']",
            fanHeroField: "[data-cy='fansInput']",
            saveHeroField: "[data-cy='savesInput']",
            powerSelect: "[data-cy='powersSelect']",
            nameHero: "[data-cy='name']"
        }

        return selectors
       
    }

    adminUserLike() {
        cy.get(this.selectorsList().fanCount).eq(0).invoke('text').then((textCount) => {
            const fanNumber = parseInt(textCount)
        cy.get(this.selectorsList().fanButton).eq(0).click()
        cy.get(this.selectorsList().fanCount).eq(0).should('have.text', fanNumber + 1)
        })
    }

    adminUserHirePositive() {
        cy.get(this.selectorsList().saveCount).eq(0).invoke('text').then((textCount) => {
            const hireNumber = parseInt(textCount)
        cy.get(this.selectorsList().hireButton).eq(0).click()
        cy.get(this.selectorsList().yesHireButton).click()
        cy.get(this.selectorsList().saveCount).eq(0).should('have.text', hireNumber + 1)
        })
    }

    adminUserHireNegative() {
        cy.get(this.selectorsList().saveCount).eq(0).invoke('text').then((textCount) => {
            const hireNumber = parseInt(textCount)
        cy.get(this.selectorsList().hireButton).eq(0).click()
        cy.get(this.selectorsList().genericButton).contains('No').click()
        cy.get(this.selectorsList().saveCount).eq(0).should('have.text', hireNumber)
        })
    }

    adminUserEdit(heroName, priceNumber, fanNumber, saveNumber, powerNumber) {
        cy.get(this.selectorsList().editButton).eq(0).click()
        cy.location('pathname').should('equal', '/heroes/1/edit')
        cy.get(this.selectorsList().heroNameField).clear().type(heroName)
        cy.get(this.selectorsList().priceHeroField).clear().type(priceNumber)
        cy.get(this.selectorsList().fanHeroField).clear().type(fanNumber)
        cy.get(this.selectorsList().saveHeroField).clear().type(saveNumber)
        cy.get(this.selectorsList().powerSelect).select(powerNumber)
        cy.get(this.selectorsList().genericButton).contains('Submit').click()
        cy.location('pathname').should('equal', '/heroes')
    }

    adminUserDeleteOK() {
        cy.get(this.selectorsList().nameHero).last().invoke('text').then((itemText) => {
            const nameDelete = itemText.trim()
        cy.get(this.selectorsList().deleteButton).last().click()
        cy.get(this.selectorsList().genericButton).contains('Yes').click()
        cy.contains(this.selectorsList().nameHero, nameDelete).should('not.exist')
        })            
    }
      
    adminUserDeleteNG() {
        cy.get(this.selectorsList().deleteButton).first().click()
        cy.get(this.selectorsList().genericButton).contains('No').click()    
    }

    adminUserCreateHero(heroName, priceNumber, fanNumber, saveNumber, powerNumber) {
        cy.get(this.selectorsList().genericButton).contains('Create New Hero').click()
        cy.location('pathname').should('equal', '/heroes/new')
        cy.get(this.selectorsList().heroNameField).clear().type(heroName)
        cy.get(this.selectorsList().priceHeroField).clear().type(priceNumber)
        cy.get(this.selectorsList().fanHeroField).clear().type(fanNumber)
        cy.get(this.selectorsList().saveHeroField).clear().type(saveNumber)
        cy.get(this.selectorsList().powerSelect).select(powerNumber)
        cy.get(this.selectorsList().genericButton).contains('Submit').click()
        cy.location('pathname').should('equal', '/heroes')           
    }

    otherUserLike () {
        cy.get(this.selectorsList().fanCount).eq(1).invoke('text').then((textCount) => {
            const initialCount = parseInt(textCount)
        cy.get(this.selectorsList().fanButton).eq(1).click()
        cy.get(this.selectorsList().fanCount).eq(1).should('have.text', initialCount + 1)
        })
    }

    otheruserHirePositive() {
        cy.get(this.selectorsList().saveCount).eq(1).invoke('text').then((textCount) => {
            const hireNumber = parseInt(textCount)
        cy.get(this.selectorsList().hireButton).eq(1).click()
        cy.get(this.selectorsList().yesHireButton).click()
        cy.get(this.selectorsList().saveCount).eq(1).should('have.text', hireNumber + 1)
        })
    }

    otherUserHireNegative() {
        cy.get(this.selectorsList().saveCount).eq(1).invoke('text').then((textCount) => {
            const hireNumber = parseInt(textCount)
        cy.get(this.selectorsList().hireButton).eq(1).click()
        cy.get(this.selectorsList().genericButton).contains('No').click()
        cy.get(this.selectorsList().saveCount).eq(1).should('have.text', hireNumber)
        })
    }
}

export default HeroesPage