import React, { Component } from 'react'
import { editCard } from '../../actions/cardActions'
import { connect } from 'react-redux'

class CardForm extends Component {
    
    state = {
        name: '',
        fullMeaning: '',
        uprightMeaning: '',
        reversedMeaning: '',
        image: '',
        arcara: '',
        suit: '',
        id: ''
    }

    componentDidMount() {
        this.findCard()
    }

    findCard = () => {
        const card = this.props.cards.cards.find(card => card.id === parseInt(this.props.match.params.id))

        this.setState({
            id: card.id,
            name: card.name,
            image: card.image_url,
            fullMeaning: card.full_meaning,
            uprightMeaning: card.upright_meaning,
            reversedMeaning: card.reversed_meaning,
            suit: card.suit.name,
            arcana: card.arcana.name
        })
    }

    handleOnChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        const card = this.state
        this.props.editCard(card)
        this.props.history.push(`/cards/${this.state.id}`)
    }

    render() {
        console.log('card form props', this.props)
        // console.log('card form state', this.state)
        const currentUser = this.props.user.currentUser
        if (currentUser.is_admin === true) {
        return (
            <div className="container p-3 mb-2 bg-white text-dark bg-opacity-75">
                <div class="row justify-content-center">
                    <div class="col" >
                        <img src={this.state.image ? this.state.image.url : null} 
                        alt={this.state.name}  width="480" height="788" /> 
                    </div>
                    <div class="col">
                        <h1> Edit: {this.state.name} </h1>
                        <p><strong>{this.state.arcana} Arcana Suit of {this.state.suit}</strong></p>
                        <form onSubmit={this.handleOnSubmit}>
                            <h2>Card Full Meaning:</h2>
                            <textarea
                                type="text"
                                name="fullMeaning"
                                value={this.state.fullMeaning}
                                onChange={(e) => this.handleOnChange(e)} 
                                class="form-control"
                                rows="7"
                            />
                            <h2>Card Upright Meaning:</h2>
                            <textarea
                                type="text"
                                name="uprightMeaning"
                                value={this.state.uprightMeaning}
                                onChange={(e) => this.handleOnChange(e)} 
                                class="form-control"
                                rows="7"
                            />
                            <h2>Card Reverse Meaning:</h2>
                            <textarea
                                type="text"
                                name="reversedMeaning"
                                value={this.state.reversedMeaning}
                                onChange={(e) => this.handleOnChange(e)} 
                                class="form-control"
                                rows="7"
                            />
                            <br />
                            <input type="submit" class="btn btn-secondary btn-lg btn-block"/>
                        </form>
                    </div>    
                </div>
            </div>
        )
        } else {
            return (
                <div>You must be an admin to view this page.</div>
            )
        }
    }
}

const mapStateToProps = state => {
    return { 
        cards: state.cards, 
        user: state.user
    }
}

export default connect(mapStateToProps, { editCard })(CardForm)