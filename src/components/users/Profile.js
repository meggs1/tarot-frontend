import { Component } from 'react'
import { connect } from 'react-redux'
import { checkAuth, logout } from '../../actions/usersActions'
import CardImage from '../cards/CardImage'

class Profile extends Component {

    componentDidMount() {
        this.props.checkAuth()
    }

    render() {
        console.log('profile', this.props)
        const { authChecked, currentUser } = this.props.user
        const userCards = JSON.parse(localStorage.getItem('userCards'))
        
        console.log('local storage', userCards)
        if (authChecked) {
          console.log(userCards)
          return (
            <div> 
              {currentUser.name} 
              {userCards.map(card => <CardImage card={card} num={0}/>)}
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