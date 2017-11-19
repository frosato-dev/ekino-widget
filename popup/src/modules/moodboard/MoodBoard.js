import React, {Component} from 'react'
import {connect} from 'react-redux'
import { pathToJS } from 'react-redux-firebase'

class MoodBoard extends Component {

  componentDidMount() {

    document.addEventListener('click', () => {
        this.props.dispatch({
            type: 'ADD_COUNT'
        })

        /*
          this.props.dispatch({
             type: 'USER_LOGGING_IN',
             data: {email: "test@test.com", password: "testtest"}
          })
        */
      })
  }

  render() {
    return (
      <div>
        Click Count: {this.props.count}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    //authError: pathToJS(state.firebase, 'authError'),
    //auth: pathToJS(state.firebase, 'auth'),
    //profile: pathToJS(state.firebase, 'profile')
  }
}

export default connect(mapStateToProps)(MoodBoard);
