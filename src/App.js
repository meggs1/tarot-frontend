import React, { Component } from 'react'

import NavBar from './components/NavBar'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import CardForm from './components/cards/CardForm'
import CardsContainer from './containers/CardsContainer'

import { fetchArcanas } from "./actions/arcanaActions"
import { fetchSuits } from "./actions/suitActions"

import { connect } from "react-redux";

import { Switch, Route } from 'react-router-dom';


class App extends Component {

  componentDidMount() {
    // this.props.fetchCards()
    this.props.fetchArcanas()
    this.props.fetchSuits()
  }

  signUp = (user) => {
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          name: user.name,
          username: user.username,
          password: user.password
        }
      })
    })
    .then(resp => resp.json())
    .then(result => {
      if (result.jwt) {
        this.setState({
          user: result.user
        })
      } else {
        console.log(result)
      }
    })
  }

  login = (user) => {
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user:{
          username: user.username,
          password: user.password
        }
      })
    })
    .then(resp => resp.json())
    .then(result => {
      if (result.jwt) {
        localStorage.setItem("jwt", result.jwt)
        this.setState({
          user: result.user
        })
      } else {
        console.log(result)
      }
    })
  }

  fetchUserPage = () => {
    const token = localStorage.getItem("jwt")
    const userId = this.state.user.id
    fetch(`http://localhost:3000/users/${userId}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  render() {
    // console.log('App props', this.props.cards)
    // debugger
    return (
      <div>
        <NavBar exact path="/" user="user"/>
        <Switch>
          <Route exact path="/" render={routerProps => <Home {...routerProps} fetchUserPage={this.fetchUserPage} user="user"/> }/>
          <Route exact path="/signup" render={routerProps => <SignUp {...routerProps} signUp={this.signUp}/> } />
          <Route exact path="/login" render={routerProps => <Login {...routerProps} login={this.login}/> } />
          <Route exact path='/cards' render={routerProps => <CardsContainer {...routerProps} /> } />
          <Route path="/cards/:id/edit" render={routerProps => {
              return ( <CardForm {...routerProps} /> )
            }
          }/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // cards: state.cards,
    arcanas: state.arcanas,
    suits: state.suits,
    loading: state.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchCards: () => dispatch(fetchCards()),
    fetchArcanas: () => dispatch(fetchArcanas()), 
    fetchSuits: () => dispatch(fetchSuits()),
    // editCard: (card) => dispatch(editCard(card))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)