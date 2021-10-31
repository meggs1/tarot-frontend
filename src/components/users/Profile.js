import { Component } from 'react'
import { connect } from 'react-redux'
import { checkAuth } from '../../actions/usersActions'
import Card from '../cards/Card'
// import { fetchCards } from '../../actions/cardActions'
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
            <div className="container p-3 mb-2 bg-white text-dark bg-opacity-75">
              <h1>Welcome, {currentUser.name} </h1>
              <h2>Your last tarot cards</h2>
              
                <div class="container">
                    {/* <Cards cards={userCards} /> */}
                  {userCards.map(card => 
                  <Card card={card} className='cardInfo'/> )}
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
        // fetchCards: () => dispatch(fetchCards())
      }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Profile)