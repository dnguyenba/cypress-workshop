import React, {Component} from 'react'
import LoadingButton from './LoadingButton'
import {Link} from 'react-router'

import {logout, clearError} from '../../actions'

class Nav extends Component {
  constructor (props) {
    super(props)
    this._logout = this._logout.bind(this)
    this._clearError = this._clearError.bind(this)
  }

  render () {
    const navButtons = this.props.loggedIn ? (
      <div>
        <Link id='dashboard' to='/dashboard' className='btn btn--dash btn--nav'>Dashboard</Link>
        {this.props.currentlySending ? (
          <LoadingButton className='btn--nav' />
        ) : (
          <a href='#' id='logout' className='btn btn--login btn--nav' onClick={this._logout}>Logout</a>
        )}
      </div>
    ) : (
      <div>
        <Link to='/register' id='register' className='btn btn--login btn--nav' onClick={this._clearError}>Register</Link>
        <Link to='/login' id='login' className='btn btn--login btn--nav' onClick={this._clearError}>Login</Link>
      </div>
    )

    return (
      <div className='nav'>
        <div className='nav__wrapper'>
          <Link to='/' className='nav__logo-wrapper' onClick={this._clearError}>

          </Link>
          {navButtons}
        </div>
      </div>
    )
  }

  _logout () {
    this.props.dispatch(logout())
  }

  _clearError () {
    this.props.dispatch(clearError())
  }
}

Nav.propTypes = {
  loggedIn: React.PropTypes.bool,
  currentlySending: React.PropTypes.bool,
  dispatch: React.PropTypes.func
}

export default Nav
