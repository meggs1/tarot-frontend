import { Component } from 'react'
import { connect } from 'react-redux'
import { checkAuth } from '../../actions/usersActions'

import CardInfo from '../cards/CardInfo'
import DrawCard from '../cards/DrawCard'

class Profile extends Component {

  componentDidMount() {
    this.props.checkAuth()
  }

  displayUserCards = (userCards) => {
    return (
      <div class="container">
        <h2>Your last tarot cards</h2>
        {userCards.map(card => 
          <CardInfo card={card} className='cardInfo'/> 
        )}
      </div> 
    )
  }

  userNotLoggedIn = () => {
    return (
      <div class="alert alert-danger" role="alert">
        Please log in to view your profile
      </div>
    )
  }

  render() {
    const userCards = JSON.parse(localStorage.getItem('userCards'))
    const authChecked = this.props.user.authChecked

    if (authChecked) {
      return (
        <div className="container p-3 ">
          { userCards ? this.displayUserCards(userCards) : 
            <>
              <h3>Draw cards to get started</h3>
              <DrawCard />
            </>
          }
        </div>
      )
    } else {
      return (
        <>
          {this.userNotLoggedIn()}
        </>
      )
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