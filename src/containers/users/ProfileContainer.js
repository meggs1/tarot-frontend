import { Component } from 'react'
import { connect } from 'react-redux'
import { checkAuth } from '../../actions/userActions'
import Profile from '../../components/users/Profile'

class ProfileContainer extends Component {

  componentDidMount() {
    this.props.checkAuth()
  }

  userNotLoggedIn = () => {
    return (
      <div className="alert alert-danger" role="alert">
        Please log in to view your profile
      </div>
    )
  }

  render() {
    return (this.props.user.loggedIn ? <Profile user={this.props.user} /> : this.userNotLoggedIn() )
  } 
}
  
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: () => dispatch(checkAuth())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)