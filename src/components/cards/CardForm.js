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
    }

    render() {
        console.log('card form props', this.props)
        // console.log('card form state', this.state)
        const currentUser = this.props.user.currentUser
        if (currentUser.is_admin === true) {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    Card Name: {this.state.name}

                    <br />
                    Card Full Meaning:
                    <textarea
                        type="text"
                        name="fullMeaning"
                        value={this.state.fullMeaning}
                        onChange={(e) => this.handleOnChange(e)} 
                    />
                    <br />
                    Card Upright Meaning:
                    <textarea
                        type="text"
                        name="uprightMeaning"
                        value={this.state.uprightMeaning}
                        onChange={(e) => this.handleOnChange(e)} 
                    />
                    <br />
                    Card Reverse Meaning:
                    <textarea
                        type="text"
                        name="reversedMeaning"
                        value={this.state.reversedMeaning}
                        onChange={(e) => this.handleOnChange(e)} 
                    />
                    <br />

                    <input 
                        type="file"
                        name="image"
                        // accept="image/png, image/jpeg"
                    />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )
        } else {
            return (
             <div>you must be an admin to view this page</div>
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