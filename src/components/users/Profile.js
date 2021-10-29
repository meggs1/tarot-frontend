import { Component } from 'react'
import { connect } from 'react-redux'
import { checkAuth } from '../../actions/usersActions'

class Profile extends Component {

    componentDidMount() {
        this.props.checkAuth()
    }

    render() {
        console.log('profile props', this.props)
        return (
            <div>
                profile
            </div>
        )
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
    checkAuth: () => dispatch(checkAuth())
    }
}
    

export default connect(null, mapDispatchToProps)(Profile)