# Coursedog's e2e test

This repo contains my e2e tests for the Coursedog event site. Test is wrotten in Cypress (https://www.cypress.io/).

## To Test

The steps below will take you all the way through:

```bash
## clone this repo to a local directory
git clone https://github.com/WiseCyril/Damian-events-test.git

## cd into the cloned repo
cd Damian-events-test

## install the node_modules
npm install

## Open Cypress 
npm run cy:open
```


## User Stories

* When I select a specific date from the calendar
 I can only see events that happen on that day

## Given that current date is November 20th, 2021

## 1. When I click on Today’s Events
 I can see all events happening today
 
 Note: There is 1 event happening on that date.

## 2. When I use the Search Input in the navigation bar and type in "Tokyo" and confirm
 I can find all events matching the phrase "Tokyo".
 
 Note: There’s 1 event matching the "Tokyo" phrase

## 3. When I select the "Model UN" organization from the Filter by Organization dropdown
 I can see all events organized by that organization
 
 Note: There are upcoming 3 events that match this search

## 4. When I click on the first event card
 I can see more details about the event
 Add to calendar link
 Add to Google calendar link
 Event Type
 Organization
 Event description

** Given that current date is September 2nd, 2021

## 5. When I click on Today’s Events
 I can see there are no events.

## 6. When I click on Featured Events
 I can see all upcoming featured events
 
 Note: There are 3 upcoming featured meetings for that week.

## 7. When I click on the QA Task Submission event card
 I can see more details about the event
 Add to calendar link
 Add to Google calendar link
 Event Type
 Organization
 Contacts
 Event description

 