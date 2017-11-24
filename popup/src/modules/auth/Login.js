import React, {Component} from 'react'
import {connect} from 'react-redux'
import GoogleButton from 'react-google-button'
import { pathToJS } from 'react-redux-firebase'

class Login extends Component {

  login = (data) => {
    this.props.dispatch({
      type: 'USER_LOGGING_IN',
      data
    })
  }

  logout = () => {
    this.props.dispatch({
      type: 'USER_LOGGING_OUT'
    })
  }

  render() {
    const { error } = this.props
    console.log(error)
    return (
      <div>
        {error && (
          <span>{error.message}</span>
        )}
        <GoogleButton onClick={() => this.login({ provider: 'google' })} />
        <button onClick={() => this.login({ email: "test@test.com", password: "testtest" })}>
          With credentials
        </button>
        <button onClick={() => this.logout()}>
          Logout
        </button>
      </div>
    )
  }
}


const mapStateToProps = ({ firebase }) => ({
  error: pathToJS(firebase, 'authError'),
  //auth: pathToJS(firebase, 'auth'),
  //profile: pathToJS(firebase, 'profile')
})

export default connect(mapStateToProps)(Login);


