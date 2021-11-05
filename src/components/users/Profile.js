import { Component } from 'react'
import { connect } from 'react-redux'
import { checkAuth } from '../../actions/usersActions'
import CardInfo from '../cards/CardInfo'


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

  render() {
    const userCards = JSON.parse(localStorage.getItem('userCards'))
    const { authChecked, currentUser } = this.props.user

    if (authChecked) {
      return (
        <div className="container p-3 mb-2 bg-white text-dark bg-opacity-75">
          <h1>Welcome, {currentUser.name} </h1>
          { userCards ? this.displayUserCards(userCards) : null }
        </div>
      )
    } else {
      return (
        <div className="container justify-content-center">
          <h1>Please log in to view your profile</h1>
        </div>
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
    checkAuth: () => dispatch(checkAuth()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)