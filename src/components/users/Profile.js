import { Component } from 'react'
import { connect } from 'react-redux'
import { checkAuth, logout } from '../../actions/usersActions'
import CardImage from '../cards/CardImage'

class Profile extends Component {

    componentDidMount() {
        this.props.checkAuth()
    }

    render() {
        console.log('profile', this.props.user)
        const { authChecked, currentUser } = this.props.user
        // const cards = currentUser.card_ids
        if (authChecked) {

          return (
            <div> 
              {currentUser.name} 
              {/* {this.props.userCards.map(card => <CardImage card={card} />)} */}
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
        user: state.user,
        userCards: state.userCards
      }
    }
  
    const mapDispatchToProps = (dispatch) => {
      return {
        checkAuth: () => dispatch(checkAuth()),
        logout: () => dispatch(logout())
      }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Profile)