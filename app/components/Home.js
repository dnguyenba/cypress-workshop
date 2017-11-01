import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
  render () {
    return (
      <article>
        <div>
          <section className='text-section'>
            <h1>HomePage</h1>
          </section>

          <section className='text-section'>
            <h1>Welcome to the Cypress Workshop!</h1>
            <p>Your task is to write a simple test to login and create an account.</p>

            <p>For your first test you can use the username <code>blueberry</code> and password <code>password</code><br/> (for now don't bother hiding them in .env)</p>
          </section>

          <section className='text-section'>
            <h1>Writing the test:</h1>
            <p>The test file is located in /cypress/integration<br/></p>
            <p>You can grab an element by:<br/>element (), id (#), class (.) using: cy.get(selector)</p>
            <p> and interact with it:<br/>.click()<br/>.type('to type text')<br/>.clear('to clear text')<br/>These have to be chained off (usually) a cy.get()</p>
            <p>For how to assert with .should() please see the list of possible chainers at: <a href="https://docs.cypress.io/guides/references/assertions.html#BDD-Assertions">Cypress.io</a></p>
          </section>
        </div>
      </article>
    )
  }
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(Home)
