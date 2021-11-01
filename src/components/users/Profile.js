import { Component } from 'react'
import { connect } from 'react-redux'
import { checkAuth } from '../../actions/usersActions'
import CardsContainer from '../../containers/CardsContainer'
import Card from '../cards/Card'

class Profile extends Component {

  componentDidMount() {
    this.props.checkAuth()
  }

  render() {
    const { authChecked, currentUser } = this.props.user
    const userCards = JSON.parse(localStorage.getItem('userCards'))
    debugger
    console.log(userCards)
    if (authChecked) {
      return (
        <div className="container p-3 mb-2 bg-white text-dark bg-opacity-75">
          <h1>Welcome, {currentUser.name} </h1>
          <h2>Your last tarot cards</h2>
          <div class="container">

              <CardsContainer userCards={userCards} className='cardInfo'/>
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