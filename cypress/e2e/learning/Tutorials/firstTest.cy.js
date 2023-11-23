/// <reference types="cypress"/>

import { login , logout } from "../../../util/handleSession"

context('Admin User Management', () => {

    const username = 'Admin'
    const password = 'admin123'

    it('Create user account', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        login(username,password)

        //click menu admin
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-header-breadcrumb-module').should('be.visible')
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Admin')

        //click button add
        cy.get('.orangehrm-header-container > .oxd-button').click()

        //set text username
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('titan123')

        //then logout
        // logout()
    })

})