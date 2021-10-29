import { Component } from 'react'
import { connect } from 'react-redux'
import { checkAuth, logout } from '../../actions/usersActions'

class Profile extends Component {

    componentDidMount() {
        this.props.checkAuth()
    }

    render() {
        console.log('profile', this.props)
        const { authChecked, currentUser } = this.props.user
        if (authChecked) {

            return (
                <div> 
                    {currentUser.name} 
                    <button onClick={this.props.logout}>logout</button>
                </div>
            )
        } else {
          return <div>log in</div>
        }
      }
    }
  
    const mapStateToProps = (state) => {
        return {
            user: state.user
        }
    }
  
    const mapDispatchToProps = (dispatch) => {
      return {
        checkAuth: () => dispatch(checkAuth()),
        logout: () => dispatch(logout())
      }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Profile)