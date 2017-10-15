import React, { PureComponent} from 'react'
import { Link } from 'react-router'

class Home extends PureComponent {

    render() {
        return (
            <div>
                <div> Home </div>
                <button onClick={()=>this.props.history.push('/mood-board')} >Mood Board</button>
                <button onClick={()=>this.props.history.push('/time')} >Time Capture</button>
            </div>
        )
    }
}

export default Home