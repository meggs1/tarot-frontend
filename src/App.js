import React, { Component } from 'react'
import './App.css'

import NavBar from './components/NavBar'
import Home from './components/Home'
import SignUp from './components/users/SignUp'
import Login from './components/users/Login'
import Card from './components/cards/Card'
import CardForm from './components/cards/CardForm'
import CardsContainer from './containers/CardsContainer'
import ArcanasContainer from './containers/ArcanasContainer'
import SuitsContainer from './containers/SuitsContainer'

// import { fetchArcanas } from "./actions/arcanaActions"
// import { fetchSuits } from "./actions/suitActions"
import { fetchCards } from './actions/cardActions'

import { connect } from "react-redux";

import { Switch, Route } from 'react-router-dom';


class App extends Component {

  componentDidMount() {
    this.props.fetchCards()
    // this.props.fetchArcanas()
    // this.props.fetchSuits()
  }

  render() {
    console.log('App props', this.props)
    return (
      <div>
        <NavBar exact path="/" />
        <Switch>
          <Route exact path="/" render={routerProps => <Home {...routerProps} /> }/>
          <Route exact path="/signup" render={routerProps => <SignUp {...routerProps} /> } />
          <Route exact path="/login" render={routerProps => <Login {...routerProps} /> } />
          <Route exact path='/cards' render={routerProps => <CardsContainer {...routerProps} /> } />
          <Route exact path='/arcanas' render={routerProps => <ArcanasContainer {...routerProps} cards={this.props.cards.cards}/> } />
          <Route exact path='/suits' render={routerProps => <SuitsContainer {...routerProps} cards={this.props.cards.cards}/> } />
          {/* <Route path="/cards/:id" render={routerProps => {
              return ( <Card {...routerProps} card={this.props.cards.cards.find(card => card.id === parseInt(routerProps.match.params.id))}/> )
            }
          } /> */}
          <Route path="/cards/:id/edit" render={routerProps => {
              return ( <CardForm {...routerProps} /> )
            }
          } />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    // arcanas: state.arcanas,
    // suits: state.suits,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCards: () => dispatch(fetchCards()),
    // fetchArcanas: () => dispatch(fetchArcanas()), 
    // fetchSuits: () => dispatch(fetchSuits()),
    // editCard: (card) => dispatch(editCard(card))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default App