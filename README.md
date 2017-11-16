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

# Test IDs

## Containers

### Login

* ScrollView.__SCENE\_LOGIN__
  * [Input](#input).__USERNAME__
  * [Input](#input).__PASSWORD__
  * [Checkbox](#checkbox).__KEEP\_ME\_SIGNED\_IN__
  * [Button](#button).__BUTTON\_SIGN\_IN__
  * [Footer](#footer)

## Components

### Basic

#### Button

* View.__*testID*__ or __BUTTON__
  * TouchableHighlight.__HANDLE__
  * [Text](#text).__TEXT__

#### ButtonLink

* TouchableWithoutFeedback.__*testID*__ or __BUTTON_LINK__
  * [Text](#text).__TEXT__

#### Checkbox

* TouchableOpacity.__*testID*__ or __CHECKBOX__
  * [Icon](#icon)
  * [Text](#text).__LABEL__

#### Icon

* Image.__*testID*__ or __ICON__

#### Input

* View.__*testID*__ or __INPUT__
  * [Text](#text).__LABEL__
  * TextInput.__INPUT\_FIELD__
  * ?TouchableOpacit.__SECURE\_TEXT\_ENTRY__
  * ?View.__ERROR__

#### Text

* Text.__*testID*__ or __TEXT__

### Login

#### Footer

* View.__FOOTER__
* [ButtonLink](#buttonlink).__FORGOT\_PASSWORD__
* [ButtonLink](#buttonlink).__REGISTER__
