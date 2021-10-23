import React, { Component } from 'react'
import { editCard } from '../../actions/cardActions'
import { connect } from 'react-redux'

class CardForm extends Component {
    fileImage = React.createRef()
    
    state = {
        name: '',
        fullMeaning: '',
        uprightMeaning: '',
        reversedMeaning: '',
        image_url: '',
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
        this.props.editCard(this.state)
    }

    render() {
        // console.log('card form props', this.props)
        // console.log('card form state', this.state)
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    Card Name: {this.state.name}
                    
                   
                    <br />
                    Card Full Meaning:
                    <textarea
                        type="text"
                        name="name"
                        value={this.state.fullMeaning}
                        onChange={(e) => this.handleOnChange(e)} 
                    />
                    <br />
                    Card Upright Meaning:
                    <textarea
                        type="text"
                        name="name"
                        value={this.state.uprightMeaning}
                        onChange={(e) => this.handleOnChange(e)} 
                    />
                    <br />
                    Card Reverse Meaning:
                    <textarea
                        type="text"
                        name="name"
                        value={this.state.reversedMeaning}
                        onChange={(e) => this.handleOnChange(e)} 
                    />
                    <br />

                    <input 
                        type="file"
                        name="image"
                        ref={this.fileImage}
                    />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { cards: state.cards }
}

export default connect(mapStateToProps, { editCard })(CardForm)