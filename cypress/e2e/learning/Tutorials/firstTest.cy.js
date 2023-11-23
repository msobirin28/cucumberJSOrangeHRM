/// <reference types="cypress"/>

describe("Validate login functionality", () => {

    it('Validate login with Valid Credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin').should('have.value','Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123').should('have.value','admin123')
        cy.get('.oxd-button').click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')
        cy.get('.emp-attendance-chart > canvas').should('be.visible')
        cy.get('.oxd-userdropdown-tab').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    })
})