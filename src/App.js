import React, { Component } from 'react'
import './App.css'

import NavBar from './components/NavBar'
import Home from './components/Home'
import SignUp from './components/users/SignUp'
import Login from './components/users/Login'
import CardInfo from './components/cards/CardInfo'
import CardForm from './components/cards/CardForm'
import CardsContainer from './containers/CardsContainer'
import ArcanasContainer from './containers/ArcanasContainer'
import SuitsContainer from './containers/SuitsContainer'
import Profile from './components/users/Profile'
import Spinner from './components/Spinner'

// import { fetchArcanas } from "./actions/arcanaActions"
// import { fetchSuits } from "./actions/suitActions"
import { fetchCards } from './actions/cardActions'

import { connect } from "react-redux";

import { Switch, Route } from 'react-router-dom';


class App extends Component {

  componentDidMount() {
    this.props.fetchCards()
  }

  render() {
    console.log('App props', this.props)


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
        <div class="container bg-white text-dark bg-opacity-75 align-items-stretch">
          <Switch>
            <Route exact path="/" render={routerProps => <Home {...routerProps} user={this.props.user}/> }/>
            <Route exact path="/signup" render={routerProps => <SignUp {...routerProps} /> } />
            <Route exact path="/login" render={routerProps => <Login {...routerProps} /> } />
            <Route exact path='/cards' render={routerProps => <CardsContainer {...routerProps} /> } />
            <Route exact path='/arcanas' render={routerProps => <ArcanasContainer {...routerProps} />} />
            <Route exact path='/suits' render={routerProps => <SuitsContainer {...routerProps} /> } />
            <Route exact path='/profile' render={routerProps => <Profile {...routerProps} />  } />
            <Route exact path="/cards/:id" 
              render={routerProps => {
                return ( <CardInfo {...routerProps} 
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
    user: state.user,
    // arcanas: state.arcanas,
    // suits: state.suits,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCards: () => dispatch(fetchCards()),
    // fetchArcanas: () => dispatch(fetchArcanas()), 
    // fetchSuits: () => dispatch(fetchSuits())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default App