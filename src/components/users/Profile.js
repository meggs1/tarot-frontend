import { Component } from 'react'
import { connect } from 'react-redux'
import { checkAuth } from '../../actions/usersActions'
import CardImage from '../cards/CardImage'
// import Cards from '../cards/Cards'

class Profile extends Component {

    componentDidMount() {
        this.props.checkAuth()
    }

    state = {
      userCards: []
    }

    render() {
        // console.log('profile', this.props)
        const { authChecked, currentUser } = this.props.user
        const userCards = JSON.parse(localStorage.getItem('userCards'))
        
        

        console.log(userCards)
        if (authChecked) {
          // console.log(userCards)
          // debugger
          
          return (
            <div class="container"> 
              <h1>Welcome, {currentUser.name} </h1>
              <h2>Your last tarot cards</h2>
              
                <div class="container">
                  
                  {userCards.map(card => <CardImage card={card} className='cardImage'/>)}
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