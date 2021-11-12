import { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Form extends Component {
    
    state = {
        id: '',
        name: '',
        avatar: '',
        fullMeaning: '',
        uprightMeaning: '',
        reversedMeaning: '',
        suit: '',
        arcana: '',
        formComplete: false
    }

    componentDidMount() {
        { this.props.card ? this.setCard() : <Redirect push to={`/cards/${this.state.id}`}/> }  
    }
    
    notAdmin = () => {
        return (
            <div className="alert alert-danger" role="alert">
                You must be an admin to view this page.
            </div>
        )
    }

    setCard = () => {
        this.setState({
            id: this.props.card.id,
            name: this.props.card.name,
            avatar: this.props.card.avatar,
            fullMeaning: this.props.card.full_meaning,
            uprightMeaning: this.props.card.upright_meaning,
            reversedMeaning: this.props.card.reversed_meaning,
            suit: this.props.card.suit.name,
            arcana: this.props.card.arcana.name,
            formComplete: false
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
        this.setState({formComplete: true})
    }

    cardForm = () => {
        console.log('form', this.props)
        return (
            <div className="container mb-2 bg-white text-dark bg-opacity-75">
                <div className="row justify-content-center">
                    <div className="col" >
                        <img src={this.state.image ? this.state.image.url : null} 
                        alt={this.state.name}  className="large rounded mx-auto d-block" /> 
                    </div>
                    <div className="col">
                        <h1> Edit: {this.state.name} </h1>
                        <p><strong>{this.state.arcana} Arcana Suit of {this.state.suit}</strong></p>
                        <form onSubmit={this.handleOnSubmit}>
                            <h2>Card Full Meaning:</h2>
                            <textarea
                                type="text"
                                name="fullMeaning"
                                value={this.state.fullMeaning}
                                onChange={(e) => this.handleOnChange(e)} 
                                className="form-control"
                                rows="7"
                            />
                            <h2>Card Upright Meaning:</h2>
                            <textarea
                                type="text"
                                name="uprightMeaning"
                                value={this.state.uprightMeaning}
                                onChange={(e) => this.handleOnChange(e)} 
                                className="form-control"
                                rows="7"
                            />
                            <h2>Card Reverse Meaning:</h2>
                            <textarea
                                type="text"
                                name="reversedMeaning"
                                value={this.state.reversedMeaning}
                                onChange={(e) => this.handleOnChange(e)} 
                                className="form-control"
                                rows="7"
                            />
                            <br />
                            <input 
                                type="file" 
                                name="avatar" 
                                value={this.state.avatar} 
                                onChange={(e) => this.handleOnChange(e)} 
                                className="form-control"
                                rows="7"
                            />
                            <input type="submit" className="btn btn-secondary btn-lg btn-block"/>
                        </form>
                    </div>    
                </div>
            </div>
        )
    }

    render() {
        console.log('form', this.props, this.state)
        if (!!this.state.formComplete) {
            return <Redirect push to={`/cards/${this.state.id}`}/>
        }

        if (this.props.currentUser.is_admin) {
            return (
                this.cardForm()
            )
        } else {
            return this.notAdmin()
        }
    }
}

export default Form