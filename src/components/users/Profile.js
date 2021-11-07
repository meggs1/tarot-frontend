import { Component } from 'react'
import { connect } from 'react-redux'
import { checkAuth } from '../../actions/usersActions'
import CardInfo from '../cards/CardInfo'
import DrawCard from '../cards/DrawCard'

class Profile extends Component {

  componentDidMount() {
    this.props.checkAuth()
  }

  displayUserCards = () => {
    const userCards = JSON.parse(localStorage.getItem('userCards'))
    if (userCards) {
    return (
      <div className="container">
        <h2 className="text-center">Your last tarot cards</h2>
        {userCards.map(card => 
          <CardInfo card={card} className='cardInfo' key={card.id}/> 
        )}
      </div> 
    ) 
    } else {
      return (
        <>
          <h3 className="text-center">Draw cards to get started</h3>
          <DrawCard />
        </>
      )
    }
  }

  userNotLoggedIn = () => {
    return (
      <div className="alert alert-danger" role="alert">
        Please log in to view your profile
      </div>
    )
  }

  render() {
    const authChecked = this.props.user.authChecked
    if (authChecked) {
      return (
        <>
          {this.displayUserCards()}
        </>
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