import { connect } from 'react-redux'
import NotLoggedRoute from '../components/router/NotLoggedRoute'
import { isLoggedInSelector } from '../selectors'

const mapStateToProps = state => {
    const isLoggedIn = isLoggedInSelector(state)

    return {
        isLoggedIn
    }
}

export default connect(mapStateToProps)(NotLoggedRoute)
