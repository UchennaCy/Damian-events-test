/// <reference types="cypress" />

describe('e2e test on coursedog\'s event page ', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.title().should('include', 'Upcoming Events: Dev\'s School Events Calendar')

    })

    context('When current date is November 20th', () => {
        beforeEach(() => {
            // Navigate calendar to October
            cy.get(':nth-child(2) > .vc-svg-icon').click()
            // Navigate calendar to November
            cy.get(':nth-child(2) > .vc-svg-icon').click()

            cy.wait(3000)
            // click on 20 to view events on the 20th of November, 2021
            cy.get('.vc-grid-container .vc-weeks').contains('20').click({  multiple: true})

            cy.location('pathname').should('eq', '/2021/11/20')
        })

        it('I can see all events happening today, when I click on today\'s event', () => {
            cy.get('div[role="listitem"]').should('be.visible')

            cy.get('div[role="listitem"]').should('be.visible')

            //  Note: There is 1 event happening on that date.
            cy.get('div[role="listitem"]').should('have.length', 1)

        })

        it('I can search the input bar and find all events matching the Tokyo phrase', () => {
            cy.get('.search__input').type('Tokyo')
            cy.get('.search__button').click()

            cy.wait(3000)
            cy.location('pathname').should('eq', '/search')
            cy.get('div[role="listitem"]').should('contain.text', 'Tokyo')


        })

        it('I can select Model UN and see all events by the organisation', () => {
            cy.get('#orgSelect').select('Model UN')
            cy.location('pathname').should('eq', '/search')

            cy.get('#search-results').should('contain.text', 'Model UN')

            cy.get('div[role="listitem"]').should('have.length', 3)
        })

        it('I can see more details when I click on the first event card', () => {
            cy.get('div[role="listitem"]').first().click()

            // add to calendar link
            cy.contains('button' , 'Add to calendar')
            
            // add to google calendar link
            cy.contains('a' , 'Add to Google Calendar')

            // event type
            cy.contains('Event Type').should('be.visible')

            // organization
            cy.contains('Organized by').should('be.visible')

            // event description
            cy.contains('Event Description').should('be.visible')
        })
    })

    context('When current date is September 2nd', () => {
        beforeEach(() => {
            // click on 20 to view events on the 2nd of September, 2021
            cy.get('.vc-grid-container .vc-weeks').contains('2').click({  multiple: true})

            cy.wait(3000)

            cy.location('pathname').should('eq', '/2021/9/2')
        })

        it('I can see all events happening today when I click on today\'s event', () => {
            cy.contains('Thursday, September 2, 2021').should('be.visible')

            cy.contains('No events found').should('be.visible')

            cy.get('div[role="listitem"]').should('have.length', 0)
        })

        it('I can see all upcoming featured events when I click on featured events ', () => {
            cy.get('[href="/featured"]').click()

            cy.location('pathname').should('eq', '/featured')

            cy.get('div[role="listitem"]').should('have.length', 3)

        })

        it('I can see more details when I click on the QA Task submission event card', () => {
            cy.get('[href="/featured"]').click()
            
            cy.get('div[role="listitem"]').contains('QA Task Submission').click()

            // add to calendar link
            cy.contains('button' , 'Add to calendar')
            
            // add to google calendar link
            cy.contains('a' , 'Add to Google Calendar')

            // event type
            cy.contains('Event Type').should('be.visible')

            // organization
            cy.contains('Organized by').should('be.visible')

            // event description
            cy.contains('Event Description').should('be.visible')

            // contacts
            cy.contains('Contacts').should('be.visible')
        })
    })
})
