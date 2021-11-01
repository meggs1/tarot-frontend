import { Component } from 'react'
import { connect } from 'react-redux'
import { checkAuth } from '../../actions/usersActions'
import CardInfo from '../cards/CardInfo'


class Profile extends Component {

  componentDidMount() {
    this.props.checkAuth()
  }

  render() {

    const { authChecked, currentUser } = this.props.user
    const userCards = JSON.parse(localStorage.getItem('userCards'))
    
    console.log(userCards)
    if (authChecked) {
      return (
        <div className="container p-3 mb-2 bg-white text-dark bg-opacity-75">
          <h1>Welcome, {currentUser.name} </h1>
          <h2>Your last tarot cards</h2>
          <div class="container">
            {userCards.map(card => 
              <CardInfo card={card} className='cardInfo'/> )}
          </div> 
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