import { Component } from 'react'
import { connect } from 'react-redux'
import { checkAuth } from '../../actions/usersActions'

class Profile extends Component {

    componentDidMount() {
        this.props.checkAuth()
    }

    render() {
        console.log('profile', this.props)
        const { authChecked, currentUser } = this.props.user
        if (authChecked) {
            return <div> {currentUser.name} </div>
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
        checkAuth: () => dispatch(checkAuth())
      }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Profile)