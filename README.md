# cypress-workshop

- git clone https://github.com/dnguyenba/cypress-workshop
- npm i
- npm start

## All the following instructions can be found on the homepage too

Your task is to write a simple test to login and create an account.

For your first test you can use the username "blueberry" and password "password"
(for now don't bother hiding them in .env)

### Writing the test:
The test file is located in /cypress/integration
#### You can grab an element by:
- element (), id (#), class (.) using: cy.get(selector)
#### and interact with it:
- .click()
- .type('to type text')
- .clear('to clear text')

These have to be chained off (usually) a cy.get()
For how to assert with .should() please see the list of possible chainers at: [Cypress.io](https://docs.cypress.io/guides/references/assertions.html#BDD-Assertions)
