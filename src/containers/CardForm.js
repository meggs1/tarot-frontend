import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editCard } from '../actions/cardActions'
import { checkAuth } from '../actions/userActions'
import Form from '../components/cards/Form'

class CardForm extends Component {

    componentDidMount() {
        this.props.checkAuth()
    }

    render() {
        const currentUser = this.props.user.currentUser
        const card = this.props.cards.cards.find(
            card => card.id === parseInt(this.props.match.params.id)
        )

        return ( 
            <Form card={card} 
                currentUser={currentUser} 
                editCard={this.props.editCard}
            />
        )

    }
}

const mapStateToProps = state => {
    return { 
        cards: state.cards, 
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        editCard: (card) => dispatch(editCard(card)),
        checkAuth: () => dispatch(checkAuth())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardForm)