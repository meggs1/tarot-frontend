import React, { Component } from 'react'
import { connect } from "react-redux";
import { Switch, Route } from 'react-router-dom';
import '../App.css'

import NavBar from './NavBar'
import Home from '../components/Home'
import SignUp from './users/SignUp'
import Login from './users/Login'
import CardInfo from '../components/cards/CardInfo'
import CardForm from './CardForm'
import Cards from '../components/cards/Cards'
import SuitsContainer from './SuitsContainer'
import ProfileContainer from './users/ProfileContainer'
import Spinner from '../components/Spinner'

import { fetchCards } from '../actions/cardActions'

class App extends Component {

  componentDidMount() {
    this.props.fetchCards()
  }

  render() {
    if (!!this.props.cards.loading) {
      return (
        <div>
          <NavBar />
          <Spinner />
        </div>
      )
    }

    return (
      <div>
        <NavBar />
        <div className="container bg-white text-dark bg-opacity-75 align-items-stretch">
          <Switch>
            <Route exact path="/" render={routerProps => <Home {...routerProps} /> }/>
            <Route exact path="/signup" render={routerProps => <SignUp {...routerProps} /> } />
            <Route exact path="/login" render={routerProps => <Login {...routerProps} /> } />
            <Route exact path='/cards' render={routerProps => <Cards {...routerProps} cards={this.props.cards.cards} /> } />
            <Route exact path='/suits' render={routerProps => <SuitsContainer {...routerProps} /> } />
            <Route exact path='/profile' render={routerProps => <ProfileContainer {...routerProps} />  } />
            <Route exact path="/cards/:id" 
              render={routerProps => {
                return ( <CardInfo {...routerProps} 
                  user={this.props.user} 
                  card={this.props.cards.cards.find(card => card.id === parseInt(routerProps.match.params.id))} />
                )
              }} 
            />
            <Route exact path="/cards/:id/edit" render={routerProps => {
              return ( <CardForm {...routerProps} /> )}} 
            />
          </Switch >
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCards: () => dispatch(fetchCards())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
