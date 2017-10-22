import React, {Component} from 'react'
import {connect} from 'react-redux'

class MoodBoard extends Component {

  componentDidMount() {
      document.addEventListener('click', () => {
        this.props.dispatch({
            type: 'ADD_COUNT'
        })
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
    count: state.count
  }
}

export default connect(mapStateToProps)(MoodBoard);
